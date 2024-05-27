import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

const $host = axios.create({
  baseURL: baseUrl.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: baseUrl.REACT_APP_API_URL,
  headers: {
    "x-auth": localStorage.getItem("token"),
  },
});

export { $host, $authHost };
