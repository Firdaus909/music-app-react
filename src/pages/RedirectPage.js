import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/helper';
import { setStorage } from '../utils/localstorage';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/myplaylist');
      }
      const accessToken = getParamValues(location.hash);
      setStorage('token', accessToken.access_token);

      return history.push('/myplaylist');
    } catch (error) {
      return history.push('/');
    }
  }

  render() {
    return null;
  }
}
