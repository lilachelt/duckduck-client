import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@mui/material';
import { lastSearchAction } from '../actions/searchAction';
import { useDispatch } from 'react-redux';
import '../css/basic.css';
import '../css/sideBar.css';

const Sidebar: React.FC = () => {
  const { latestSearchesQueries } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const handleClick = (search: string): any => {
    dispatch(lastSearchAction(search));
  }

  return (
    <div>
      <h2>My latest searces:</h2>
      <ul>
        {latestSearchesQueries.map((search:any, index:any) => (
          <li key={index}>
            <Typography className='last_search' onClick={()=> handleClick(search)} >{search}</Typography>
          </li>
        ))}
      </ul>
      {/* <Typography className='no_found'> There is no yet latest searches</Typography> */}
    </div>
  );
};

export default Sidebar;