import axios from "axios";
import { Result } from "../types";
import { appSlice } from "../slices/appSlices";

const { search, searchSuccess, addLatestSearch } = appSlice.actions;

export const searchAction = (
    query: string
  ): any => async (dispatch : any) => {
    try {
      const response = await axios.get(`http://localhost:1337/urlsAndTitles?q=${query}`);
      const results: Result[] = response.data;
      console.log(results);
      dispatch(search(query));
      dispatch(searchSuccess(results));
      dispatch(addLatestSearch(query));
    } catch (error) {
      console.error('Error occurred while searching:', error);
    }
  };
  