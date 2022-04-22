import { generateRandomKey } from './functions';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = 'https://darkshadow.vercel.app/redirect';
const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
const SCOPE = 'playlist-modify-private playlist-read-private';
const STATE = generateRandomKey(16);

export const login = () => {
  window.location.href = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}&show_dialog=true`;
};

export const logout = () => {
  window.localStorage.clear();
  window.location.replace('/');
};

export const isLoggedIn = () => !!window.localStorage.getItem('token');
