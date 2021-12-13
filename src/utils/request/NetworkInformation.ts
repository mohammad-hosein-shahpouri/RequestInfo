import { ApiResponseType } from "../models/ApiResponse";

export async function GetInfoAsync() {
  const url = process.env.REACT_APP_INFO_URL as string;
  const apiKey = process.env.REACT_APP_API_KEY;

  var request = await fetch(url + apiKey, {
    method: "GET",
  });  
  var data = (await request.json()) as ApiResponseType;
  
  return data;
}
