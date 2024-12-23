// src/pages/AddBookPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook
import { categories } from "../utils/dummyData"; // Import categories from dummyData

const AddBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category || !description || !rating) {
      setError("Please fill all the fields.");
      return;
    }

    // Create a new book object
    const newBook = {
      id: Date.now(), // Unique ID for the new book
      title,
      author,
      category,
      description,
      rating: parseFloat(rating), // Ensure the rating is a number
    };

    // Redirect to Browse Books page with new book data as state
    navigate("/browse-books", { state: { newBook } });
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author Name"
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
            min="1" max="5"
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
