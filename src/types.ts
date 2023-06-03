export interface AppState {
    query: string;
    results: Topic[];
    latestSearches: string[];
  }
  
  interface SearchAction {
    type: 'SEARCH';
    payload: {
      query: string;
      results: Topic[];
    };
  }
  
  export interface AddLatestSearchAction {
    type: 'ADD_LATEST_SEARCH';
    payload: {
      search: string;
    };
  }
  
 export type AppAction = SearchAction | AddLatestSearchAction;
  
 export interface Topic {
    url: string;
    title: string;
  }

  export type LatestSearches = {[key: string]: Topic[];}