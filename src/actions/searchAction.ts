import axios from "axios";
import { Result } from "../types";
import { appSlice } from "../slices/appSlices";

const { search, searchSuccess, addLatestSearch } = appSlice.actions;

const getApiResults = async (query:string) : Promise<Result[]> =>{
  const response = await axios.get(`http://localhost:1337/urlsAndTitles?q=${query}`);
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
      const results  =await getApiResults(query)
      dispatch(search(query));
      dispatch(searchSuccess(results));
    } catch (error) {
      console.error('Error occurred while searching:', error);
    }
  };

  