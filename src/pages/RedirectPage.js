import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/myplaylist');
      }
      const access_token = getParamValues(location.hash);
      localStorage.setItem('token', access_token.access_token);
      history.push('/myplaylist');
    } catch (error) {
      history.push('/');
    }
  }
  render() {
    return null;
  }
}