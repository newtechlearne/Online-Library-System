import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories, books } from '../utils/dummyData';


function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find((book) => book.id === parseInt(id)); // Find the book with the matching ID
  const navigate = useNavigate(); // Hook for navigation

  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} ⭐</p>
      <button onClick={() => navigate("/")}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;
