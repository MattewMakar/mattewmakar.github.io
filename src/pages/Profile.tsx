import CodingInPeace from "components/CodingInPeace";
import { Canvas } from "@react-three/fiber";
import "style/profile.css";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { socials } from "util/socialEntries";
import SocialEntry from "components/SocialEntry";
import ProfileSubheader from "components/ProfileSubheader";
import EducationEntry from "components/EducationEntry";
import WorkEntry from "components/WorkEntry";
import { Grid } from "@mui/material";

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={` bio bio-${theme}`}>
      <section className="bio-intro-wrapper">
        <div className="bio-intro">
          <h2>Hi There!</h2>
          <p>
            I'm a <span>Full stack developer</span> based in <span>Canada</span>{" "}
            and I love building exceptional digital solutions that make people's
            life a bit better and easier.
          </p>
        </div>
        <div className="bio-3d-object">
          <Canvas
            camera={{ position: [-500, 10, 150], fov: 35, aspect: 1, near: 10 }}
          >
            <CodingInPeace />
          </Canvas>
        </div>
      </section>
      <section>
        <ProfileSubheader title={"Experience"} />
        <WorkEntry />
      </section>
      <section>
        <ProfileSubheader title={"Education"} />
        <EducationEntry />
      </section>
      <section>
        <ProfileSubheader title={"Contact"} />
        <Grid container className="socials" alignItems="center">
          <Grid item xs={9}>
            <ul className="socials-list">
              {socials.map((e, i) => (
                <SocialEntry
                  socialEntry={e}
                  theme={theme}
                  key={`${e.link}-${i}`}
                />
              ))}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <img src="https://mattewmakar.github.io/IMG_0808.jpeg" alt="profileImage" loading="lazy" />
          </Grid>
        </Grid>
      </section>
    </section>
  );
};

export default Profile;
