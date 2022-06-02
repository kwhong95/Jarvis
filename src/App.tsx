import { ThemeProvider, Global } from "@emotion/react";

import { WeatherWidget } from "./widgets";
import { AppWrap } from "wrapper";
import useTheme from "styles/useTheme";
import { default as THEME } from "styles/theme";
import GlobalStyle from "styles/GlobalStyles";

const App = () => {
  // const [theme, onToggle] = useTheme();

  return (
    <ThemeProvider theme={THEME["dark"]}>
      <Global styles={GlobalStyle(THEME["dark"])} />
      <WeatherWidget />
    </ThemeProvider>
  );
};

export default AppWrap(App, "Jarvis");
