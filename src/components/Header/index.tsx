import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { AppBarContainer } from "./Header.styles";

export default () => {
  return (
    <AppBarContainer position="static">
      <Toolbar>
        <Typography variant="h6">TODO LIST</Typography>
      </Toolbar>
    </AppBarContainer>
  );
};
