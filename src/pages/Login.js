import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { login } from '../utils/auth';

function Login() {
  return (
    <Container
      fluid
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Button className="btn btn-success btn-lg" onClick={login}>
        Login With Spotify
      </Button>
    </Container>
  );
}

export default Login;
