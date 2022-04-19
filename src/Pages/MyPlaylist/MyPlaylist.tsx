import { Box, Button, Flex, Grid, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiMusic } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import Login from '../Login/Login';
import PlaylistItem from './PlaylistItem';

const MyPlaylist = () => {
  const { user, userPlaylist } = useAppSelector((state) => state.user);
  const playlist = userPlaylist?.items;

  if (!user) {
    return <Login />;
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
