import React, { FC } from 'react';
import {
  Box,
  Text,
  Button,
  useColorModeValue,
  Image,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Item } from '../../types/tracks';
import { msToMinutesSecond } from '../../helper/functions';
import { trackAction } from '../../store/slice/trackSlice';

interface TrackProps {
  track: Item;
}

const TrackItem: FC<TrackProps> = ({ track }) => {
  const { album, name, artists, duration_ms: durationMs, uri } = track;
  const selectedTracks = useAppSelector((state) => state.track.selectedTracks);
  const dispatch = useAppDispatch();

  const handleSelect = () => {
    const selected = selectedTracks.find((tr) => tr.uri === uri);
    let newSelected;
    if (!selected) newSelected = [...selectedTracks, track];
    else newSelected = selectedTracks.filter((tr) => tr.uri !== uri);
    dispatch(trackAction.setSelectedTrack(newSelected));
  };

  const isSelected = selectedTracks.find((tr) => tr.uri === uri);

  return (
    <Box
      w={{ base: '90vw', md: 'calc(100vw - 300px)', lg: 'calc(90vw - 300px)' }}
      px={{ base: 1, sm: 2 }}
      bg={useColorModeValue('gray.300', 'gray.700')}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box maxW={{ base: '3rem', md: '5rem' }} p={{ base: 1, sm: 2 }}>
          <Image w="fill" h="fill" src={album.images[0].url} />
        </Box>
        <Flex
          flexDir="column"
          w={{ base: '40%', sm: '50%' }}
          ml={{ base: '0.125rem', sm: '0.5rem', md: '1rem' }}
        >
          <Heading fontSize={{ base: '0.75rem', sm: '1rem', md: '1.25rem' }}>
            {name}
          </Heading>
          <Text fontSize={{ base: '0.5rem', sm: '0.75rem', md: '1rem' }}>
            {artists[0].name} - {album.name}
          </Text>
        </Flex>
        <Text
          fontSize={{ base: '0.5rem', sm: '0.75rem', md: '1rem' }}
          ml="10%"
          mr="auto"
        >
          {msToMinutesSecond(durationMs)}
        </Text>
        <Button
          size={useBreakpointValue(['xs', 'sm', 'md'])}
          onClick={handleSelect}
        >
          {isSelected ? 'Deselect' : 'Select'}
        </Button>
      </Flex>
    </Box>
  );
};

export default TrackItem;
