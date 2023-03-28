import { BASE_URL } from "../../../constants/baseURL";
import { removeBook } from "../actions";

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${BASE_URL}/books/${id}`, {
    method: "DELETE",
  });
  dispatch(removeBook(id));
};
