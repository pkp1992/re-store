import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">HomePage</Link>
        <Link to="/cart">CartPage</Link>
      </nav>
    );
  }
}
