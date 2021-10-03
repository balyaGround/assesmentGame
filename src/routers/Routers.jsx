import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../component/header";
import Detailpage from "../page/Detailpage";
import Homepage from "../page/Homepage";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/detail/:id">
        <Header />
        <Detailpage />
      </Route>
    </Switch>
  );
};

export default Routers;
