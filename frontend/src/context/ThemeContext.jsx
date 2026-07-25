import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--bg", "#050505");
      root.style.setProperty("--surface", "#111111");
      root.style.setProperty("--surface-hover", "#181818");
      root.style.setProperty("--border", "#262626");
      root.style.setProperty("--text", "#ffffff");
      root.style.setProperty("--muted", "#a1a1aa");
    } else {
      root.style.setProperty("--bg", "#f8fafc");
      root.style.setProperty("--surface", "#ffffff");
      root.style.setProperty("--surface-hover", "#f1f5f9");
      root.style.setProperty("--border", "#d4d4d8");
      root.style.setProperty("--text", "#111827");
      root.style.setProperty("--muted", "#6b7280");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}