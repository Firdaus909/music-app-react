import _ from 'lodash';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getParamValues } from '../../helper/functions';

function Redirect() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { localStorage } = window;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/');
      }
      const accessToken = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + accessToken.expires_in * 1000;
      localStorage.setItem('token', accessToken.access_token);
      localStorage.setItem('expire_time', JSON.stringify(expiryTime));

      return history.push('/');
    } catch (err) {
      return history.push('/');
    }
  }, [history, location.hash]);
  return null;
}

export default Redirect;
