// src/components/BookDetailsPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import { useSelector } from "react-redux"; // Import useSelector

const BookDetailsPage = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  
  // Get books from the Redux store
  const books = useSelector((state) => state.books.books); // Assuming the books state is stored in books.books
  
  // Find the book with the matching ID
  const [book, setBook] = useState(null); // Local state to store the selected book

  useEffect(() => {
    // Look for the book with the matching ID in the books array
    const selectedBook = books.find((book) => book.id === parseInt(id));
    if (selectedBook) {
      setBook(selectedBook); // Update the state with the selected book
    }
  }, [id, books]); // Re-run the effect if the ID or books array changes

  // If the book is not found, show an error message
  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} ⭐</p>
      <button onClick={() => navigate("/")}>Back to Browse</button>
    </div>
  );
};

export default BookDetailsPage; // Default export for the component
