import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react";

import {
  Dashboard,
  Search,
  Register,
  Login,
  ChangePassword,
  ForgotPassword,
} from "views";
import { AllResult, ImageResult, NewsResult } from "components";
import { auth, logging } from "configs";

import { default as THEME } from "styles/theme";
// import useTheme from "styles/useTheme";
import GlobalStyle from "styles/GlobalStyles";

const App = () => {
  // const [theme, onToggle] = useTheme();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        logging.info("User detected.");
      } else {
        logging.info("No user detected");
      }

      setLoading(false);
    });
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <ThemeProvider theme={THEME["dark"] as any}>
      <Global styles={GlobalStyle(THEME["dark"])} />
      <Routes>
        {/* Auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/forgot" element={<ForgotPassword />} />

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
