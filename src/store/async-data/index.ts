import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataActions } from "../reducers/data/dataSlice";
import { IData } from "../../models/IData";
import { $authHost } from "../../http";
import { AxiosResponse } from "axios";

export const AsyncDataActions = {
  setAsyncData: DataActions.setAsyncData,

  fetchAsyncData: createAsyncThunk(
    "data/fetchAsyncData",
    async (_, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await $authHost.get<AxiosResponse<IData[]>>(
          "/ru/data/v3/testmethods/docs/userdocs/get"
        );
        dispatch(AsyncDataActions.setAsyncData(data.data));
      } catch (err) {
        return rejectWithValue(`${err}`);
      }
    }
  ),
};
