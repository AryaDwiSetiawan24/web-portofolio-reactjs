import React from "react";
import { Link } from "react-router-dom";
import LoaderMe from "../components/pageAboutMe/loaderAbout/LoaderMe";
import HeroAbout from "../components/pageAboutMe/heroAbout/heroAbout";

const AboutMe = () => {
  return (
    <div>
      <LoaderMe />
      <HeroAbout />
    </div>
  );
};

export default AboutMe;
