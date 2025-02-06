import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <h1 className="aboutInfo">
          Saya seorang mahasiswa Teknik Informatika,
        </h1>
        yang memiliki passion dalam dunia pemrograman. Saya berfokus pada
        pengembangan aplikasi web dan mobile. Saya selalu berusaha untuk belajar
        hal-hal baru dan mengimplementasikan pengetahuan yang saya miliki dalam
        project-project yang saya kerjakan.
        <br />
        <Link className="aboutButton" to="/about-me">
          Read More About Me <i class="uil uil-arrow-up-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default About;
