import { IconType } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export interface SocialEntry {
  icon: IconType;
  description: string;
  link: string;
}

export const socials: Array<SocialEntry> = [
  {
    icon: SiGmail,
    description: "mattewmakar@gmail.com",
    link: "mailto:mattewmakar@gmail.com",
  },
  {
    icon: BsLinkedin,
    description: "https://www.linkedin.com/in/mattew-makar",
    link: "https://www.linkedin.com/in/mattew-makar",
  },
  {
    icon: BsGithub,
    description: "https://github.com/MattewMakar",
    link: "https://github.com/MattewMakar",
  },
];
