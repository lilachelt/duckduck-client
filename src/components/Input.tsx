import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { searchAction } from '../actions/searchAction';

const Input: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchAction(query));
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={9}>
      <TextField
        label="Search"
        value={query}
        onChange={handleChange}
        variant="outlined"
      />
       </Grid>
         <Grid item xs={12} sm={3}>
        <Button type="submit" variant="contained" fullWidth>
          Search
         </Button>
      </Grid>
    </Grid>
    </form>
  );
};

export default Input;

//   <form onSubmit={handleSubmit}>
//     <Grid container spacing={2} alignItems="center">
//       <Grid item xs={12} sm={9}>
//         <TextField
//           label="Search"
//           variant="outlined"
//           fullWidth
//           value={param}
//           onChange={(e) => setParam(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <Button type="submit" variant="contained" fullWidth>
//           Search
//         </Button>
//       </Grid>
//     </Grid>
//   </form>
// );