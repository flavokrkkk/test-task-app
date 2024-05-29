import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState = <UserState>{
  userToken: {},
  isAuth: false,
  isLoading: false,
  authError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
      state.authError = null;
    },
    toggleIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
      state.isLoading = false;
      state.authError = null;
    },
    setErrorAuth: (state, { payload }: PayloadAction<string>) => {
      state.authError = payload;
      state.isLoading = false;
    },
  },
});

export const UserActions = userSlice.actions;
export const UserReducer = userSlice.reducer;
