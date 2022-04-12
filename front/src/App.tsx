import React from 'react';
import { Container } from '@mui/material';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container maxWidth="xl">
        <Home />
      </Container>
      
    </div>
  );
}

export default App;
