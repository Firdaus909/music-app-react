import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import CreatePlaylist from '../pages/CreatePlaylist';
import Login from '../pages/Login';
import MyPlaylist from '../pages/MyPlaylist';
import NotFoundPage from '../pages/NotFoundPage';
import RedirectPage from '../pages/RedirectPage';
import { tracksAction } from '../store/tracks-slice';
import { userAction } from '../store/user-slice';
import { getProfile, getUserPlaylist } from '../utils/api';
import { getStorage } from '../utils/localstorage';

function AppRouter() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const getPlaylist = useCallback(async () => {
    const { data } = await getUserPlaylist();
    dispatch(tracksAction.setUserPlaylist(data.items));
  }, [dispatch]);

  const getCurrentUser = useCallback(async () => {
    const { data } = await getProfile();
    dispatch(userAction.setUser(data));
  }, [dispatch]);

  useEffect(() => {
    const storageToken = getStorage('token');
    dispatch(userAction.setToken(storageToken));

    if (storageToken) {
      getCurrentUser();
      getPlaylist();
    }
  }, [dispatch, getPlaylist, getCurrentUser]);

  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/myplaylist" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/myplaylist" component={MyPlaylist} />
          <Route path="/create" component={CreatePlaylist} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
