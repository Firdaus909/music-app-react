import { generateRandomKey } from './functions';
import { LocalStorageWorker } from './useLocalStorage';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
const AUTHORIZE_URL = process.env.REACT_APP_SPOTIFY_AUTHORIZE;
const SCOPE = 'playlist-modify-private playlist-read-private';
const STATE = generateRandomKey(16);

export const login = () => {
  window.location.href = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`;
};

export const logout = () => {
  const localStorage = new LocalStorageWorker();
  localStorage.clear();
  window.location.replace('/');
};
