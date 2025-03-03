import React from "react";
import "./work.css";

import Picture from "../../../assets/a_raccoon.png";
import elearning from "../../../assets/elearning-naga.png";
import cuaca from "../../../assets/cuaca-app.jpg";
import lingua from "../../../assets/lingua.jpg";

const Work = () => {
  return (
    <section id="work">
      <div className="workDesign">
        <div className="workTypo">
          <span>work</span>
          <span>work</span>
          <span>work</span>
        </div>
      </div>
      <div className="workContainerMain">
        {/* work content */}
        {/* <div className="work1">
          <div className="workMain">
            <img className="workImage" src={Picture} />
            <div className="workText">
              <span className="workNumber">01.</span>
              <div className="workTitle">
                <span>Web E-Learning</span>
                <span>Website</span>
              </div>
            </div>
          </div>
          <div className="workLink">
            <a className="workLinked" href="#">
              <i class="uil uil-arrow-up-left"></i> View Project
            </a>
          </div>
        </div>
        <div className="work2">
          <div className="workMain">
            <img className="workImage" src={Picture} />
            <div className="workText">
              <span className="workNumber">01.</span>
              <div className="workTitle">
                <span>Contoh 2</span>
                <span>Tagline 2</span>
              </div>
            </div>
          </div>
          <div className="workLink">
            <a className="workLinked" href="#">
              <i class="uil uil-arrow-up-left"></i> View Project
            </a>
          </div>
        </div>
        <div className="work3">
          <div className="workMain">
            <img className="workImage" src={Picture} />
            <div className="workText">
              <span className="workNumber">01.</span>
              <div className="workTitle">
                <span>Contoh 3</span>
                <span>Tagline 3</span>
              </div>
            </div>
          </div>
          <div className="workLink">
            <a className="workLinked" href="#">
              <i class="uil uil-arrow-up-left"></i> View Project
            </a>
          </div>
        </div> */}

        {/* styleable CSS */}
        <div className="course">
          <section>
            <details name="myproject" open>
              <summary>
                <span>1</span>
              </summary>
              <div class="details-content-wrapper">
                <h4>Website E-learning</h4>
                <p>
                  Website E-learning dibuat dengan framework Laravel 11 dan
                  library CSS seperti tailwind.
                </p>
                <div className="accordion-container">
                  <img className="accordion-image" src={elearning} />
                </div>
                <a
                  className="workLinked"
                  href="https://github.com/AryaDwiSetiawan24/Projek_RPL_E-learning.git"
                  target="_blank"
                >
                  <i class="uil uil-arrow-up-left"></i> View Project
                </a>
              </div>
            </details>

            <details name="myproject">
              <summary>
                <span>2</span>
              </summary>
              <div class="details-content-wrapper">
                <h4>CuacaApp</h4>
                <p>
                  Aplikasi dapat menampilkan cuaca terkini berdasarkan lokasi
                  yang diinputkan.
                </p>
                <div className="accordion-container">
                  <img className="accordion-image" src={cuaca} />
                </div>
                <a
                  className="workLinked"
                  href="https://drive.google.com/file/d/10lEvgdFiE20KppyTHH8WsPZAsHzyK-uW/view?usp=sharing"
                  target="_blank"
                >
                  <i class="uil uil-arrow-up-left"></i> View Project
                </a>
              </div>
            </details>

            <details name="myproject">
              <summary>
                <span>3</span>
              </summary>
              <div className="details-content-wrapper">
                <h4>Lingua</h4>
                <p>
                  Aplikasi ini dibuat dengan menggunakan figma dan prototipe
                  aplikasi kursus bahasa.
                </p>
                <div className="accordion-container">
                  <img className="accordion-image" src={lingua} />
                </div>
                <a
                  className="workLinked"
                  href="https://drive.google.com/file/d/1tgLank7VUq8gzO3pUqljP-PK0te1OxCW/view?usp=sharing"
                  target="_blank"
                >
                  <i class="uil uil-arrow-up-left"></i> View Project
                </a>
              </div>
            </details>
          </section>
        </div>
        {/* end work content */}
      </div>
    </section>
  );
};

export default Work;
