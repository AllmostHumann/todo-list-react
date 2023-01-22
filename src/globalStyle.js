import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  word-break: break-word;
  background-color: hsl(0, 0%, 85%);
  justify-content: center;
}
`;

export default GlobalStyle;