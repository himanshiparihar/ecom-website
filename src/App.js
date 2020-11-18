import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/index';
import Footer from './components/footer/index';

import Login from './pages/login';
import Signup from './pages/signup';
import Category from './pages/category';
import ProductList from './pages/productList';
import MyAccount from './pages/myaccount';
import Orders from './pages/myorders';
import CustomerService from './pages/customerservice';
import Cart from './pages/cart';
import Product from './pages/product';
import PlaceOrder from './pages/placeorder';
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Category}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/category/:id" component={ProductList}></Route>
          <Route exact path="/product/:id" component={Product}></Route>
          <Route exact path="/:id/orders" component={Orders}></Route>
          <Route exact path="/:id/account" component={MyAccount}></Route>
          <Route exact path="/:id/customerservice" component={CustomerService}></Route>
          <Route exact path="/:id/cart" component={Cart}></Route>
          <Route exact path="/:id/placeorder" component={PlaceOrder}></Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
