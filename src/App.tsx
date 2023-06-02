import React from 'react';
import { Container, Typography } from '@mui/material';
import Input from './components/Input';
import Results from './components/Results';
import Sidebar from './components/SideBar';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" mt={4} mb={2}>
        DuckDuckGo Search
      </Typography>
      <Input />
      <Results />
      <Sidebar/>
    </Container>
  );
};

export default App;
