import { createSlice } from '@reduxjs/toolkit';
import UserType from '../../types/user';
import UserPlaylistType from '../../types/userPlaylists';

interface UserState {
  user: UserType | null;
  token: string;
  userPlaylist: UserPlaylistType | null;
}

const initialState: UserState = {
  user: null,
  token: '',
  userPlaylist: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      return {
        ...state,
        token: action.payload,
      };
    },
    setUser(state, action) {
      return {
        ...state,
        user: action.payload,
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

export const userAction = userSlice.actions;

export default userSlice.reducer;
