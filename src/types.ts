export interface AppState {
    query: string;
    results: Topic[];
    latestSearchesQueries: string[];
  }
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }  
 export interface Topic {
    url: string;
    title: string;
  }

  export type LatestSearches = {[key: string]: Topic[];}