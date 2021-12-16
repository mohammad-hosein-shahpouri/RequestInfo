import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useLayoutEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { NetworkInfo } from "./components/NetworkInfo";
import { AddToHistory } from "./utils/history/History";
import { ApiResponseType } from "./utils/models/ApiResponse";
import { NetworkInfoContext } from "./utils/models/Context";

library.add(fab, fas, far);

type props = {
  data: ApiResponseType;
};

export function App({ data }: props) {
  const [networkInfo, setNetworkInfo] = useState<ApiResponseType>(data);

  return (
    <NetworkInfoContext.Provider
      value={{ Info: networkInfo, SetInfo: setNetworkInfo }}
    >
      <Layout>
        <NetworkInfo></NetworkInfo>
      </Layout>
    </NetworkInfoContext.Provider>
  );
}
