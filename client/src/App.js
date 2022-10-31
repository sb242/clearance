import "./App.css";
import React, { useState, useEffect } from "react";
import About from "./components/about";
import UserDisplay from "./components/UserDisplay";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setloggedIn] = useState(true);

  function updateLoggedIn() {
    loggedIn ? setloggedIn(false) : setloggedIn(true);
  }

  let renderState;

  loggedIn
    ? (renderState = <UserDisplay onClick={updateLoggedIn} />)
    : (renderState = <LandingPage onClick={updateLoggedIn} />);

  return (
    <>
      <Switch>{renderState}</Switch>
    </>
  );
}

export default App;
