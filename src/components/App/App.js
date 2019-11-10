import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import ErrorBoundry from "../ErrorBoundry";
import WithBookStoreService from "../HOK";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../Pages";

const App = ({ getData }) => {
  return (
    <React.Fragment>
      <Link to="/">HomePage</Link> <br />
      <Link to="/cart">CartPage</Link>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/cart" component={CartPage}></Route>
        <Route render={() => <h2>404 Page not found!</h2>}></Route>
      </Switch>
    </React.Fragment>
  );
};

// const mapStateToProps = state => ({books: state})

// export default connect(
//   mapStateToProps,
//   actions
// )(App);

export default WithBookStoreService(x => x.getBook)(App);
