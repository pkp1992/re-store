import React from "react";
import { BookStoreServiceConsumer } from "../BookStoreServiceContext";

const WithBookStoreService = mapMethideToProps => WrappedComponent => props => (
  <BookStoreServiceConsumer>
    {bookStoreService => {
      const getData = mapMethideToProps(bookStoreService);
      return (
        <WrappedComponent
          {...props}
          getData={getData}
        />
      );
    }}
  </BookStoreServiceConsumer>
);

export default WithBookStoreService;
