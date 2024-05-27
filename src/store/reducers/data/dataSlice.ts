import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { IData } from "../../../models/IData";

const initialState = <DataState>{
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAsyncData: (state, { payload }: PayloadAction<IData[]>) => {
      state.data = payload;
    },
  },
});

export const DataReducer = dataSlice.reducer;
export const DataActions = dataSlice.actions;
