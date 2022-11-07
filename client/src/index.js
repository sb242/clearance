import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="light"
      // add comment with insertionPoint text as identifier to trigger style injection
      // insertionPoint="styles-insertion-point"
    >
      <App />
    </ThemeSwitcherProvider>
  </BrowserRouter>
);
