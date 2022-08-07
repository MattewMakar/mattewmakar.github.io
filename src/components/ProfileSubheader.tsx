import React from "react";
import "style/profile-subheader.css";

const ProfileSubheader: React.FC<{ title: string }> = ({ title }) => {
  return (
      <h2 className="subheader">{title}</h2>
  );
};

export default ProfileSubheader;
