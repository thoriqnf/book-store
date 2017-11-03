import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AddPage from './components/add/AddPage';
import CartPage from './components/cart/CartPage';
import BookPage from './components/book/BookPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="add" component={AddPage}/>
    <Route path="cart" component={CartPage}/>
    <Route path="book" component={BookPage}/>
  </Route>
);
