import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { FiMusic } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Services from '../../services/service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { userAction } from '../../store/slice/userSlice';
import PlaylistItem from './PlaylistItem';

const MyPlaylist = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, userPlaylist } = useAppSelector((state) => state.user);
  const playlist = userPlaylist?.items;
  const dispatch = useAppDispatch();

  const getUserPlaylist = useCallback(async () => {
    const { data } = await Services.getUserPlaylist();
    dispatch(userAction.setUserPlaylist(data));
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    getUserPlaylist();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Flex minH="calc(100vh - 80px)" justifyContent="center">
        <Spinner
          mt={4}
          thickness="4px"
          color={useColorModeValue('cyan.400', 'cyan.600')}
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Box>
      {playlist && playlist.length > 0 ? (
        <Flex
          minH="calc(100vh - 80px)"
          flexDir="column"
          alignItems="center"
          pb={4}
        >
          <Heading py={4}>{user?.display_name}&apos;s Playlist</Heading>
          <Grid
            mt={6}
            w={{ base: '90vw', md: 'calc(90vw - 240px)' }}
            templateColumns="repeat(auto-fit, minmax(12rem,1fr))"
            gap={4}
          >
            {playlist.map((pl) => (
              <PlaylistItem key={pl.id} playlist={pl} />
            ))}
          </Grid>
        </Flex>
      ) : (
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          minH="calc(100vh - 80px)"
        >
          <Icon as={FiMusic} fontSize="5rem" />
          <Heading fontSize="2rem" mb="4">
            Create your first playlist
          </Heading>
          <Button
            as={Link}
            to="/search"
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Create Playlist
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default MyPlaylist;
