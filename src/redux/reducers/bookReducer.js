// src/redux/reducers.js
import { ADD_BOOK } from "../actions/bookActions.js";

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default bookReducer;
