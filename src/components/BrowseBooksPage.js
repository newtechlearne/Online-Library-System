import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // Import useParams for dynamic routing
import { books as dummyBooks } from "../utils/dummyData"; // Import books from dummyData

const BrowseBooksPage = () => {
  const { category } = useParams(); // Extract the category from the URL
  const location = useLocation(); // Get location object to access state
  const [books, setBooks] = useState(dummyBooks); // Initialize with dummy data
  const [filteredBooks, setFilteredBooks] = useState(dummyBooks); // Initialize filtered books

  useEffect(() => {
    // Check if a new book is passed via state from AddBookPage
    if (location.state && location.state.newBook) {
      setBooks((prevBooks) => [...prevBooks, location.state.newBook]);
    }
  }, [location.state]); // Effect will run when state changes

  useEffect(() => {
    // Filter books based on the category from URL
    if (category) {
      const filtered = books.filter((book) => book.category === category);
      setFilteredBooks(filtered);
    } else {
      // If no category, display all books
      setFilteredBooks(books);
    }
  }, [category, books]); // Effect runs when category or books change

  return (
    <div>
      <h2>{category ? `${category} Books` : "All Books"}</h2>
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              <h3>{book.title} by {book.author}</h3>
              <p>{book.description}</p>
              <p>Rating: {book.rating}</p>
            </li>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </ul>
    </div>
  );
};

export default BrowseBooksPage;
