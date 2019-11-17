import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import store from "./store";
import BookStoreService from "./services";
import { BookStoreServiceProvider } from "./components/BookStoreServiceContext";

const storeProvider = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServiceProvider value={storeProvider}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
