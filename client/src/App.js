import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Switch } from "react-router-dom";

import UserDisplay from "./components/UserDisplay";
import LandingPage from "./components/LandingPage";

function App() {
  let renderState;
  const [loggedIn, setloggedIn] = useState(true);

  function updateLoggedIn() {
    loggedIn ? setloggedIn(false) : setloggedIn(true);
  }

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
