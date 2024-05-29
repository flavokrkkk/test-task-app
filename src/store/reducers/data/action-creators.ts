import { AppDispatch } from "../..";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DataSelectors } from "../../selectors";
import { DataActions } from "./dataSlice";

export const DataActionCreators = {
  setTableTitle: DataActions.setTableTitle,

  addTableTitle: () => (dispatch: AppDispatch) => {
    try {
      const { data } = useAppSelector(DataSelectors);
      const objKey = data.map((row) => Object.keys(row));
      const nameTab = [...new Set(objKey.flat())];

      dispatch(DataActionCreators.setTableTitle(nameTab));
    } catch (err) {
      console.log(err);
    }
  },
};
