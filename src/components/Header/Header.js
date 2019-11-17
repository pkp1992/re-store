import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

 const Header = ({numItem, total}) => {

    return (
      <header className="shop-header row">
        <Link className="logo text-dark" to="/">
          ReStore
        </Link>
        <Link to="/cart" className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItem} items (${total})
        </Link>
      </header>
    );
  }


export default Header