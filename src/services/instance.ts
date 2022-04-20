import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SPOTIFY_ENDPOINT;

const createInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('token');
      if (token) {
        return {
          ...config,
          headers: { Authorization: `Bearer ${token}` },
        };
      }
      return null;
    },
    (err) => Promise.reject(err)
  );
  return instance;
};

export default createInstance();
