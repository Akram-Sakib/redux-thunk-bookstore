import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/fetchBooks";
import BookCard from "./BookCard";
import FilterButtons from "./FilterButtons";

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const { status, search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks({ status, search }));
  }, [dispatch, status, search]);

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>
        <FilterButtons />
      </div>
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {books.length === 0 && (
          <p className="font-bold">
            No Books Found
          </p>
        )}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
