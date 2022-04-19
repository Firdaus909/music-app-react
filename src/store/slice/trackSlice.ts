import { createSlice } from '@reduxjs/toolkit';
import TracksType, { Item } from '../../types/tracks';

interface TrackState {
  track: TracksType | null;
  selectedTracks: Item[];
}

const initialState: TrackState = {
  track: null,
  selectedTracks: [],
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack(state, action) {
      return {
        ...state,
        track: action.payload,
      };
    },
    setSelectedTrack(state, action) {
      return {
        ...state,
        selectedTracks: action.payload,
      };
    },
  },
});

export const trackAction = trackSlice.actions;

export default trackSlice.reducer;
