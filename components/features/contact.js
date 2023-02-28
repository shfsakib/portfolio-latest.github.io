import React, { Fragment, useRef } from "react";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { IoSendOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fa0iudj",
        "template_pyxrvcj",
        form.current,
        "B2Df2EAtu9xohCD0i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
                <a
                  href="tel:+8801685685506"
                  className="contact__subtitle tw-cursor-pointer"
                >
                  +880 1685 685506
                </a>
              </div>
            </div>
            <div className="contact__information">
              <BsEnvelope className="contact__icon" data-aos="fade-right" />
              <div className="" data-aos="fade-left">
                <h3 className="contact__title">Email</h3>
                <a
                  href="mailto:shfsakib@gmail.com"
                  className="contact__subtitle tw-cursor-pointer"
                >
                  shfsakib@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
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
                  name="email"
                  autoComplete="off"
                  className="contact__input"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            {/* <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Project
              </label>
              <input
                type="text"
                className="contact__input"
                placeholder="e.g Project Title (Optional)"
              />
            </div> */}
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Message
              </label>
              <textarea
                id=""
                cols="0"
                rows="7"
                name="message"
                placeholder="Write your message"
                className="contact__input"
              ></textarea>
            </div>
            <div className="">
              <button type="submit" className="button button--flex">
                Send Message
                <IoSendOutline className="button__icon" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
