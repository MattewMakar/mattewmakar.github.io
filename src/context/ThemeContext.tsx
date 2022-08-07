import React from "react";

export const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {},
});
const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
