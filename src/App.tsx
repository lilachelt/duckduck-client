import React from 'react';
import { Container, Grid } from '@mui/material';
import Input from './components/Input';
import Results from './components/Results';
import Sidebar from './components/SideBar';

const App: React.FC = () => {
  return (
<Container>
      <h1>DuckDuckGo Search</h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input />
            <Results />
          </Grid>
          <Grid item xs={6}>
            <Sidebar />
          </Grid>
        </Grid>
    </Container>
  );
};

export default App;
