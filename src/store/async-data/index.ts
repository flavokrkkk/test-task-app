import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataActions } from "../reducers/data/dataSlice";
import { IData } from "../../models/IData";
import { $authHost } from "../../http";
import { AxiosResponse } from "axios";
import { AppDispatch } from "..";
import { DataState } from "../reducers/data/types";
import { secondaryUrl } from "../../utils/baseUrl";

export const AsyncDataActions = {
  setAsyncData: DataActions.setAsyncData,
  setTableTitle: DataActions.setTableTitle,
  createTableCell: DataActions.createTableCell,
  deleteTableCell: DataActions.deleteTableCell,
  setIsLoading: DataActions.toggleIsLoading,
  setError: DataActions.setError,

  fetchAsyncData: createAsyncThunk<
    IData[] | string,
    void,
    { rejectValue: string; dispatch: AppDispatch }
  >("data/fetchAsyncData", async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(AsyncDataActions.setIsLoading(true));
      const { data } = await $authHost.get<AxiosResponse<IData[]>>(
        secondaryUrl.GET_TABLE_URL
      );
      dispatch(AsyncDataActions.setAsyncData(data.data));
      const objKey = data.data.map((row) => Object.keys(row));
      const nameTab: string[] = [...new Set(objKey.flat())];
      dispatch(AsyncDataActions.setTableTitle(nameTab));
      return data.data;
    } catch (err) {
      dispatch(
        AsyncDataActions.setError(
          `Проблемы на стороне сервера, попробуйте позже!${err}`
        )
      );
      return rejectWithValue(`${err}`);
    }
  }),

  createAsyncData: createAsyncThunk<
    IData,
    IData,
    { rejectValue: string; dispatch: AppDispatch }
  >(
    "data/createAsyncData",
    async (requestParams: IData, { rejectWithValue, dispatch }) => {
      try {
        dispatch(AsyncDataActions.setIsLoading(true));
        const { data } = await $authHost.post<AxiosResponse<IData>>(
          secondaryUrl.POST_ROW_URL,
          requestParams
        );
        dispatch(AsyncDataActions.createTableCell(data.data));
        return data.data;
      } catch (err) {
        dispatch(
          AsyncDataActions.setError(`Не удалось создать строку: ${err}`)
        );
        return rejectWithValue(`${err}`);
      }
    }
  ),

  deleteAsyncData: createAsyncThunk<
    IData,
    string,
    { rejectValue: string; dispatch: AppDispatch }
  >(
    "data/deleteAsyncData",
    async (id: string, { dispatch, rejectWithValue }) => {
      try {
        dispatch(AsyncDataActions.setIsLoading(true));
        const { data } = await $authHost.delete<AxiosResponse<IData>>(
          secondaryUrl.DELETE_ROW_URL + id
        );
        dispatch(AsyncDataActions.deleteTableCell(id));
        return data.data;
      } catch (err) {
        dispatch(
          AsyncDataActions.setError(`Не удалось удалить строку: ${err}`)
        );
        return rejectWithValue(`${err}`);
      }
    }
  ),

  editAsyncData: createAsyncThunk<
    IData,
    IData,
    {
      state: {
        DataReducer: DataState;
        rejectValue: string;
        dispatch: AppDispatch;
      };
    }
  >(
    "data/editAsyncData",
    async (requestParams: IData, { getState, dispatch, rejectWithValue }) => {
      try {
        dispatch(AsyncDataActions.setIsLoading(true));
        const { data } = await $authHost.post<AxiosResponse<IData>>(
          secondaryUrl.EDIT_ROW_URL + requestParams.id,
          requestParams
        );
        const tableData: IData[] = getState().DataReducer.data;
        const editCurrentData = tableData.map((cell) =>
          cell.id === requestParams.id ? requestParams : cell
        );
        dispatch(AsyncDataActions.setAsyncData(editCurrentData));
        return data.data;
      } catch (err) {
        dispatch(
          AsyncDataActions.setError(`Не удалось отредактировать строку: ${err}`)
        );
        return rejectWithValue(`${err}`);
      }
    }
  ),
};
