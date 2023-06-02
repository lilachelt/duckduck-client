import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@mui/material';

const Sidebar: React.FC = () => {
  const latestSearches = useSelector((state: RootState) => state.reducer.latestSearches);

  return (
    <div>
      <Typography variant="h6">Last Searches:</Typography>
      <ul>
        {latestSearches.map((search:any, index:any) => (
          <li key={index}>
            <Typography>{search}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
