import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react";
import { Dashboard, Search, Register } from "views";
import { AllResult, ImageResult, NewsResult } from "components";

import { default as THEME } from "styles/theme";
// import useTheme from "styles/useTheme";
import GlobalStyle from "styles/GlobalStyles";

const App = () => {
  // const [theme, onToggle] = useTheme();

  return (
    <ThemeProvider theme={THEME["dark"] as any}>
      <Global styles={GlobalStyle(THEME["dark"])} />
      <Routes>
        {/* Auth */}
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Dashboard />} />

        {/* Search */}
        <Route path="/search/*" element={<Search />}>
          <Route path="all" element={<AllResult />} />
          <Route path="news" element={<NewsResult />} />
          <Route path="image" element={<ImageResult />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
