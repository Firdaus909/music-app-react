import React from 'react';
import { Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Flex
    minH="100vh"
    pos="relative"
    bgImage="linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.5)),url(./bg.png)"
    bgSize="cover"
    bgPos="bottom"
    alignItems="center"
    justifyContent={{ base: 'flex-end', md: 'space-between' }}
    flexDir={{ base: 'column-reverse', md: 'row' }}
    pb={4}
  >
    <Flex
      flexDir="column"
      color="white"
      w={{ base: '80%', md: '50%' }}
      mx={{ base: '1rem', md: '5rem' }}
      px={{ base: '1rem', md: '5rem' }}
      alignItems="center"
    >
      <Heading
        mb={{ base: 2, md: 6 }}
        fontSize={{ base: '1.25rem', sm: '1.5rem' }}
        textAlign="center"
      >
        DarkShadow Music App
      </Heading>
      <Text align="justify" mb={6} fontSize={{ base: '0.75rem', sm: '1rem' }}>
        Within every hidden note lies a secret waiting to consume your soul.
        Dare to dive into the dark symphony, where harmony and tension entwine
        in a haunting dance. Step deeper into the abyss, and let the music guide
        your spirit through a journey shrouded in mystery.
      </Text>
      <Button
        as={Link}
        to="/login"
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        variant="solid"
      >
        Login Now
      </Button>
    </Flex>
    <Flex w={{ base: '100%', sm: '70%', md: '50%' }}>
      <Image src="./Landing Page Illustration.svg" />
    </Flex>
  </Flex>
);

export default Home;
