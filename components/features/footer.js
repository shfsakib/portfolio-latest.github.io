import React, { Fragment } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__bg">
          <div className="container tw-grid tw-gap-y-14 tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-px-4 md:tw-grid-cols-3 lg:tw-px-0">
            <div className="">
              <h1 className="footer__title">Sakib Hossain</h1>
              <span className="footer__subtitle">Full Stack Developer</span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact me
                </a>
              </li>
            </ul>
            <div className="container footer__socials sm:tw-col-span-2 md:tw-col-span-1 md:tw-px-14">
              <a
                href="https://www.facebook.com/shfsakib"
                target={"_blank"}
                rel="noreferrer"
                className="footer__social"
              >
                <BsFacebook />
              </a>
              <a
                href="https://wa.me/8801685685506"
                target={"_blank"}
                rel="noreferrer"
                className="footer__social"
              >
                <BsWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/shfsakib/"
                target={"_blank"}
                rel="noreferrer"
                className="footer__social"
              >
                <BsInstagram />
              </a>
              <a
                href="https://twitter.com/shf_sakib"
                target={"_blank"}
                rel="noreferrer"
                className="footer__social"
              >
                <BsTwitter />
              </a>
            </div>
          </div>

          <p className="footer__copy">
            &#169; Mohammad Sakib Hossain . All rights reserved
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
