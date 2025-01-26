import React from "react";
import { Link } from "react-router-dom";
import LoaderMe from "../components/pageAboutMe/LoaderMe/LoaderMe";

const AboutMe = () => {
  return (
    <>
      <LoaderMe />
      <h1>Ini adalah halaman about me/more info/contact</h1>
      <div className="btnBack">
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default AboutMe;
