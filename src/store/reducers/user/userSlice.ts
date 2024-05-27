import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState = <UserState>{
  userToken: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

export const UserActions = userSlice.actions;
export const UserReducer = userSlice.reducer;
