import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import HighLight from '../pages/Highlight';
import { Suspense } from 'react';
import Loader from './Loader';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highlights/:id" element={<HighLight />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
