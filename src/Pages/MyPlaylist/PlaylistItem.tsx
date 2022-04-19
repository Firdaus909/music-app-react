import React, { FC } from 'react';
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Item } from '../../types/userPlaylists';

interface playlistProps {
  playlist: Item;
}

const PlaylistItem: FC<playlistProps> = ({ playlist }) => {
  const { name, description, owner, images } = playlist;
  return (
    <Flex
      maxW="270px"
      w="full"
      h="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="2xl"
      rounded="md"
      overflow="hidden"
      flexDir="column"
    >
      <Image h="auto" w="100%" src={images[0].url} objectFit="cover" />

      <Flex flexDir="column" justifyContent="space-between" p={6} h="100%">
        <Stack
          wordBreak="break-word"
          spacing={0}
          align="center"
          mb={5}
          flexGrow={1}
        >
          <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
            {name}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
        <Text color="gray.500">{owner.display_name}</Text>
      </Flex>
    </Flex>
  );
};

export default PlaylistItem;
