import React, { Fragment } from "react";
import { AiOutlineStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <Fragment>
      <section className="testimonial section">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">Review from clients</span>

        <div className="testimonial__container container">
          <div className="">
            <div className="testimonial__content">
              <div className="testimonial__data">
                <div className="testimonial__header">
                  <img
                    src="/shueib.png"
                    alt="Client"
                    className="testimonial__img"
                  />
                  <div className="">
                    <h3 className="testimonial__name">
                      Mr. Shueib Abdul Azize
                    </h3>
                    <span className="testimonial__client">Client</span>
                  </div>
                </div>
                <div className="">
                  <AiOutlineStar className="testimonial__icon-start" />
                  <AiOutlineStar className="testimonial__icon-start" />
                  <AiOutlineStar className="testimonial__icon-start" />
                  <AiOutlineStar className="testimonial__icon-start" />
                  <AiOutlineStar className="testimonial__icon-start" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
