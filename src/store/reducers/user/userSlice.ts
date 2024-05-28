import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState = <UserState>{
  userToken: {},
  isAuth: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
      state.error = null;
    },
    toggleIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const UserActions = userSlice.actions;
export const UserReducer = userSlice.reducer;
