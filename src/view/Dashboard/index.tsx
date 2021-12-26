import React, { Fragment } from "react";
import DashboardRouter from "../../routes/dashboardRouter";
import Header from "../../components/Header";

export default () => {
  return (
    <Fragment>
      <Header />
      <DashboardRouter />
    </Fragment>
  );
};
