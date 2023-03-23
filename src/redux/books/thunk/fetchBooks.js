import { loadBooks } from "../actions";

export const fetchBooks = (filter) => async (dispatch) => {

  console.log(filter);
  let query = "";
  if (filter?.status) {
    query += `?featured=${filter.status}`;
  }
  if (filter?.search) {
    query += `?name_like=${filter.search}`;
  }
  if (filter?.status && filter?.search) {
    query = `?featured=${filter.status}&name_like=${filter.search}`;
  }
    

  const books = await fetch(`http://localhost:9000/books${query}`);
  const booksJson = await books.json();

  dispatch(loadBooks(booksJson));
};
