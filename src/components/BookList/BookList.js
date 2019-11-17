import React, { Component } from "react";
import WithBookStoreService from "../HOK";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";
// import * as actions from "../../actions";
import { FETCH_BOOKS, BOOK_ADDED_TO_CART } from "../../actions";
import { compose } from "../../utils";
import "./BookList.css";

class BooksContainer extends Component {
  componentDidMount() {
    const { FETCH_BOOKS } = this.props;
    FETCH_BOOKS();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BooksList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const BooksList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem books={book} onAddedToCart={() => onAddedToCart(book.id)} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ books, loading, error,}) => ({
  books,
  loading,
  error
});

const mapDispatchToProps = (dispatch, { getData }) => ({
  FETCH_BOOKS: FETCH_BOOKS(dispatch, getData),
  onAddedToCart: (id) => dispatch(BOOK_ADDED_TO_CART(id))
});
export default compose(
  WithBookStoreService(x => x.getBook),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksContainer);
