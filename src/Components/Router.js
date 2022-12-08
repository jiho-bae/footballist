import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
