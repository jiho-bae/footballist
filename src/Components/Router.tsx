import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import HighLight from '../pages/Highlight';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highlights/:id" element={<HighLight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
