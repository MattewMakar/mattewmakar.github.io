import React from "react";
import { SocialEntry as SocialEntryType } from "util/socialEntries";

const SocialEntry: React.FC<{
  socialEntry: SocialEntryType;
  theme: string;
}> = ({ socialEntry, theme }) => {
  return (
    <li key={socialEntry.link}>
      <>
        <socialEntry.icon />{" "}
        <a className={`socials-link-${theme}`} target="_blank" rel="noreferrer" href={socialEntry.link}>
          {socialEntry.description}
        </a>
      </>
    </li>
  );
};

export default SocialEntry;
