import {
  ADD_BOOK,
  GET_BOOK_BY_ID,
  LOAD_BOOKS,
  REMOVE_BOOK,
  RESET_BOOK,
  UPDATE_BOOK,
} from "./actionTypes";

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  payload: books,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const getBookById = (bookId) => ({
  type: GET_BOOK_BY_ID,
  payload: bookId,
});


export const updateBook = (book) => ({
  type: UPDATE_BOOK,
  payload: book,
});


export const clearBook = () => ({
  type: RESET_BOOK,
})