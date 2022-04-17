import instance from './api';
import TracksType from '../type/TrackType';

interface searchParams {
  q: string;
  limit: string;
  type: string;
  market: string;
}

const searchTracks = (params: searchParams) =>
  instance.get<TracksType>('/search', { params });

export default searchTracks;
