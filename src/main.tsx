import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import "./index.css";
import App from "./App";
import ToDo from "./ToDo";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDo />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
