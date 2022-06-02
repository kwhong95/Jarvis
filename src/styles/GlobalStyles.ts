import { css } from "@emotion/react";
import { Theme } from "styles/theme";

const GlobalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    background-color: ${theme.colors.navy};
    color: white;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
