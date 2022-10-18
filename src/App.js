import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import "./App.css"
import { darkTheme, GlobalTheme, lightTheme } from "./Utilities/Theme";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (

      <Home  />
  );
}

export default App;
