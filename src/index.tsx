import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GetInfoAsync } from "./utils/request/NetworkInformation";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddToHistory } from "./utils/history/History";
import { RegisterServiceWorker } from "./utils/ServiceWorker";
require("dotenv").config();

const rootElement = document.getElementById("app");

GetInfoAsync()
  .then((data) => {
    AddToHistory({
      location: `${data.city}, ${data.country_name}`,
      locationShort: data.country_code2,
    });

    ReactDOM.render(
      <React.StrictMode>
        <App data={data} />
      </React.StrictMode>,
      rootElement
    );
  })
  .catch((err) => {
    var el = document.querySelector("#loader p") as HTMLParagraphElement;
    el.innerHTML = "Something Went Wrong <br /> Please Try Again Later";
    el.style.whiteSpace = "normal";
    console.error(err);
  });

RegisterServiceWorker();
