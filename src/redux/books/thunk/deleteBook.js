import { removeBook } from "../actions";

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`http://localhost:9000/books/${id}`, {
    method: "DELETE",
  });
  dispatch(removeBook(id));
};
