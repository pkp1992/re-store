import * as TYPES from "../actionTypes";
const BOOKS_LOADED = newBooks => ({
  type: TYPES.BOOKS_LOADED,
  payload: newBooks
});

export { BOOKS_LOADED };
