import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";


import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import store from "./store";

const bookstoreService = new BookstoreService();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
         <BrowserRouter>
            <ErrorBoundry>
                <BookstoreServiceProvider value={bookstoreService}>
                        <App />
                </BookstoreServiceProvider>
            </ErrorBoundry>
         </BrowserRouter >
    </Provider>
  </React.StrictMode>
);
