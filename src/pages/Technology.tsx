import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Canvas } from "@react-three/fiber";
import CodingInPeace from "components/CodingInPeace";
import { techStack } from "util/technologies";
import { ThemeContext } from "context/ThemeContext";
import React from "react";

const Technology = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item sm={12} md={6}>
        <Grid
          container
          justifyContent="center"
          sx={{
            backgroundColor: theme === "dark" ? "#233554" : "#F0E7DB",
            borderRadius: "2%",
            boxShadow: "rgba(2, 12, 27, 0.7) 0px 10.0024px 30px -15px",
          }}
        >
          <Grid item xs={6} >
            <List>
              {techStack.slice(0, Math.ceil(techStack.length / 2)).map((e) => (
                <ListItem style={{ textAlign: "right" }}>
                  <ListItemText primary={e.name} />
                  <ListItemAvatar sx={{ marginLeft: 2 }}>
                    <Avatar
                      sx={{ color: "#233554", backgroundColor: "#a1b8c6" }}
                    >
                      <e.Icon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              {techStack.slice(Math.ceil(techStack.length / 2)).map((e) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{ color: "#233554", backgroundColor: "#a1b8c6" }}
                    >
                      <e.Icon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={e.name} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} alignSelf="stretch">
        <Canvas
          camera={{ position: [-500, 10, 150], fov: 35, aspect: 1, near: 10 }}
        >
          <CodingInPeace />
        </Canvas>
      </Grid>
    </Grid>
  );
};

export default Technology;
