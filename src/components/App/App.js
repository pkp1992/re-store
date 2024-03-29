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
import Header from "../Header";

const App = ({ getData }) => {
  return (
    <main role="main" className="container">
      <Header numItem={7} total={250}/>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/cart" component={CartPage}></Route>
        <Route render={() => <h2>404 Page not found!</h2>}></Route>
      </Switch>
    </main>
  );
};

// const mapStateToProps = state => ({books: state})

// export default connect(
//   mapStateToProps,
//   actions
// )(App);

export default WithBookStoreService(x => x.getBook)(App);
