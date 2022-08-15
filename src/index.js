// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";
// import R from "core-js/stable";
import "react-app-polyfill/ie11";
import "core-js/features/array/at";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// eslint-disable-next-line no-unused-expressions
// R;
console.info(">>>[1,2,3].at(0)", [1, 2, 3].at(0));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
