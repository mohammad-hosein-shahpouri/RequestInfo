import { Fragment } from "react";
import { GetHistory } from "../utils/history/History";
import { History as HistoryModel } from "../utils/models/History";

export function History() {
  var history = GetHistory();

  const connections = () => {
    var items = [];
    for (const key in history) {
      var x = history[key] as HistoryModel[];
      var connectionGroup = [];
      for (const item of x) {
        connectionGroup.push(
          <div className="d-flex flex-row justify-content-between">
            <h4>{item.Location}</h4>
            <h4>{item.Time}</h4>
          </div>
        );
      }
      items.push(
        <details>
          <summary className="h3">{key}</summary>
          {connectionGroup.reverse()}
        </details>
      );
    }

    return items;
  };

  return (
    <Fragment>
      <h3 className="text-center mt-2">History:</h3>
      {connections()}
    </Fragment>
  );
}
