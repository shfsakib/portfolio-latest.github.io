import React, { Fragment } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCheckCircle,
  AiOutlineDesktop,
} from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { GoServer } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Services = () => {
  return (
    <Fragment>
      <section className="services__section section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div className="">
              <BiCodeCurly className="services__icons" />
              <h3 className="services__title">
                Frontend <br />
                Developer
              </h3>
            </div>
            <span className="button button--flex button--link button--small services__button">
              View More
              <AiOutlineArrowRight className="button__icon" />
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Frontend <br /> Developer
                </h4>
                <MdOutlineClose className="services__modal-close" />
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Template using HTML,CSS, jQuery & Bootstrap"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Material UI"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Responsive Design"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Template in ReactJS or NextJS"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"API integration in ReactJS or NextJS"}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="services__content">
            <div className="">
              <GoServer className="services__icons" />
              <h3 className="services__title">
                Web <br />
                Development
              </h3>
            </div>
            <span className="button button--flex button--link button--small services__button">
              View More
              <AiOutlineArrowRight className="button__icon" />
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Web <br /> Developer
                </h4>
                <MdOutlineClose className="services__modal-close" />
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Static or Dynamic website"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Build software like  POS, CNF, NFT, CHAT System"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>
                      {"Integrate bot system in whatsapp or Implement SMS bot"}
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Add new features to your existing system"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Design database for your application"}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="services__content">
            <div className="">
              <AiOutlineDesktop className="services__icons" />
              <h3 className="services__title">
                Desktop App <br />
                Developer
              </h3>
            </div>
            <span className="button button--flex button--link button--small services__button">
              View More
              <AiOutlineArrowRight className="button__icon" />
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Desktop App <br /> Developer
                </h4>
                <MdOutlineClose className="services__modal-close" />
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Attractive form design"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Best user experience"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Make your offline system with unique features"}</p>
                  </li>
                  <li className="services__modal-service">
                    <AiOutlineCheckCircle className="services__modal-icon" />
                    <p>{"Experience like web system"}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
