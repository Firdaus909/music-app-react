import { Flex, Heading, Image, Text, Box, IconButton } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { trackAction } from '../../../store/slice/trackSlice';
import { Item } from '../../../types/tracks';

interface modalProps {
  tracks: Item;
}

const ModalCard: FC<modalProps> = ({ tracks }) => {
  const { album, artists, name, uri } = tracks;
  const selectedTracks = useAppSelector((state) => state.track.selectedTracks);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    const newSelected = selectedTracks.filter((tr) => tr.uri !== uri);
    dispatch(trackAction.setSelectedTrack(newSelected));
  };

  return (
    <Box
      w="100%"
      px={2}
      bg="gray.300"
      _dark={{ bg: 'gray.700' }}
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
        <IconButton
          colorScheme="red"
          aria-label="delete"
          icon={<FiTrash2 />}
          onClick={handleDelete}
        />
      </Flex>
    </Box>
  );
};

export default ModalCard;
