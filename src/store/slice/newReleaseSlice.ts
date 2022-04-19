import { createSlice } from '@reduxjs/toolkit';
import NewRelease from '../../types/newRelease';

interface TrackState {
  newRelease: NewRelease | null;
}

const initialState: TrackState = {
  newRelease: null,
};

export const newReleaseSlice = createSlice({
  name: 'newRelease',
  initialState,
  reducers: {
    setNewRelease(state, action) {
      return {
        ...state,
        newRelease: action.payload,
      };
    },
  },
});

export const newReleaseAction = newReleaseSlice.actions;

export default newReleaseSlice.reducer;
