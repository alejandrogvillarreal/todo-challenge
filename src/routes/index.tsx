import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import DashboardView from "../view/Dashboard";

export default () => (
  <Switch>
    <Route path="/dashboard" component={DashboardView} />
    <Redirect from="/" to="/dashboard" />
  </Switch>
);
