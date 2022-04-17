import { createSlice } from '@reduxjs/toolkit';
import UserType from '../type/userType';

interface UserState {
  user: UserType | null;
  token: string;
}

const initialState: UserState = {
  user: null,
  token: '',
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
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
