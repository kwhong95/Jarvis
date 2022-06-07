import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react";

import {
  Dashboard,
  Register,
  Login,
  ChangePassword,
  ForgotPassword,
  ResetPassword,
} from "views";
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
        <Route path="/reset" element={<ResetPassword />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
