import { useEffect, useState, useCallback } from "react";

const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const getInitialTheme = useCallback(() => {
    let theme = window.localStorage.getItem("app_theme") as
      | "dark"
      | "light"
      | null;
    const INVAILD_THEME = theme !== "light" && theme !== "dark";

    if (!theme || INVAILD_THEME) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      theme = matches ? "dark" : "light";
    }

    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("app_theme", theme);
  });

  return [theme, toggleTheme];
};

export default useTheme;
