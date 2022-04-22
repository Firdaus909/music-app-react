import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect as RouterRedirect,
  Route,
  Switch,
} from 'react-router-dom';
import Services from '../services/service';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { userAction } from '../store/slice/userSlice';
import {
  CreatePlaylist,
  Home,
  Login,
  MyPlaylist,
  NewReleased,
  NotFound,
  Profile,
  Redirect,
} from '../Pages';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  const getUser = useCallback(async () => {
    const { data } = await Services.getUser();
    dispatch(userAction.setUser(data));
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token, getUser]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <RouterRedirect to={token ? '/new-released' : '/home'} />
          )}
        />
        <PublicRoute path="/home" component={Home} />
        <PublicRoute path="/redirect" restricted component={Redirect} />
        <PublicRoute path="/login" restricted component={Login} />
        <PrivateRoute path="/new-released" component={NewReleased} />
        <PrivateRoute path="/my-playlist" component={MyPlaylist} />
        <PrivateRoute path="/search" component={CreatePlaylist} />
        <PrivateRoute path="/profile" component={Profile} />
        <PublicRoute component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
