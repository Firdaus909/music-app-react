import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { login } from '../../helper/auth';

const Login = () => (
  <Flex bg="gray.800" justifyContent="center" alignItems="center" h="100vh">
    <Button size="lg" onClick={login} colorScheme="green">
      Login With Spotify
    </Button>
  </Flex>
);

export default Login;
