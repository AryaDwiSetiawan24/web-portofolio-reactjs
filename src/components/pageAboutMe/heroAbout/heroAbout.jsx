import React from "react";
import picture from "../../../assets/profil-pantai.jpg";
import "./heroAbout.css";

const HeroAbout = () => {
  return (
    <section className="heroAbout">
      <div className="containerHeroAbout">
        <div class="responsive-container-block bigContainer">
          <div class="responsive-container-block Container bottomContainer">
            <div class="ultimateImg">
              <img className="mainImg" src={picture} />
            </div>
            <div class="allText bottomText">
              <p class="text-blk headingText">About Me</p>
              <p class="text-blk subHeadingText">
                Perkenalkan, saya Arya Dwi Setiawan. Saya adalah seorang
                mahasiswa Teknik Informatika.
              </p>
              <p class="text-blk description">
                Saya memiliki passion dalam dunia pemrograman yang berfokus pada
                pengembangan aplikasi web dan mobile. Saya selalu berusaha untuk
                belajar hal-hal baru dan mengimplementasikan pengetahuan yang
                saya miliki dalam project-project yang saya kerjakan.
              </p>
              <a class="explore" href="/">
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
