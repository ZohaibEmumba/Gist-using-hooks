import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import TabState from "./context/tabs/TabState";

ReactDOM.render(
  <TabState>
    <App />
  </TabState>,
  document.getElementById("root")
);
