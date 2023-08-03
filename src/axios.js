import axios from "axios";
import { BASE_URL } from "./constants";


const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(function(config) {
  config.headers["Authorization"] = "Bearer " + "";
  return config;
});


export default axiosInstance;