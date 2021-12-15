import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import TabState from "./context/tabs/TabState";
import StoreGistIdState from "./context/storeGistId/StoreGistIdState";
import SearchValueState from "./context/searchvalue/SearchValueState";

ReactDOM.render(
  <TabState>
    <StoreGistIdState>
      <SearchValueState>
        <App />
      </SearchValueState>
    </StoreGistIdState>
  </TabState>,
  document.getElementById("root")
);
