import React from "react";
import { experience } from "util/bioEntries";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid } from "@mui/material";
import useWidth from "hooks/useWidth";
import { ThemeContext } from "context/ThemeContext";
import { styled } from "@mui/material/styles";
import LottieAnimation from "./LottieAnimation";

import "style/bio-entry.css";

const WorkEntry = () => {
  const [currentIndex, SetCurrentIndex] = React.useState(0);

  const handleChange = (_: any, index: number) => {
    SetCurrentIndex(index);
  };

  const width = useWidth();
  const { theme } = React.useContext(ThemeContext);
  const StyledTab = styled((props: any) => (
    <Tab {...props} TabIndicatorProps={{ style: { background: "#FFFFFF" } }} />
  ))(() => ({
    textTransform: "none",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
    "&.Mui-selected": {
      color: theme === "dark" ? "#54e3c2" : "#825af1",
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme === "dark" ? "#54e3c2" : "#825af1",
    },
  }));
  return (
    <Grid
      container
      spacing={4}
      sx={{ paddingTop: "1%", margin: 0, maxWidth: "100%" }}
      alignItems="stretch"
    >
      <Grid
        item
        md={3}
        sm={12}
        sx={{ margin: 0, paddingLeft: "0 !important", maxWidth: "100%" }}
      >
        <Tabs
          TabIndicatorProps={{ style: { background: theme === "dark" ? "#54e3c2" : "#825af1" } }}
          value={currentIndex}
          onChange={handleChange}
          orientation={
            width === "xl" || width === "md" || width === "lg"
              ? "vertical"
              : "horizontal"
          }
          variant="scrollable"
          sx={{
            borderRight: 1,
            borderColor: theme === "dark" ? "#cccccc30" : "#cccccc",
            height: "100%",
            width: "100%",
            "& button:hover": {
              backgroundColor: theme === "dark" ? "#23355420" : "#a1b8c620",
            },
          }}
          allowScrollButtonsMobile
          scrollButtons
        >
          {experience.map((e, i) => (
            <StyledTab
              label={e.summary}
              key={`${e.summary}-${i}`}
              value={i}
              id={`tab-${e.time}`}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item md={9} sm={12} sx={{ paddingLeft: "2% !important"}}>
        {experience.map((e, i) => (
          <Grid
            container
            sx={{
              minHeight: "45vh",
              display: currentIndex !== i ? "none" : "",
            }}
            key={`${e.summary}-${i}`}
            spacing={1}
            alignItems="center"
            className={`tab-panel tab-panel-${theme}`}
          >
            <Grid item xs={12}>
              <span className={`title title-${theme} `}>
                {experience[currentIndex].inlineSummary}{" "}
                <a
                  style={{ display: "inline" }}
                  target="_blank"
                  rel="noreferrer"
                  className={`company-link company-link-${theme}`}
                  href={experience[currentIndex].link!}
                >{`@${
                  experience[currentIndex].summary.includes("Summer")
                    ? "St. Mark cathedral"
                    : experience[currentIndex].summary
                }`}</a>
              </span>
              <br />
              <span className="timeline">{experience[currentIndex].time} </span>
            </Grid>
            <Grid item xs={12}>
              {experience[currentIndex].description}
            </Grid>
            <Grid item xs={12} xl={12}>
              <LottieAnimation
                path={experience[currentIndex].lottie}
                loop={
                  !experience[currentIndex].inlineSummary.includes("Accountant")
                }
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WorkEntry;
