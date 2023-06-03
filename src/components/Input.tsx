import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { queryAction, searchAction } from '../actions/searchAction';
import { RootState } from '../store';

const Input: React.FC = () => {
  const { query } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(queryAction(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchAction(query));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={6}>
          <TextField
            label="Search"
            value={query}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item sm={3}>
          <Button type="submit" variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Input;