import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@mui/material';
import Pagination from './Pagination';
import '../css/Results.css';
import React from 'react';

const Results: React.FC = () => {
  const results = useSelector((state: RootState) => state.reducer.results);

  return (
    <div>
      {results.map((result: any, index: any) => (
        <div key={index}>
          <a href={result.url}>
            <Typography variant="h6">{result.title}</Typography>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;