import { Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { stringToDate } from '../../helper/functions';
import { useAppSelector } from '../../store/hooks';
import Login from '../Login/Login';

const NewReleased = () => {
  const newRelease = useAppSelector((state) => state.newRelease.newRelease);
  const user = useAppSelector((state) => state.user.user);
  const items = newRelease?.albums.items;

  if (!user) {
    return <Login />;
  }

  return (
    <Flex minH="calc(100vh - 80px)" flexDir="column" alignItems="center" pb={4}>
      <Heading py={4}>New Releases</Heading>
      <Grid
        mt={6}
        w={{ base: '90vw', md: 'calc(90vw - 240px)' }}
        templateColumns="repeat(auto-fit, minmax(12rem,1fr))"
        gap={4}
      >
        {items?.map((i) => (
          <Flex
            key={i.id}
            maxW="270px"
            w="full"
            h="full"
            bg="white"
            _dark={{ bg: 'gray.800' }}
            boxShadow="2xl"
            rounded="md"
            overflow="hidden"
            flexDir="column"
          >
            <Image h="auto" w="100%" src={i.images[0].url} objectFit="cover" />

            <Flex
              flexDir="column"
              justifyContent="space-between"
              p={6}
              h="100%"
            >
              <Stack
                wordBreak="break-word"
                spacing={0}
                align="center"
                mb={5}
                flexGrow={1}
              >
                <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                  {i.name}
                </Heading>
                <Text color="gray.500">{i.artists[0].name}</Text>
              </Stack>
              <Text color="gray.500" fontSize="0.8rem">
                Release date: {stringToDate(i.release_date)}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default NewReleased;
