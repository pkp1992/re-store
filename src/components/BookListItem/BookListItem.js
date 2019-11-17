import React from 'react'


const BookListItem = ({books}) => {
    const { title, author} = books;
    return (
      <React.Fragment>
        <span>{title}</span>
        <span> {author}</span>
      </React.Fragment>
    );
}
export default BookListItem;