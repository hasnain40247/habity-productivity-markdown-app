import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#e9e3e3",
  font: "#544e50",
};

export const darkTheme = {
  body: "#505050",
  font: "#ececea",
};

export const GlobalTheme = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
}

`;
