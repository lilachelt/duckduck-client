import axios from 'axios';
import { Topic, LatestSearches } from '../types';
import { appSlice } from '../slices/appSlices';
import { DUCK_DUCK_TOPICS_RESULTS, DUCK_DUCK_LATEST_SEARCHES } from '../const'
const { search, searchSuccess, addLatestSearch } = appSlice.actions;

const getApiResults = async (query:string) : Promise<Topic[]> =>{
  const response = await axios.get(`${DUCK_DUCK_TOPICS_RESULTS}${query}`);
  return response.data;
}

const getLatestSearchesResultsFromFile = async () : Promise<LatestSearches> =>{
  const response = await axios.post(`${DUCK_DUCK_LATEST_SEARCHES}`);
  return response.data;
}

export const queryAction = (
  query: string
): any => async (dispatch : any) => {
    dispatch(search(query));
};

export const searchAction = (
    query: string
  ): any => async (dispatch : any) => {
    try {
      const results  =await getApiResults(query)
      dispatch(search(query));
      dispatch(searchSuccess(results));
      dispatch(addLatestSearch(query));
    } catch (error) {
      console.error('Error occurred while searching:', error);
    }
  };

  export const lastSearchAction = (
    query: string
  ): any => async (dispatch : any) => {
    try {
      const latestSearches = await getLatestSearchesResultsFromFile();
      dispatch(search(query));
      dispatch(searchSuccess(latestSearches[query]));
    } catch (error) {
      console.error('Error occurred while searching:', error);
    }
  };

  