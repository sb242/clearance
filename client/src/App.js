import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import About from "./components/about";
import Login from "./components/login";
import MedsList from "./components/MedsList";
import UserDisplay from "./components/UserDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setloggedIn] = useState(true);

  function updateLoggedIn() {
    loggedIn ? setloggedIn(false) : setloggedIn(true);
  }

  let renderState;

  loggedIn ? (renderState = <UserDisplay />) : (renderState = <About />);

  return (
    <>
      <Switch>{renderState}</Switch>
    </>
  );
}

export default App;
