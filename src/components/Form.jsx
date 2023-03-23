import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBook } from "../redux/books/actions";
import { insertBook } from "../redux/books/thunk/insertBook";
import { modifyBook } from "../redux/books/thunk/modifyBook";

const Form = () => {
  const book = useSelector((state) => state.books.book);

  const [bookState, setBookState] = useState({
    id: 0,
    name: "",
    author: "",
    thumbnail: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  useEffect(() => {
    if (book?.id) {
      setBookState(book);
    }
  }, [book]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]:
        e.target.name === "price" || e.target.name === "rating"
          ? Number(e.target.value)
          : e.target.name === "featured"
          ? e.target.checked
          : e.target.value,
    });
  };

  const clearInput = () => {
    setBookState({
      id: 0,
      name: "",
      author: "",
      thumbnail: "",
      price: 0,
      rating: 0,
      featured: false,
    });
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "insert") {
      dispatch(
        insertBook({
          name: bookState.name,
          author: bookState.author,
          thumbnail: bookState.thumbnail,
          price: Number(bookState.price),
          rating: Number(bookState.rating),
          featured: bookState.featured,
        })
      );
    } else {
      dispatch(modifyBook(bookState));
      dispatch(clearBook());
      clearInput()
    }
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          {book?.id ? "Update Book" : "Add New Book"}
        </h4>
        <form
          className="book-form"
          onSubmit={(e) =>
            book?.id ? handleSubmit(e, "update") : handleSubmit(e, "insert")
          }
          onChange={handleChange}
        >
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={bookState.name}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={bookState.author}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={bookState.thumbnail}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={bookState.price}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={bookState.rating}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              // checked={bookState.featured}
              defaultChecked={bookState.featured}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {book?.id ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
