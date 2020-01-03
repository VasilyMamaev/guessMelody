import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const inint = () => {
  ReactDOM.render(
      <App />,
      document.getElementById(`root`)
  );
};

inint();
