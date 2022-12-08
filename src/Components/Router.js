import React from 'react';
import { HashRouter as HRouter, Route, Redirect } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';

function Router() {
  return (
    <HRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={Detail} />
      <Redirect path="*" to="/" />
    </HRouter>
  );
}

export default Router;
