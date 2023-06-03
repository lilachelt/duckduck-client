import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Topic, AppState } from '../types'

const appSlice = createSlice({
  name: 'app',
  initialState: { query: '', results: [], latestSearchesQueries: [] } as AppState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    searchSuccess: (state, action: PayloadAction<Topic[]>) => {
      state.results = action.payload;
    },
    addLatestSearch: (state, action: PayloadAction<string>) => {
      state.latestSearchesQueries.push(action.payload);
    },
    lastestSearchLoad:(state, action: PayloadAction<any>) => {
      state.latestSearchesQueries = action.payload;
    },
  },
});

export { appSlice };