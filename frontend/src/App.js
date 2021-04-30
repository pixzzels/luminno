import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage/HomePage";
import ListingPage from "./components/ListingPage";

import './index.css'
import CategoryPage from "./components/CategoryPage";


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
          {/* <Route path="/category/:id">
            <CategoryPage />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;