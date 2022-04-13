import { createSlice } from '@reduxjs/toolkit';

const trackSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
    selectedTracks: [],
    userPlaylist: [],
  },
  reducers: {
    setTracks(state, action) {
      return {
        ...state,
        tracks: action.payload,
      };
    },
    setSelectedTracks(state, action) {
      return {
        ...state,
        selectedTracks: action.payload,
      };
    },
    setUserPlaylist(state, action) {
      return {
        ...state,
        userPlaylist: action.payload,
      };
    },
  },
});

export const tracksAction = trackSlice.actions;

export default trackSlice.reducer;
