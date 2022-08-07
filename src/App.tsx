import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import Profile from "pages/Profile";
import Projects from "pages/Projects";
import Technology from "pages/Technology";
import ThemeContextProvider from "context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
       HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tech-stack" element={<Technology />} />
          </Route>
        </Routes>
      < HashRouter>
    </ThemeContextProvider>
  );
}

export default App;
