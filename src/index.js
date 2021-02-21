import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { CssBaseline } from "@material-ui/core";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppThemeProvider from "./Theme/AppThemeProvider";
import "react-toastify/dist/ReactToastify.css";

render(
  <Provider store={store}>
    <AppThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </Provider>,
  document.getElementById("root")
);
