import * as TYPES from "../actionTypes";

const FETCH_BOOKS_REQUST = () => ({
  type: TYPES.FETCH_BOOKS_REQUST
});
const FETCH_BOOKS_SUCCESS = newBooks => ({
  type: TYPES.FETCH_BOOKS_SUCCESS,
  payload: newBooks
});
const FETCH_BOOKS_FAILUR = err => ({
  type: TYPES.FETCH_BOOKS_FAILUR,
  payload: err
});


const BOOK_ADDED_TO_CART = bookId => ({
  type: TYPES.BOOK_ADDED_TO_CART,
  payload: bookId
});

const FETCH_BOOKS = (dispatch, getData) => () => {
  dispatch(FETCH_BOOKS_REQUST());
  getData()
    .then(res => dispatch(FETCH_BOOKS_SUCCESS(res)))
    .catch(err => dispatch(FETCH_BOOKS_FAILUR(err)));
};

export { FETCH_BOOKS, BOOK_ADDED_TO_CART };
