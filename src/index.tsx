import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { languageContext, languages } from "./config/language";
import muiTheme from "./config/muiTheme"

// component
import App from "./view/App";

const currentLanguage = "es";
const language = languages[currentLanguage];

ReactDOM.render(
  <BrowserRouter>
    <languageContext.Provider value={{ languageContext: language }}>
      <MuiThemeProvider theme={muiTheme}>
        <App />
      </MuiThemeProvider>
      {/* <App /> */}
    </languageContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
