import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useAppDispatch } from './store/hooks';
import { userAction } from './store/slice/userSlice';
import AppRouter from './Router/AppRouter';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const expiryTime = window.localStorage.getItem('expire_time');
    let expTime = 0;
    if (expiryTime) {
      expTime = JSON.parse(expiryTime);
    }
    const currentTime = new Date().getTime();
    if (currentTime < expTime) {
      const token = window.localStorage.getItem('token');
      dispatch(userAction.setToken(token));
    } else {
      window.localStorage.clear();
      dispatch(userAction.setToken(''));
    }
  }, []);

  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;
