import { BASE_URL } from "../../../constants/baseURL";
import { addBook } from "../actions";

export const insertBook = (book) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const bookJson = await response.json();
  dispatch(addBook(bookJson));
};
