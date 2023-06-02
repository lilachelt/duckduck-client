import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];

    const startPage = 1;
    const endPage = totalPages;

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <Button
          className='button-page'
          key={page}
          variant={currentPage === page ? 'contained' : 'outlined'}
          onClick={() => handleClick(page)}
        >
          {page}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <ButtonGroup>
      <Button disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>
       {'<<'}
      </Button>
      {renderPageButtons()}
      <Button disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}>
       {'>>'}
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
