import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
      </Provider>
    </Router>
  );
}

export default App;
