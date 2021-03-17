import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import ProductList from './product-list/productList';
import ProductDescription from './product-description/productdescription';
import ContactUs from './contact-us/contactus';

class App extends Component {
  render() {
    return (
      <div>
        <div className="toolbar" role="banner">
          <img width="40" alt="Products Application" src={logo} />
          <span>My Products Application</span>
          <div className="spacer"></div>
          
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/product/:id" component={ProductDescription} />
            <Route path="/contactus" component={ContactUs} />
          </Switch>
        </Router>
        {/* <ProductList products={this.state.products} /> */}
      </div>
    );
  }
}

export default App;
