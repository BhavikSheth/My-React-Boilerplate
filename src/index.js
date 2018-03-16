import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./components/app";
import "./App.scss";

const store = configureStore();

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root"),
  );
};

renderApp(App);
