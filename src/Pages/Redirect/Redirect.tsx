import _ from 'lodash';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getParamValues } from '../../helper/functions';
import { LocalStorageWorker } from '../../helper/useLocalStorage';

function Redirect() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const localStorage = new LocalStorageWorker();
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/');
      }
      const accessToken = getParamValues(location.hash);
      localStorage.add('token', accessToken.access_token);

      return history.push('/');
    } catch (err) {
      return history.push('/');
    }
  }, [history, location.hash]);
  return null;
}

export default Redirect;
