import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@mui/material';
import { lastSearchAction } from '../actions/searchAction';
import { useDispatch } from 'react-redux';

const Sidebar: React.FC = () => {
  const { latestSearches } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const handleClick = (search: string): any => {
    dispatch(lastSearchAction(search));
  }

  return (
    <div>
      <Typography variant="h6">Last Searches:</Typography>
      <ul>
        {latestSearches.map((search:any, index:any) => (
          <li key={index}>
            <Typography onClick={()=> handleClick(search)} >{search}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;