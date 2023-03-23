import { CHANGE_SEARCH, CHANGE_STATUS } from "./actionType";

export const changeSearch = (search) => ({
  type: CHANGE_SEARCH,
  payload: search,
});
export const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  payload: status,
});
