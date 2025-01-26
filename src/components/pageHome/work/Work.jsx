import React from "react";
import "./work.css";
import Picture from "../../../assets/a_raccoon.png";

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
                <span>Website dikembangkan dengan framework Laravel 11 dan library css seperti tailwind. Website dikembangkan dengan framework Laravel 11 dan library css seperti tailwind. Website dikembangkan dengan framework Laravel 11 dan library css seperti tailwind.</span>
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

        {/* styleable WPU */}
        <div class="course">
          <section>
            <details name="wpucourse" open>
              <summary>
                <span>1</span>
              </summary>
              <div class="details-content-wrapper">
                <h4>Web E-learning</h4>
                <p>
                  Website dibuat dengan framework Laravel 11 dan library CSS seperti tailwind.
                </p>
                <img className="accordion-image" src={Picture} />
              </div>
            </details>

            <details name="wpucourse">
              <summary>
                <span>2</span>
              </summary>
              <div class="details-content-wrapper">
                <h4>Aplikasi Weather Forcast</h4>
                <p>
                  Aplikasi dapat menampilkan cuaca terkini berdasarkan lokasi yang diinputkan.
                </p>
                <img className="accordion-image" src={Picture} />
                </div>
            </details>

            <details name="wpucourse">
              <summary>
                <span>3</span>
              </summary>
              <div class="details-content-wrapper">
                <h4>Prototype Aplikasi Kursus Bahasa</h4>
                <p>
                  Aplikasi ini dibuat dengan menggunakan figma dan prototipe aplikasi kursus bahasa.
                </p>
                <img className="accordion-image" src={Picture} />
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
