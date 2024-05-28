import { IToken } from "../../../models/IToken";

export interface UserState {
  userToken: IToken;
  isAuth: boolean;
  isLoading: boolean;
  error: null | string;
}
