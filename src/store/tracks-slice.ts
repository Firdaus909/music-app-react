// import { createSlice } from '@reduxjs/toolkit';

// const trackSlice = createSlice({
//   name: 'tracks',
//   initialState: {
//     tracks: [],
//     selectedTracks: [],
//     userPlaylist: [],
//   },
//   reducers: {
//     setTracks(state, action) {
//       return {
//         ...state,
//         tracks: action.payload,
//       };
//     },
//     setSelectedTracks(state, action) {
//       return {
//         ...state,
//         selectedTracks: action.payload,
//       };
//     },
//     setUserPlaylist(state, action) {
//       return {
//         ...state,
//         userPlaylist: action.payload,
//       };
//     },
//   },
// });

// export const tracksAction = trackSlice.actions;

// export default trackSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import TracksType from '../type/TrackType';
import userPlaylistType from '../type/userPlaylistType';

interface TrackState {
  track: TracksType | null;
  selectedTracks: string[];
  userPlaylist: userPlaylistType | null;
}

const initialState: TrackState = {
  track: null,
  selectedTracks: [],
  userPlaylist: null,
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

export const trackAction = trackSlice.actions;

export default trackSlice.reducer;
