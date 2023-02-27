import React, { Fragment } from "react";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { IoSendOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <Fragment>
      <section className="contact section" id="contact">
        <h2 className="section__title" data-aos="fade-down">
          Contact me
        </h2>
        <span className="section__subtitle" data-aos="fade-up">
          Get in touch
        </span>

        <div className="contact__container container grid">
          <div className="">
            <div className="contact__information">
              <BsTelephone className="contact__icon" data-aos="fade-right" />
              <div className="" data-aos="fade-left">
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">+880 1685 685506</span>
              </div>
            </div>
            <div className="contact__information">
              <BsEnvelope className="contact__icon" data-aos="fade-right" />
              <div className="" data-aos="fade-left">
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">shfsakib@gmail.com</span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form-grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input
                  type="text"
                  className="contact__input"
                  placeholder="e.g John Doe"
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Email
                </label>
                <input
                  type="email"
                  className="contact__input"
                  placeholder="name@example.com"
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Project
                </label>
                <input
                  type="text"
                  className="contact__input"
                  placeholder="e.g Project Title (Optional)"
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="0"
                  rows="7"
                  placeholder="Write your message"
                  className="contact__input"
                ></textarea>
              </div>
              <div className="">
                <a href="" className="button button--flex">
                  Send Message
                  <IoSendOutline className="button__icon" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
