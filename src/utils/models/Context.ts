import { createContext } from "react";
import { ApiResponseType } from "./ApiResponse";

const NetworkInfoContext = createContext({
  Info: {} as ApiResponseType,
  SetInfo: (value: React.SetStateAction<ApiResponseType>) => {},
});

export { NetworkInfoContext };
