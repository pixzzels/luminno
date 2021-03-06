import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage/HomePage";
import ListingPage from "./components/ListingPage";
import CategoryPage from "./components/CategoryPage";

import './index.css'
import Search from "./components/Search";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
// import CategoryPage from "./components/CategoryPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation className="Navigation" isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/listings/:id">
            <ListingPage />
          </Route>
          <Route path="/listings/search">
            <Search />
          </Route>
          <Route path="/category/:id">
            <CategoryPage />
          </Route>
          <Route path="/profile/cart">
            <ShoppingCart />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;