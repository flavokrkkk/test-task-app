import { AxiosResponse } from "axios";
import { $host } from ".";
import { IToken } from "../models/IToken";

export const authorization = async (username: string, password: string) => {
  const { data } = await $host.post<AxiosResponse<IToken>>(
    "/ru/data/v3/testmethods/docs/login",
    {
      username: `user${username}`,
      password: password,
    }
  );
  localStorage.setItem("token", data.data.token);
  return data.data;
};
