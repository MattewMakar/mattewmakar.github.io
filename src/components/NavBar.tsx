import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import { SiCodeproject } from "react-icons/si";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "context/ThemeContext";
import "style/navbar.css";
import ThemeSwitch from "components/ThemeSwitch";

const NavBar = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <nav className={`nav-${theme}`}>
      <Link to="/">
        <MdWavingHand className="hi" /> Mattew Makar
      </Link>
      <Link to="/projects">
        <SiCodeproject /> Work
      </Link>
      <Link to="/tech-stack">
        <GiTechnoHeart /> Tech stack
      </Link>
        <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
