import './App.css';
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
>>>>>>> 2a193fb430747b4ef410f46563ecba5ff732ea0f
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
<<<<<<< HEAD
<<<<<<< HEAD

        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
=======
      
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
      
>>>>>>> 2a193fb430747b4ef410f46563ecba5ff732ea0f
=======
        <Switch>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>

        </Switch>
        <Footer />
>>>>>>> 414f27b081d9c3ed37e877300cdb8ad2735d6c2c
      </Provider>
    </Router>
  );
}

export default App;