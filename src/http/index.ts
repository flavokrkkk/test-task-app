import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

const $host = axios.create({
  baseURL: baseUrl.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: baseUrl.REACT_APP_API_URL,
});

const authInterceptor = (config: any) => {
  config.headers["x-auth"] = localStorage.getItem("token");
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
