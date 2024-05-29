import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { IData } from "../../../models/IData";

const initialState = <DataState>{
  data: [],
  tableTitle: [],
  instance: {} as IData,
  isLoading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
      state.error = null;
    },
    setAsyncData: (state, { payload }: PayloadAction<IData[]>) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },

    setTableTitle: (state, { payload }: PayloadAction<string[]>) => {
      state.tableTitle = payload;
    },

    createTableCell: (state, { payload }: PayloadAction<IData>) => {
      state.data.push(payload);
      state.isLoading = false;
      state.error = null;
    },

    deleteTableCell: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data.filter((cell) => cell.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    setInstance: (state, { payload }: PayloadAction<IData>) => {
      state.instance = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const DataReducer = dataSlice.reducer;
export const DataActions = dataSlice.actions;
