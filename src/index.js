// REACT
import React from "react";
import ReactDOM from "react-dom/client";

// COMPONENTS
import App from "./App";

// REDUX
import { Provider } from "react-redux";
import { store } from "./redux/store";

// STYLES
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
