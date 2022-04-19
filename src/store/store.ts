import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import trackReducer from './slice/trackSlice';
import newReleaseReducer from './slice/newReleaseSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    track: trackReducer,
    newRelease: newReleaseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
