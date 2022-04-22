import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../helper/auth';
import Navigation from '../Components/Navigation';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Navigation>
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  </Navigation>
);

export default PrivateRoute;
