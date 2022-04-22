import React from 'react';
import { Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Flex
    minH="100vh"
    pos="relative"
    bgImage="linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.5)),url(https://drive.google.com/uc?export=view&id=14l4GZcqkcLSAJbGfU1FU3g7ho-LlsAgm)"
    bgSize="cover"
    bgPos="bottom"
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex
      flexDir="column"
      color="white"
      w="50%"
      mx="5rem"
      px="5rem"
      alignItems="center"
    >
      <Heading mb={6}>DarkShadow Music App</Heading>
      <Text align="justify" mb={6}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        delectus vel nesciunt recusandae eveniet totam ex hic mollitia quidem
        itaque? Explicabo consectetur aperiam consequuntur beatae dolorem vitae.
        Cupiditate, minima magnam?
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
    <Flex w="50%" maxH="100vh">
      <Image src="https://drive.google.com/uc?export=view&id=1Z5U8pUU9IV-bIoTnN8czz_Eipixu2gn9" />
    </Flex>
  </Flex>
);

export default Home;
