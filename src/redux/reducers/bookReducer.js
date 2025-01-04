// src/redux/bookSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books", // A unique name for this slice
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // Directly mutating the state is fine with Redux Toolkit, as it uses Immer under the hood
    },
  },
});

// Export the generated action creators
export const { addBook } = bookSlice.actions;

// Export the reducer to configure in the store
export default bookSlice.reducer;
