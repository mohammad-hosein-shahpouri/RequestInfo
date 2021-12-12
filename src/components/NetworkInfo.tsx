import React, { Fragment, useContext, useLayoutEffect, useState } from "react";
import { ApiResponseType } from "../utils/models/ApiResponse";
import { NetworkInfoContext } from "../utils/models/Context";
import { GetInfoAsync } from "../utils/request/NetworkInformation";

export function NetworkInfo() {
  const context = useContext(NetworkInfoContext);

  return <Fragment>{context.Info.city}</Fragment>;
}
