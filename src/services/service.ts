import instance from './instance';
import UserType from '../types/user';
import TracksType from '../types/tracks';
import UserPlaylistType from '../types/userPlaylists';
import NewRelease from '../types/newRelease';

interface searchParams {
  q: string;
  limit: string;
  type: string;
  market: string;
}

interface newReleaseParams {
  country: string;
  limit: string;
}

interface postPlaylistData {
  name: string;
  description: string;
  collaborative: boolean;
  public: boolean;
}

const getUser = () => instance.get<UserType>('/me');

const getUserPlaylist = () => instance.get<UserPlaylistType>('/me/playlists');

const searchTracks = (params: searchParams) =>
  instance.get<TracksType>('/search', { params });

const postPlaylist = (userID: string, data: postPlaylistData) =>
  instance.post(`/users/${userID}/playlists`, data);

const addItems = (playlistID: string, uris: string[]) =>
  instance.post(`/playlists/${playlistID}/tracks`, uris);

const getNewRelease = (params: newReleaseParams) =>
  instance.get<NewRelease>('/browse/new-releases', { params });

const Services = {
  getUser,
  getUserPlaylist,
  searchTracks,
  postPlaylist,
  addItems,
  getNewRelease,
};

export default Services;
