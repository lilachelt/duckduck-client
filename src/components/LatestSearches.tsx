import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@mui/material';
import { addLatestSearchesAction, loadLatestSearchesAction } from '../actions/searchAction';
import { useDispatch } from 'react-redux';
import '../css/basic.css';
import '../css/sideBar.css';

const LatestSearches: React.FC = () => {
  const { latestSearchesQueries } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLatestSearchesAction())
  },[]);


  const handleClick = (search: string): any => {
    dispatch(addLatestSearchesAction(search));
  }

  return (
    <div>
      <h2>My latest searces:</h2>
      <ul>
        {latestSearchesQueries?.map((search:any, index:any) => (
          <li key={index}>
            <Typography className='last_search' onClick={()=> handleClick(search)} >{search}</Typography>
          </li>
        ))}
      </ul>
      {/* <Typography className='no_found'> There is no yet latest searches</Typography> */}
    </div>
  );
};

export default LatestSearches;

function lastestSearchLoad() {
  throw new Error('Function not implemented.');
}
