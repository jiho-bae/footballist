import React from "react";
import { HashRouter as HRouter, Route } from "react-router-dom";
import Home from "../Routes/Home";

const Router = () => {
  return (
    <HRouter>
      <Route path="/" exact component={Home} />
    </HRouter>
  );
};

export default Router;
