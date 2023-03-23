import { CHANGE_SEARCH, CHANGE_STATUS } from "./actionType";
import { initialState } from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
