import { addBook } from "../actions";

export const insertBook = (book) => async (dispatch) => {
  const response = await fetch("http://localhost:9000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const bookJson = await response.json();
  dispatch(addBook(bookJson));
};
