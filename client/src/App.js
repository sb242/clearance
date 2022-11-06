import "./App.css";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { BrowserRouter as RRSwitch } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";

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
      <RRSwitch>{renderState}</RRSwitch>
    </>
  );
}

export default App;
