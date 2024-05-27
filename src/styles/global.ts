import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

`;
