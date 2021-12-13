import { Fragment } from "react";
import {
  osName,
  osVersion,
  browserName,
  browserVersion,
} from "react-device-detect";

export function ClientInfo() {
  return (
    <Fragment>
      <h3 className="text-center mt-2">Client:</h3>
      <div className="d-flex flex-row justify-content-between">
        <h4>OS:</h4>
        <h4>{osName}</h4>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h4>OS Version:</h4>
        <h4>{osVersion}</h4>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h4>Browser Name:</h4>
        <h4>{browserName}</h4>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h4>Browser Version:</h4>
        <h4>{browserVersion}</h4>
      </div>
    </Fragment>
  );
}
