import "assets/styles/Styles.Compiled.css"

import { useState } from "react";
import { Layout } from "components/Layout";
import { NetworkInfo } from "components/NetworkInfo";
import { ApiResponseType } from "utils/models/ApiResponse";
import { NetworkInfoContext } from "utils/models/Context";


type props = {
  data: ApiResponseType;
};

export function App({ data }: props) {
  const [networkInfo, setNetworkInfo] = useState<ApiResponseType>(data);
  document.title = `You're Connected to ${data.country_name}(${data.ip})`;

  return (
    <NetworkInfoContext.Provider
      value={{ Info: networkInfo, SetInfo: setNetworkInfo }}
    >
      <Layout>
        <NetworkInfo />
      </Layout>
    </NetworkInfoContext.Provider>
  );
}
