import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Box, Link, Typography } from '@mui/material';
import Pagination from './Pagination';
import '../css/Results.css';
import '../css/basic.css';

import React, { useEffect, useState } from 'react';

const Results: React.FC = () => {
  const { results, query } = useSelector((state: RootState) => state.reducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1)
  },[query]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let paginatedData = results.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  const markQuery = (title : string) => {
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = title.split(regex);

    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? <span key={index} className="marked">{part}</span> : part
        )}
      </span>
    );
  }
  const shouldDisplayError = () => !results.length && query;

  return (
    <Box mt={2}>
      {paginatedData.map((item : any) => (
        <div className='item'>
          <Link href={item.url} target="_blank" rel="noopener">
          {markQuery(item.title)}
          </Link>
        </div>
      ))}
      <div>
     {shouldDisplayError() && <Typography className='no_found'> No results founds</Typography>}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(results.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </Box>
    
  );
};

export default Results;