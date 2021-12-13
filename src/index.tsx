import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { NetworkInfoContext } from "./utils/models/Context";
import { GetInfoAsync } from "./utils/request/NetworkInformation";
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.dark.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
require("dotenv").config();

const rootElement = document.getElementById("app");

GetInfoAsync().then((data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>,
    rootElement
  );
});
