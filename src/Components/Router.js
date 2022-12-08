import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HighLight from '../pages/Highlight';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highlights/:id" element={<HighLight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
