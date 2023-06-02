export interface AppState {
    query: string;
    results: Result[];
    latestSearches: string[];
  }
  
  interface SearchAction {
    type: 'SEARCH';
    payload: {
      query: string;
      results: Result[];
    };
  }
  
  export interface AddLatestSearchAction {
    type: 'ADD_LATEST_SEARCH';
    payload: {
      search: string;
    };
  }
  
 export type AppAction = SearchAction | AddLatestSearchAction;
  
 export interface Result {
    url: string;
    title: string;
  }
  
  export const initialState: AppState = {
    query: '',
    results: [],
    latestSearches: [],
  };