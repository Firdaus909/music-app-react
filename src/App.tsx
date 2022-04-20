import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Pages from './Pages';

import Navigation from './Components/Navigation';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Services from './services/service';
import { userAction } from './store/slice/userSlice';
import { LocalStorageWorker } from './helper/useLocalStorage';
import { newReleaseAction } from './store/slice/newReleaseSlice';

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  const getUser = useCallback(async () => {
    const { data } = await Services.getUser();
    dispatch(userAction.setUser(data));
  }, [dispatch]);

  const getUserPlaylist = useCallback(async () => {
    const { data } = await Services.getUserPlaylist();
    dispatch(userAction.setUserPlaylist(data));
  }, [dispatch]);

  const getNewRelease = useCallback(async () => {
    const params = {
      country: 'ID',
      limit: '50',
    };
    const { data } = await Services.getNewRelease(params);
    dispatch(newReleaseAction.setNewRelease(data));
  }, [dispatch]);

  useEffect(() => {
    const localStorage = new LocalStorageWorker();
    const storageToken = localStorage.get('token');
    dispatch(userAction.setToken(storageToken));
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      getUser();
      getUserPlaylist();
      getNewRelease();
    }
  }, [token, getUser, getUserPlaylist, getNewRelease]);

  return (
    <Switch>
      <Route path="/" exact>
        {token ? <Redirect to="/dashboard" /> : <Redirect to="login" />}
      </Route>
      <Route path="/redirect" component={Pages.Redirect} />
      <Route path="/login" component={Pages.Login} />
      <Route path="/dashboard" component={Pages.Dashboard} />
      <Route path="/my-playlist" component={Pages.MyPlaylist} />
      <Route path="/new-released" component={Pages.NewReleased} />
      <Route path="/search" component={Pages.CreatePlaylist} />
      <Route path="/profile" component={Pages.Profile} />
      <Route component={Pages.NotFound} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Navigation>
        <AppRouter />
      </Navigation>
    </Router>
  );
}

export default App;
