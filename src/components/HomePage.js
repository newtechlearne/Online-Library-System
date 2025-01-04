import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBooks, setCategories } from "../redux/bookSlice"; // Import Redux actions

// Welcome Message Component
const Welcome = () => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <h1>Welcome to Book Haven!</h1>
    <p>Discover your next favorite book from a variety of categories.</p>
  </div>
);

// Category List Component
const CategoryList = () => {
  const categories = useSelector((state) => state.books.categories); // Get categories from Redux store
  return (
    <div>
      <h2>Book Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/books/${category}`}>{category}</Link> {/* Dynamic routing for category */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Popular Books Component
const PopularBooks = ({ books }) => (
  <div>
    <h2>Popular Books</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.title} by {book.author}</h3>
          <p>{book.description}</p>
          <Link to={`/book/${book.id}`}>View Details</Link> {/* Link to Book Details Page */}
        </li>
      ))}
    </ul>
  </div>
);

// HomePage Component
const HomePage = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const books = useSelector((state) => state.books.books); // Get books from Redux store
  const categories = useSelector((state) => state.books.categories); // Get categories from Redux store
  const [filteredBooks, setFilteredBooks] = useState(books); // State for filtered books

  useEffect(() => {
    // If the books or categories are not already in Redux, initialize them
    if (!books.length) {
      const initialBooks = [
        // Add initial books here if needed
      ];
      dispatch(setBooks(initialBooks)); // Dispatch action to set books
    }
    if (!categories.length) {
      const initialCategories = ["Fiction", "Non-Fiction", "Sci-Fi", "Romance"]; // Add your categories here
      dispatch(setCategories(initialCategories)); // Dispatch action to set categories
    }
  }, [dispatch, books.length, categories.length]);

  // Handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  useEffect(() => {
    // Update filtered books when the list of books changes
    setFilteredBooks(books);
  }, [books]);

  return (
    <div>
      <Welcome />

      {/* Search Bar */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "500px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <CategoryList />
      <PopularBooks books={filteredBooks} /> {/* Pass filtered books */}
    </div>
  );
};

export default HomePage;
