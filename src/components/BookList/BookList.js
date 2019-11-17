import React, { Component } from "react";
import WithBookStoreService from "../HOK";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";
// import * as actions from "../../actions";
import { FETCH_BOOKS } from "../../actions";
import { compose } from "../../utils";
import "./BookList.css";

class BooksContainer extends Component {
  componentDidMount() {
    const { FETCH_BOOKS } = this.props;
    FETCH_BOOKS();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BooksList books={books} />;
  }
}

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem books={book} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
});

const mapDispatchToProps = (dispatch, { getData }) => ({
  FETCH_BOOKS: FETCH_BOOKS(dispatch, getData)
});
export default compose(
  WithBookStoreService(x => x.getBook),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksContainer);
