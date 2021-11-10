import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./Context/UserContext";
import StudentContext from "./Context/StudentContext";


ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <StudentContext>
        <App />
      </StudentContext>
    </UserContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
