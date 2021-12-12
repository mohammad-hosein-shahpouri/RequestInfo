import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useLayoutEffect, useState } from "react";
import { NetworkInfo } from "./components/NetworkInfo";
import { ApiResponseType } from "./utils/models/ApiResponse";
import { NetworkInfoContext } from "./utils/models/Context";
import { GetInfoAsync } from "./utils/request/NetworkInformation";

library.add(fab, fas, far);

export function App() {
  const [networkInfo, setNetworkInfo] = useState<ApiResponseType>(
    {} as ApiResponseType
  );

  useLayoutEffect(() => {
    (async () => {
      let info = await GetInfoAsync();
      setNetworkInfo(info);
    })();
  }, []);

  return (
    <NetworkInfoContext.Provider
      value={{ Info: networkInfo, SetInfo: setNetworkInfo }}
    >
      <NetworkInfo />
    </NetworkInfoContext.Provider>
  );
}
