import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { IData } from "../../../models/IData";

const initialState = <DataState>{
  data: [],
  tableTitle: [],
  instance: {} as IData,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAsyncData: (state, { payload }: PayloadAction<IData[]>) => {
      state.data = payload;
    },

    setTableTitle: (state, { payload }: PayloadAction<string[]>) => {
      state.tableTitle = payload;
    },

    createTableCell: (state, { payload }: PayloadAction<IData>) => {
      state.data.push(payload);
    },

    deleteTableCell: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data.filter((cell) => cell.id !== payload);
    },
    setInstance: (state, { payload }: PayloadAction<IData>) => {
      state.instance = payload;
    },
  },
});

export const DataReducer = dataSlice.reducer;
export const DataActions = dataSlice.actions;
