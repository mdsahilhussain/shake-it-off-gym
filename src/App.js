import React from 'react';

// *===== Linked React Router DOM =========================
import { Route, Routes } from 'react-router-dom';
// *===== Linked Material UI =========================
import { Box } from '@mui/material';

// *===== Linked Style Sheet =========================
import './App.css';

// *===== import pages =========================
import { Home, ExerciseDetail } from "./pages";
// *===== import components =========================
import {Navbar, Footer} from './components'


const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/exercise/:id" element={<ExerciseDetail />} /> */}
    </Routes>
    <Footer />
  </Box>
);

export default App;