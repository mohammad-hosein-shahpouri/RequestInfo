import { History } from "../models/History";

type addToHistoryProps = {
  location: string;
  locationShort: string;
};

export const LocalStorageKey = "History";

export function AddToHistory({ location, locationShort }: addToHistoryProps) {
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}`;
  const today = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;

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

export function GetHistory() {
  return JSON.parse(window.localStorage.getItem(LocalStorageKey)!);
}
