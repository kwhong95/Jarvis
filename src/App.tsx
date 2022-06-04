import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react";

import { Dashboard, Search, Register, Login, ChangePassword } from "views";
import { AllResult, ImageResult, NewsResult } from "components";
import { auth, logging } from "configs";

import { default as THEME } from "styles/theme";
// import useTheme from "styles/useTheme";
import GlobalStyle from "styles/GlobalStyles";

const App = () => {
  // const [theme, onToggle] = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      logging.warn("No user detected, redirecting");
      return navigate("/login");
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={THEME["dark"] as any}>
      <Global styles={GlobalStyle(THEME["dark"])} />
      <Routes>
        {/* Auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change" element={<ChangePassword />} />

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
