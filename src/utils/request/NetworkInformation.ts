import {ApiResponseType} from "../models/ApiResponse"

export async function GetInfoAsync() {
  const url = process.env.REACT_APP_INFO_URL as string;

  var request = await fetch(url);
  var data = await request.json() as ApiResponseType;
  return  data
}
