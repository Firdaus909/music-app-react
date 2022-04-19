import axios from 'axios';
import { LocalStorageWorker } from '../helper/useLocalStorage';

const BASE_URL = process.env.REACT_APP_SPOTIFY_ENDPOINT;
const localStorage = new LocalStorageWorker();
const token = localStorage.get('token');

const createInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });

  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return instance;
};

export default createInstance();
