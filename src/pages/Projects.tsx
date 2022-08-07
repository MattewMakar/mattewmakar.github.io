import { Grid } from "@mui/material";
import React from "react";
import { ThemeContext } from "context/ThemeContext";
import "style/projects.css";

const Projects = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Grid
      container
      className="main-grid"
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={6}>
        <Grid
          container
          sx={{ backgroundColor: theme === "dark" ? "#233554" : "#F0E7DB" }}
          className="sub-grid"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid xs={12} md={6}>
            <div className={`project project-${theme}`}> </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className={`project project-${theme}`}> </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className={`project project-${theme}`}></div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className={`project project-${theme}`}> </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
