// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js";

const store = configureStore({
  reducer: {
    books: bookReducer, // You can use a key here to combine multiple reducers.
  },
});

export default store;

