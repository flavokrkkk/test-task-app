import { AppDispatch } from "../..";
import { UserActions } from "./userSlice";

export const UserActionCreators = {
  setIsAuth: UserActions.toggleIsAuth,

  setCheckToken: () => (dispatch: AppDispatch) => {
    localStorage.getItem("token")
      ? dispatch(UserActionCreators.setIsAuth(true))
      : dispatch(UserActionCreators.setIsAuth(false));
  },

  logOutApp: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("token");
    dispatch(UserActionCreators.setIsAuth(false));
  },
};
