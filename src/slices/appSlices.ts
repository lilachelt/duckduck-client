import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Result, AppState } from '../types'

const appSlice = createSlice({
  name: 'app',
  initialState: { query: '', results: [], latestSearches: [] } as AppState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    searchSuccess: (state, action: PayloadAction<Result[]>) => {
      state.results = action.payload;
    },
    addLatestSearch: (state, action: PayloadAction<string>) => {
      state.latestSearches.push(action.payload);
    },
  },
});

export { appSlice };