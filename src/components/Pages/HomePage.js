import React, {Fragment} from "react";
import BookList from "../BookList";
import ShoppingCartTable from "../ShoppingCartTable";


const HomePage = ({getData}) => {
    return (
      <Fragment>
        <BookList />
        <ShoppingCartTable />
      </Fragment>
    );
};

export default HomePage;