import axios from 'axios';
import { getStorage } from './localstorage';

const BASE_URL = 'https://api.spotify.com/v1';

const createResource = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });
  const token = getStorage('token');

  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return instance;
};

export default createResource();

// export const trackSearch = (keyword) => {
//   const params = {
//     q: keyword,
//     limit: '10',
//     type: 'track',
//   };
//   return createResource().get('/search', { params });
// };

export const getProfile = async () => createResource().get('/me');

export const postPlaylist = async (userID, playlistData) => {
  const data = {
    name: playlistData.title,
    description: playlistData.description,
    collaborative: false,
    public: false,
  };

  return createResource().post(`/users/${userID}/playlists`, data);
};

export const addItems = (playlistID, uris) =>
  createResource().post(`/playlists/${playlistID}/tracks`, uris);

export const getUserPlaylist = async () =>
  createResource().get('/me/playlists');
