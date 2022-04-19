import React, { FC } from 'react';
import {
  Box,
  Text,
  Button,
  useColorModeValue,
  Image,
  Flex,
  Heading,
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
      w={{ base: '90vw', md: 'calc(100vw - 300px)', lg: 'calc(80vw - 300px)' }}
      px={2}
      bg={useColorModeValue('gray.300', 'gray.700')}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box maxW="5rem" p={2} mr={3}>
          <Image w="fill" h="fill" src={album.images[0].url} />
        </Box>
        <Flex flexDir="column" mr="auto">
          <Heading fontSize={{ base: '1rem', md: '1.25rem' }}>{name}</Heading>
          <Text fontSize={{ base: '0.75rem', md: '1rem' }}>
            {artists[0].name} - {album.name}
          </Text>
        </Flex>
        <Text mr="4rem">{msToMinutesSecond(durationMs)}</Text>
        <Button onClick={handleSelect}>
          {isSelected ? 'Deselect' : 'Select'}
        </Button>
      </Flex>
    </Box>
  );
};

export default TrackItem;
