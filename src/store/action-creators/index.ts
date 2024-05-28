import { AsyncDataActions } from "../async-data";
import { DataActionCreators } from "../reducers/data/action-creators";
import { DataActions } from "../reducers/data/dataSlice";
import { UserActionCreators } from "../reducers/user/actions-creators";
import { UserActions } from "../reducers/user/userSlice";

export const AllActionCreators = {
  ...UserActions,
  ...DataActions,
  ...UserActionCreators,
  ...AsyncDataActions,
  ...DataActionCreators,
};
