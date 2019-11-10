import React from "react";
import BookList from "../BookList";
import WithBookStoreService from '../HOK'

const HomePage = ({getData}) => {
    return <BookList books={getData()}></BookList>;
};

export default WithBookStoreService(x => x.getBook)(HomePage);