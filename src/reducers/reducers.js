// import { combineReducers } from "redux";
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    // { id: 1, name: "Book 1", count: 3, total: 150 },
    // { id: 2, name: "Book 2", count: 2, total: 75 }
  ],
  orderTotal: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_BOOKS_FAILUR":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const book = state.books.find(book => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({id}) => id === bookId)
      const item = state.cartItems[itemIndex];
      let newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem]
      };
    default:
      return state;
  }
};

export default reducer;
