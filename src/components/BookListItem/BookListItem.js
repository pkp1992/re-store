import React from "react";
import "./BookListItem.css";
// import {Link} from 'react-router-dom' 

const BookListItem = ({ books, onAddedToCart }) => {
  const { title, author, price, coverImage } = books;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author"> {author}</div>
        <div className="book-price"> ${price}</div>
        <button className="btn btn-info add-to-cart" onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};




export default BookListItem;
