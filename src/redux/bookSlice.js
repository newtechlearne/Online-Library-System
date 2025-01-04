import { createSlice } from "@reduxjs/toolkit";
import { categories, books } from "../utils/dummyData"; // Import dummy data

const initialState = {
  categories: categories,
  books: books,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { setBooks, setCategories, addBook } = bookSlice.actions;
export default bookSlice.reducer;
