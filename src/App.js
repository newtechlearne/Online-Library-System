import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrowseBooksPage from './components/BrowseBooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import AddBookPage from './components/AddBookPage';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/browse-books" element={<BrowseBooksPage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/add-book" element={<AddBookPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
