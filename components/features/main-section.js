import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import {
  BsArrowDownShort,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMouse,
  BsWhatsapp,
} from "react-icons/bs";

const MainSection = () => {
  return (
    <Fragment>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social" data-aos="fade-up">
              <a
                href="https://www.linkedin.com/in/shfsakib/"
                target={"_blank"}
                rel="noreferrer"
                className="home__social-icon"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/shfsakib/"
                target={"_blank"}
                rel="noreferrer"
                className="home__social-icon"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.fiverr.com/shfsakib?up_rollout=true"
                target={"_blank"}
                rel="noreferrer"
                className="home__social-icon"
              >
                <span>fi</span>
              </a>
              <a
                href="https://wa.me/8801685685506"
                target={"_blank"}
                rel="noreferrer"
                className="home__social-icon"
              >
                <BsWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/shfsakib"
                target={"_blank"}
                rel="noreferrer"
                className="home__social-icon"
              >
                <BsFacebook />
              </a>
            </div>
            <div className="home__img" data-aos="zoom-in">
              <svg className="home__blob" viewBox="0 0 200 187">
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    href="mypic.png"
                    x="12"
                    y={"10"}
                    className="home__blob_img"
                  />
                </g>
              </svg>
            </div>
            <div className="home__data">
              <div className="home__title" data-aos="fade-down">
                {"Hi, I'm Sakib"}
              </div>
              <div className="home__subtitle" data-aos="fade-up">
                {"Full Stack Developer"}
              </div>
              <p className="home__description" data-aos="fade-up">
                {
                  "High level experience in web design and development, ensure quality of work"
                }
              </p>
              <a
                href="#contact"
                className="button button--flex"
                data-aos="fade-right"
              >
                Contact me <AiOutlineSend className="button__icon" size={22} />
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <BsMouse className="home__scroll-mouse" />
              <span className="home__scroll-name">Scroll down</span>
              <BsArrowDownShort className="home__scroll-arrow" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MainSection;
