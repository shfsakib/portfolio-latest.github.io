import React from "react";
import { BsDownload } from "react-icons/bs";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src="/about.png" alt="about-img" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            {
              "I'm a designer & developer with a passion for web & windows application development. I enjoy develop web software that help people to fulfil their demand. Many clients have procured exceptional result while working with me. Delivering work within time and budget which meets clients requirements is my moto."
            }
          </p>
          <div className="about__info">
            <div className="">
              <span className="about__info-title">3+</span>
              <span className="about__info-name">
                Years
                <br />
                experience
              </span>
            </div>
            <div className="">
              <span className="about__info-title">60+</span>
              <span className="about__info-name">
                Completed
                <br />
                projects
              </span>
            </div>
            <div className="">
              <span className="about__info-title">50+</span>
              <span className="about__info-name">
                Satisfied
                <br />
                clients
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              href="/cv.docx"
              download={true}
              className={"button button--flex"}
            >
              Download CV
              <BsDownload className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
