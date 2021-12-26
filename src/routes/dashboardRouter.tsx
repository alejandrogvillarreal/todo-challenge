import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard.component";
import PageNotFound from "../components/PageNotFound";

const DashboardRouter = (props: any) => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} exact={true} />
    <Route path="/dashboard" component={PageNotFound} />
  </Switch>
);

export default withRouter(DashboardRouter);
