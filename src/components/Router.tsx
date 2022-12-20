import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Home from '../pages/Home';
import HighLight from '../pages/Highlight';
import League from '../pages/League';

import Header from './Header';
import Loader from './Loader';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highlights/:id" element={<HighLight />} />
          <Route path="/league" element={<League />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
