import { AxiosResponse } from "axios";
import { IToken } from "../models/IToken";
import { $host } from ".";
import { secondaryUrl } from "../utils/baseUrl";

export class ServiceApi {
  static async authorizeUserAsync(username: string, password: string) {
    return $host.post<AxiosResponse<IToken>>(secondaryUrl.AUTHORIZATION_URL, {
      username: `user${username}`,
      password: password,
    });
  }
}
