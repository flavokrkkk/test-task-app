import { RootState } from "..";

export const UserSelectors = (state: RootState) => state.UserReducer;

export const DataSelectors = (state: RootState) => state.DataReducer;
