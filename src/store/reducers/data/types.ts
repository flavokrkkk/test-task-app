import { IData } from "../../../models/IData";

export interface DataState {
  data: IData[];
  tableTitle: string[];
  instance: IData;
}
