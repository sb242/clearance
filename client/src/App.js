import "./App.css";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { BrowserRouter as RRSwitch } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Input, Switch } from "antd";

import UserDisplay from "./components/UserDisplay";
import LandingPage from "./components/LandingPage";

function App() {
  let renderState;
  const [loggedIn, setloggedIn] = useState(true);

  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  function updateLoggedIn() {
    loggedIn ? setloggedIn(false) : setloggedIn(true);
  }

  loggedIn
    ? (renderState = <UserDisplay onClick={updateLoggedIn} />)
    : (renderState = <LandingPage onClick={updateLoggedIn} />);

  return (

    <>
      <RRSwitch>{renderState}</RRSwitch>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </>
  );
}

export default App;
