import { Fragment } from "react";
import { GetHistory } from "utils/history/History";
import { History as HistoryModel } from "utils/models/History";
import dayjs from "dayjs"

export function History() {
  var history = GetHistory<{ [key: string]: HistoryModel[] }>();

  const connections = () => {
    var items = [];
    var parentIndex = 0

    var keys = Object.keys(history).sort((a, b) => dayjs(b).valueOf() - dayjs(a).valueOf())
    for (const key of keys) {

      var historyLogs = history[key] as HistoryModel[];
      var connectionGroup = [];
      let childIndex = 0
      
      for (const item of historyLogs) {
        connectionGroup.push(
          <div className="flex flex-row justify-between" key={childIndex++}>
            <h4>{item.Location}</h4>
            <h4>{item.Time}</h4>
          </div>
        );
      }

      items.push(
        <details key={parentIndex++}>
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
