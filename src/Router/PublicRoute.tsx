import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../helper/auth';

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() && restricted ? (
        <Redirect to="/new-released" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
