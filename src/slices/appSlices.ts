import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Topic, AppState } from '../types'

const appSlice = createSlice({
  name: 'app',
  initialState: { query: '', results: [], latestSearches: [] } as AppState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    searchSuccess: (state, action: PayloadAction<Topic[]>) => {
      state.results = action.payload;
    },
    addLatestSearch: (state, action: PayloadAction<string>) => {
      state.latestSearches.push(action.payload);
    },
  },
});

export { appSlice };