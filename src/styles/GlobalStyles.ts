import { css } from "@emotion/react";
import { Theme } from "styles/theme";

const GlobalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  html {
    background-color: ${theme.colors.navy};
    color: white;
    font-size: 14px;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
