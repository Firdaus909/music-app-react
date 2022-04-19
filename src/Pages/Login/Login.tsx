import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { login } from '../../helper/auth';

const Login = () => (
  <Flex justifyContent="center" alignItems="center" h="calc(100vh - 80px)">
    <Button size="lg" onClick={login} colorScheme="green">
      Login With Spotify
    </Button>
  </Flex>
);

export default Login;
