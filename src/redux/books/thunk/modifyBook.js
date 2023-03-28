import { BASE_URL } from "../../../constants/baseURL";
import { updateBook } from "../actions";

export const modifyBook = (book) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/books/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const data = await response.json();
  dispatch(updateBook(data));
};
