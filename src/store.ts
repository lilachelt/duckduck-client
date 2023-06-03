import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { appSlice } from './slices/appSlices';
import { AppState } from './types';
  
export const initialState: AppState = {
  query: '',
  results: [],
  latestSearches: [],
};

const store = configureStore({
  reducer: {
    reducer: appSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
