import dayjs from "dayjs";
import { History } from "../models/History";

type addToHistoryProps = {
  location: string;
  locationShort: string;
};

export const LocalStorageKey = "History";

export function AddToHistory({ location, locationShort }: addToHistoryProps) {
  const now = dayjs(new Date());
  const time = now.format("HH:mm") 
  const today = now.format("DD MMMM YYYY") 

  var currentConnection: History = {
    Location: location,
    LocationShort: locationShort,
    Time: time,
  };

  var localStorageString = window.localStorage.getItem(LocalStorageKey);
  if (!localStorageString) localStorageString = "{}";

  var localStorageObject = JSON.parse(localStorageString);
  if (localStorageObject[today])
    (localStorageObject[today] as History[]).push(currentConnection);
  else localStorageObject[today] = [currentConnection];

  window.localStorage.setItem(
    LocalStorageKey,
    JSON.stringify(localStorageObject)
  );
}

export function GetHistory<TOutput>() {
  return JSON.parse(window.localStorage.getItem(LocalStorageKey)!) as TOutput;
}
