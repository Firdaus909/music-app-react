import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import TrackItem from './TrackItem';
import ModalForm from './Modal/ModalForm';
import Searchbar from './Searchbar';

const CreatePlaylist = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [error, setError] = useState<string>('');
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const { track, selectedTracks } = useAppSelector((state) => state.track);
  const tracksItem = track?.tracks.items;

  useEffect(() => {
    if (selectedTracks.length < 1) {
      onClose();
    }
  }, [selectedTracks.length, onClose]);

  return (
    <Flex minH="calc(100vh - 80px)" flexDir="column" alignItems="center" pb={4}>
      <Heading my={4}>Create Playlist</Heading>
      <Searchbar setError={setError} setIsSearched={setIsSearched} />
      {isSearched && (
        <VStack mt="2rem">
          {tracksItem && tracksItem.length > 0 ? (
            tracksItem.map((tr) => <TrackItem key={tr.id} track={tr} />)
          ) : (
            <div>No Tracks Found</div>
          )}
        </VStack>
      )}
      {error && <div>{error}</div>}
      {selectedTracks.length > 0 && (
        <Box onClick={() => onOpen()} pos="fixed" bottom="2rem" right="3rem">
          <IconButton
            aria-label="modal open"
            borderRadius="50%"
            colorScheme="cyan"
            size="lg"
            icon={<BsPlusLg />}
          />
          <Box
            pos="fixed"
            bottom="4rem"
            right="2.8rem"
            bg="red"
            px={1}
            borderRadius="50%"
            color="white"
            _hover={{ cursor: 'pointer' }}
          >
            {selectedTracks.length}
          </Box>
        </Box>
      )}
      <ModalForm onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default CreatePlaylist;
