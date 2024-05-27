import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState = <UserState>{
  user: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },

    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
  },
});

export const UserActions = userSlice.actions;
export const UserReducer = userSlice.reducer;
