import React from "react";
import { Link } from "react-router-dom";
import { categories, books } from "../utils/dummyData";




// Welcome Message Component
const Welcome = () => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <h1>Welcome to Book Haven!</h1>
    <p>Discover your next favorite book from a variety of categories.</p>
  </div>
);

// Category List Component
const CategoryList = () => (
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

// Popular Books Component
const PopularBooks = () => (
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
const HomePage = () => (
  <div>
   
    <Welcome />
    <CategoryList />
    <PopularBooks />
  </div>
);

export default HomePage;
