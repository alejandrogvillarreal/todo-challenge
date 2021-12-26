import { createMuiTheme } from "@material-ui/core/styles";
import { YELLOW, DISABLED } from "../styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: YELLOW,
    },
    error: {
      main: DISABLED,
    },
  },
});
