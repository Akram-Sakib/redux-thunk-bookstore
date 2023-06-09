import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import filtersReducer from "./filters/filtersReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});

export default rootReducer;
