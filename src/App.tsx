import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react";

import { AppWrap } from "wrapper";
import { Dashboard, Search } from "views";
import { AllResult, NewsResult } from "components";

import { default as THEME } from "styles/theme";
import useTheme from "styles/useTheme";
import GlobalStyle from "styles/GlobalStyles";

const App = () => {
  const [theme, onToggle] = useTheme();

  return (
    <ThemeProvider theme={THEME["dark"] as any}>
      <Global styles={GlobalStyle(THEME["dark"])} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search/*" element={<Search />}>
          <Route path="all" element={<AllResult />} />
          <Route path="news" element={<NewsResult />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default AppWrap(App, "Jarvis");
