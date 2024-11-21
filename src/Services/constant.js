import axios from "axios"
import { getToken } from "../Authentication/auth";

export const BASE_URL = "http://localhost:9000/"


export const myAxios = axios.create(
  { baseURL: BASE_URL }
);


export const privateAxios = axios.create(
  {
    baseURL: BASE_URL
  }

)


privateAxios.interceptors.request.use(config => {

  const token = getToken();


  console.log("HelperClass")
  console.log(token);

  config.headers.Authorization = `Bearer ${token}`;
  return config

}, error => Promise.reject(error))


