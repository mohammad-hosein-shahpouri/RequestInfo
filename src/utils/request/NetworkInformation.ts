import { ApiResponseType } from "../models/ApiResponse";

export async function GetInfoAsync() {
  const url = import.meta.env.VITE_INFO_URL as string;
  const apiKey = import.meta.env.VITE_API_KEY;

  var request = await fetch(url + apiKey, {
    method: "GET",
  });  
  var data = (await request.json()) as ApiResponseType;
  
  return data;
}
