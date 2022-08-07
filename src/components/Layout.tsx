import React from "react";
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";
import "style/layout.css";
import { ThemeContext } from "context/ThemeContext";

const Layout = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <NavBar />
      <main className={`main-${theme}`}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
