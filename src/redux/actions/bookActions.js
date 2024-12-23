// src/redux/actions.js
export const ADD_BOOK = "ADD_BOOK";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
