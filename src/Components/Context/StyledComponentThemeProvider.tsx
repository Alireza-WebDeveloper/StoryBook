import { useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import React from "react";
import { DarkTheme, LightTheme } from "../Theme";

const ThemeContext = React.createContext(
  {} as {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  }
);

interface StyledComponentThemeProviderProps {
  children: React.ReactNode;
}

const StyledComponentThemeProvider: React.FC<
  StyledComponentThemeProviderProps
> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeProviderContext = () => {
  return useContext(ThemeContext);
};

export default StyledComponentThemeProvider;
