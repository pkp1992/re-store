import React, { Component } from "react";
import BookListItem from "../BookListItem";
import "./BookList.css";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BookList;