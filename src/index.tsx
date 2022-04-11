import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "App";
import { GetInfoAsync } from "utils/request/NetworkInformation";
import { AddToHistory } from "utils/history/History";
import { RegisterServiceWorker } from "utils/ServiceWorker";
//require("dotenv").config();

const container = document.getElementById("app")!;

const root = createRoot(container);

GetInfoAsync()
  .then((data) => {
    AddToHistory({
      location: `${data.city}, ${data.country_name}`,
      locationShort: data.country_code2,
    });

    root.render(
        <App data={data} />
    );
  })
  .catch((err) => {
    var el = document.querySelector("#loader p") as HTMLParagraphElement;
    el.innerHTML = "Something Went Wrong <br /> Please Try Again Later";
    el.style.whiteSpace = "normal";
    document.title = "Something Went Wrong";
    console.error(err);
  });

RegisterServiceWorker();
