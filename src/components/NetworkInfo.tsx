import React, { Fragment, useContext, useLayoutEffect, useState } from "react";
import { ApiResponseType } from "../utils/models/ApiResponse";
import { NetworkInfoContext } from "../utils/models/Context";
import { GetInfoAsync } from "../utils/request/NetworkInformation";

export function NetworkInfo() {
  const context = useContext(NetworkInfoContext);
  const flagUrl =
    process.env.REACT_APP_FLAG_IMAGE_URL +
    context.Info.country_code2 +
    process.env.REACT_APP_FLAG_IMAGE_TYPE;

  return (
    <Fragment>
      <img src={flagUrl} alt={context.Info.country_name} />
      {context.Info.city}
    </Fragment>
  );
}
