import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #151515;
    --secondary-color: #1E192C;
    --text-first-color: #FFFFFF;
    --text-secondary-color: #E4105D;
    --dio-yellow: #E5E044;
    --dio-green: #23DD7A;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    border: none;
  }

  body {
    background: var(--secondary-color);
  }
`;

export default GlobalStyle;
