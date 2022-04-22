import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

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
