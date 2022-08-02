// #1976D2 blue
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkMode = createTheme({
  palette: {
    primary: {
      main: "#65FEDA",
      contrastText: "#ffffff",
    },
    background: {
      light: "#112341", // for cards background
      main: "#0A192F", // for main page
      dark: "#020D1A", // for loading page
      contrastText: "#ffffff",
    },
    text: {
      light: "#CDD7F6", // for titles
      main: "#A8B2d1", // for paragprahs in cards & left-right
      dark: "#8992B1", // for paragraphs
    },
  },
});

const Theme = (props) => {
  const { /*theme,*/ children } = props;

  return <ThemeProvider theme={darkMode}>{children}</ThemeProvider>;
};

export default Theme;
