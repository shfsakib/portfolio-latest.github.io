import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [activeInx, setActiveInx] = useState(1);
  useEffect(() => {
    Aos.init({
      offset: 20,
      duration: 1200,
      once: false,
      delay: 100,
    });
  }, [activeInx]);
  return (
    <Fragment>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title" data-aos="fade-down">
          Portfolio
        </h2>
        <span className="section__subtitle" data-aos="fade-up">
          My Recent Work
        </span>
        <div className="portfolio__container container">
          {" "}
          <Swiper
            cssMode={true}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            onSlideChange={(e) => {
              setActiveInx(e.activeIndex);
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <div className="">
              <SwiperSlide>
                <div className="portfolio__content grid">
                  <img
                    src="chat.png"
                    alt="chat system"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title" data-aos="fade-down">
                      Chat System
                    </h3>
                    <p className="portfolio__description" data-aos="fade-down">
                      A demo chat system with basic features
                    </p>
                    <a
                      href="http://44.199.235.160/#/login"
                      target={"_blank"}
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                      data-aos="fade-up"
                    >
                      Demo
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
                <div className="portfolio__content grid">
                  <img
                    src="hq.svg"
                    alt="nft market place"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title" data-aos="fade-down">
                      NFT Marketplace
                    </h3>
                    <p className="portfolio__description" data-aos="fade-down">
                      A online non-fungible token (NFT) marketplace. Which allow
                      you to generate your own art, mint them and many more.
                    </p>
                    <a
                      href="https://hqnfts.xyz/"
                      target={"_blank"}
                      data-aos="fade-up"
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__content grid">
                  <img
                    src="donation.png"
                    alt="social funding"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">
                      Social Funding System for Nigeria
                    </h3>
                    <p className="portfolio__description">
                      A online web platform where people can donate fund for
                      needy people with many more features.
                    </p>
                    <a
                      href="http://44.201.93.103/#/login"
                      target={"_blank"}
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
                <div className="portfolio__content grid">
                  <img
                    src="ecommerce.png"
                    alt="multi vendor ecommerce"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">
                      Multi Vendor E-Commerce
                    </h3>
                    <p className="portfolio__description">
                      A multi vendor ecommerce platform where you can manage
                      your customer, merchants, warehouse and every single thing
                      related to ecommerce system.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
                <div className="portfolio__content grid">
                  <img
                    src="medicine.png"
                    alt="Online medical support"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">
                      Online Medi Support App
                    </h3>
                    <p className="portfolio__description">
                      {
                        "A platform where you can order medicine by compare it's price with all shops. Also can find ambulance, doctor details."
                      }
                    </p>
                    <a
                      href="https://github.com/shfsakib/OnlineMediShopApp"
                      target={"_blank"}
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Github
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
                {" "}
                <div className="portfolio__content grid">
                  <img
                    src="thesis.png"
                    alt="University Final Defence"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">
                      University Final Defence Management System
                    </h3>
                    <p className="portfolio__description">
                      A platform where you can final year defence of a
                      university.
                    </p>
                    <a
                      href="https://github.com/shfsakib/PCIUThesisManagementAndroidApp"
                      target={"_blank"}
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Github
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
                {" "}
                <div className="portfolio__content grid">
                  <img
                    src="child.png"
                    alt="Child Learning App"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Child Learning App</h3>
                    <p className="portfolio__description">
                      A cross platform app where you can teach your 2 to 5 years
                      old child from writing to rhymes and many more.
                    </p>
                    <a
                      href="https://github.com/shfsakib/ChildLearningApp"
                      target={"_blank"}
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Github
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
                {" "}
                <div className="portfolio__content grid">
                  <img
                    src="empower.png"
                    alt="Empower"
                    className="portfolio__img"
                  />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">
                      Empower & Product Selling System
                    </h3>
                    <p className="portfolio__description">
                      A web system where you can hire people and also sell your
                      products in one platform.
                    </p>
                    <a
                      href="https://github.com/shfsakib/StudentMarket"
                      target={"_blank"}
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Github
                      <AiOutlineArrowRight className="button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
