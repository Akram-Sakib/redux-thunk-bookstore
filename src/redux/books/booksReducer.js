import {
  ADD_BOOK,
  GET_BOOK_BY_ID,
  LOAD_BOOKS,
  REMOVE_BOOK,
  RESET_BOOK,
  UPDATE_BOOK,
} from "./actionTypes";
import { initialState } from "./initialState";

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case GET_BOOK_BY_ID:
      return {
        ...state,
        book: state.books.find((book) => book.id === Number(action.payload)),
      };
    case RESET_BOOK:
      return {
        ...state,
        book: {},
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.id) {
            return {
              ...book,
              ...action.payload,
            };
          }
          return book;
        }),
      };
    default:
      return state;
  }
};

export default booksReducer;
