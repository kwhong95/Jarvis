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
  Calendar,
} from "views";
import { auth, logging } from "configs";

import { useQuery } from "react-query";
import { request } from "graphql-request";

import { GRAPHCMS_API } from "configs/api";
import { getUserInfo } from "services";

import { default as THEME } from "styles/theme";
// import useTheme from "styles/useTheme";
import GlobalStyle from "styles/GlobalStyles";

const App = () => {
  // const [theme, onToggle] = useTheme();
  const [loading, setLoading] = useState<boolean>(true);
  const user: any = auth?.currentUser;

  const { data } = useQuery(["GetUserInfo", user?.email], async () => {
    const result = await request(GRAPHCMS_API!, getUserInfo, {
      email: user.email,
    });

    return result.member;
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        logging.info("User detected.");
        user.updateProfile({
          displayName: data?.name,
          photoURL: data?.photo.url,
        });
      } else {
        logging.info("No user detected");
      }

      setLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
