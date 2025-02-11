
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About'; // Assuming you have an About component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
