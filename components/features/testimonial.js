import React, { Fragment } from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <Fragment>
      <section className="testimonial section">
        <h2 className="section__title" data-aos="fade-down">
          Testimonial
        </h2>
        <span className="section__subtitle" data-aos="fade-up">
          Review from clients
        </span>
        <div className="testimonial__container container">
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              568: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            grabCursor={true}
            spaceBetween={48}
            className="testiSwipers"
          >
            <div className="">
              <SwiperSlide>
                {" "}
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header" data-aos="fade-right">
                      <img
                        src="shueib.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Shueib Abdul</h3>
                        <span className="testimonial__client">
                          <img src="Mozambique.png" alt="flag" />
                          Mozambique
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex" data-aos="fade-left">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description" data-aos="fade-up">
                    {
                      "I must say the man is a wonderful developer. He has done precisely and exactly what I had requested and a little more . Would definitely hire him again. Thank you very much for your efforts mate!"
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header" data-aos="fade-right">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Hasan</h3>
                        <span className="testimonial__client">
                          <img src="us.png" alt="flag" />
                          United States
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex" data-aos="fade-left">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description" data-aos="fade-up">
                    {
                      "He was very professional. Communication was great and responses were quick. Lots of questions so that he knew exactly what I needed. Delivered before the deadline. Would highly recommend. Thanks!"
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="nanseto.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Ms. Nanseto</h3>
                        <span className="testimonial__client">
                          <span className="testimonial__client">
                            <img src="canada.png" alt="flag" />
                            Canada
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "Excellent work and communication, and thank you for the prompt delivery. I will use your services again! A+."
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="hakimimas.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Hakimimas</h3>
                        <span className="testimonial__client">
                          <img src="Malaysia.png" alt="flag" />
                          Malaysia
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "He is very easy to communicate with. The delivery was really fast! Also he can do what you ask him to. Definitely recommend him."
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
                {" "}
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Bilal Sohail</h3>
                        <span className="testimonial__client">
                          <img src="uk.png" alt="flag" />
                          United Kingdom
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "He is very easy to communicate with. The delivery was really fast! Also he can do what you ask him to. Definitely recommend him."
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 6 */}
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="avatar.png"
                      alt="Client"
                      className="testimonial__img"
                    />
                    <div className="">
                      <h3 className="testimonial__name">Mr. CTZN</h3>
                      <span className="testimonial__client">
                        <img src="uk.png" alt="flag" />
                        United Kingdom
                      </span>
                    </div>
                  </div>
                  <div className="tw-flex">
                    <AiFillStar className="testimonial__icon-star" />
                    <AiFillStar className="testimonial__icon-star" />
                    <AiFillStar className="testimonial__icon-star" />
                    <AiFillStar className="testimonial__icon-star" />
                    <AiFillStar className="testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  {
                    "Amazing experience, great work, fast delivery, fast replies and amazing communication, he went above and beyond even after the project was delivered. Would highly recommend, he'll be the first on my list whenever i need a freelancers again."
                  }
                </p>
              </div>
              {/* 7 */}
              <SwiperSlide>
                {" "}
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. MMC</h3>
                        <span className="testimonial__client">
                          <img src="oman.png" alt="flag" />
                          Oman
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "Amazing experience, great work, fast delivery, fast replies and amazing communication, he went above and beyond even after the project was delivered. Would highly recommend, he'll be the first on my list whenever i need a freelancers again."
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Daud</h3>
                        <span className="testimonial__client">
                          <img src="uk.png" alt="flag" />
                          United Kingdom
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "Sakib is very supporting, and he knows what he is doing well. It was nice to work and trust him."
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. SC</h3>
                        <span className="testimonial__client">
                          <img src="us.png" alt="flag" />
                          United States
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "Good, quick, good service. Will definitely recommend him."
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Senu Rabi</h3>
                        <span className="testimonial__client">
                          <img src="us.png" alt="flag" />
                          United States
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {
                      "Great guy, very patient and communication is awesome which I like, thank you for the job well done, will definitely come back"
                    }
                  </p>
                </div>
              </SwiperSlide>
              {/* 11 */}
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img
                        src="avatar.png"
                        alt="Client"
                        className="testimonial__img"
                      />
                      <div className="">
                        <h3 className="testimonial__name">Mr. Devid</h3>
                        <span className="testimonial__client">
                          <img src="uk.png" alt="flag" />
                          United Kingdom
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex">
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                      <AiFillStar className="testimonial__icon-star" />
                    </div>
                  </div>
                  <p className="testimonial__description">
                    {"Amazing experience. Would highly recommend."}
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
