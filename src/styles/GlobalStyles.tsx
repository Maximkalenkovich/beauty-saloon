import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";




export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Cormorant Garamond "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: ${Theme.colors.primaryBg};
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


section{
  padding-top: 5px;
  padding-bottom: 2px;
  min-height: 100%;
overflow: hidden;
}
   
`


