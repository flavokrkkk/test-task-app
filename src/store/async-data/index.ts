import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataActions } from "../reducers/data/dataSlice";
import { IData } from "../../models/IData";
import { $authHost } from "../../http";
import { AxiosResponse } from "axios";

export const AsyncDataActions = {
  setAsyncData: DataActions.setAsyncData,
  setTableTitle: DataActions.setTableTitle,
  createTableCell: DataActions.createTableCell,
  deleteTableCell: DataActions.deleteTableCell,

  fetchAsyncData: createAsyncThunk(
    "data/fetchAsyncData",
    async (_, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await $authHost.get<AxiosResponse<IData[]>>(
          "/ru/data/v3/testmethods/docs/userdocs/get"
        );
        console.log(data.data);
        dispatch(AsyncDataActions.setAsyncData(data.data));
        const objKey = data.data.map((row) => Object.keys(row));
        const nameTab: string[] = [...new Set(objKey.flat())];
        dispatch(AsyncDataActions.setTableTitle(nameTab));
      } catch (err) {
        return rejectWithValue(`${err}`);
      }
    }
  ),

  createAsyncData: createAsyncThunk(
    "data/createAsyncData",
    async (requestParams: IData, { rejectWithValue, dispatch }) => {
      try {
        const { data } = await $authHost.post<AxiosResponse<IData>>(
          "/ru/data/v3/testmethods/docs/userdocs/create",
          requestParams
        );
        dispatch(AsyncDataActions.createTableCell(data.data));
      } catch (err) {
        return rejectWithValue(`${err}`);
      }
    }
  ),

  deleteAsyncData: createAsyncThunk(
    "data/deleteAsyncData",
    async (id: string, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await $authHost.delete<AxiosResponse<IData>>(
          `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`
        );
        dispatch(AsyncDataActions.deleteTableCell(id));
        return data;
      } catch (err) {
        return rejectWithValue(`${err}`);
      }
    }
  ),

  editAsyncData: createAsyncThunk(
    "data/editAsyncData",
    async (requestParams: IData, { getState, dispatch }) => {
      const { data } = await $authHost.post<AxiosResponse<IData>>(
        `/ru/data/v3/testmethods/docs/userdocs/set/${requestParams.id}`,
        requestParams
      );
      const tableData: IData[] = getState().DataReducer.data;
      const editCurrentData = tableData.map((cell) =>
        cell.id === requestParams.id ? requestParams : cell
      );
      dispatch(AsyncDataActions.setAsyncData(editCurrentData));
      return data.data;
    }
  ),
};
