import { Fragment, useContext } from "react";
import { NetworkInfoContext } from "../utils/models/Context";

export function TimeInfo() {
  const { Info } = useContext(NetworkInfoContext);
  const timezoneOffset =
    "GTM" +
    (Math.floor(Info.time_zone.offset) > 0
      ? "+" + Math.floor(Info.time_zone.offset)
      : Math.floor(Info.time_zone.offset)) +
    ((Info.time_zone.offset / 0.5) % 2 !== 0 ? ":30" : ":00");

  var now = new Date(Info.time_zone.current_time_unix * 1000);
  return (
    <Fragment>
      <h3 className="text-center mt-2">Time:</h3>
      <div className="d-flex flex-row justify-content-between">
        <h4>Time Zone:</h4>
        <h4>{Info.time_zone.name}</h4>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h4>Time Zone Offset:</h4>
        <h4>{timezoneOffset}</h4>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h4>Now:</h4>
        <h4>{`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`}</h4>
      </div>
    </Fragment>
  );
}
