import {
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { stringToDate } from '../../helper/functions';
import Services from '../../services/service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { newReleaseAction } from '../../store/slice/newReleaseSlice';

const NewReleased = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const newRelease = useAppSelector((state) => state.newRelease.newRelease);
  const items = newRelease?.albums.items;
  const dispatch = useAppDispatch();

  const getNewRelease = useCallback(async () => {
    const params = {
      country: 'ID',
      limit: '50',
    };
    const { data } = await Services.getNewRelease(params);
    dispatch(newReleaseAction.setNewRelease(data));
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    getNewRelease();
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
    <Flex minH="calc(100vh - 80px)" flexDir="column" alignItems="center" pb={4}>
      <Heading py={4}>New Releases</Heading>
      <Grid
        mt={6}
        w={{ base: '90vw', md: 'calc(90vw - 240px)' }}
        templateColumns="repeat(auto-fit, minmax(12rem,1fr))"
        gap={4}
      >
        {items?.map((i) => (
          <Center key={i.id}>
            <Flex
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
              <Image
                h="auto"
                w="100%"
                src={i.images[0].url}
                objectFit="cover"
              />

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
          </Center>
        ))}
      </Grid>
    </Flex>
  );
};

export default NewReleased;
