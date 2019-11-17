import * as TYPES from "../actionTypes";

const BOOKS_LOADED = newBooks => ({
  type: TYPES.BOOKS_LOADED,
  payload: newBooks
});
const BOOKS_ERROR = err => ({
  type: TYPES.BOOKS_ERROR,
  payload: err
});
const BOOKS_REQUSTED = () => ({
  type: TYPES.BOOKS_REQUSTED
});

const FETCH_BOOKS = (dispatch, getData) => () => {
  dispatch(BOOKS_REQUSTED());
  getData()
    .then(res => dispatch(BOOKS_LOADED(res)))
    .catch(err => dispatch(BOOKS_ERROR(err)));
};

export { BOOKS_LOADED, BOOKS_ERROR, BOOKS_REQUSTED, FETCH_BOOKS };
