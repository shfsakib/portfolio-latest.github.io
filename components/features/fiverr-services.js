import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import { AiFillStar } from "react-icons/ai";

const FiverrServices = () => {
  return (
    <Fragment>
      <section className="fiverr section">
        <h2 className="section__title" data-aos="fade-down">
          Fiverr Services
        </h2>
        <span className="section__subtitle" data-aos="fade-up">
          What I offer in Fiverr
        </span>
        <div className="testimonial__container container">
          <Swiper
            pagination={{
              clickable: true,
              dynamicMainBullets: true,
            }}
            // loop={true}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              568: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1255: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={0}
            className="myAutoSwiper"
          >
            <div className="">
              <SwiperSlide>
                <div className="card tw-m-auto">
                  <a href="https://www.fiverr.com/share/mK3G38">
                    <img
                      src="/fiver1.png"
                      alt="fiverr img"
                      className="tw-w-full"
                    />
                    <div className="tw-p-4 title">
                      I will do any work based on asp net c sharp with mssql
                      <div className="tw-flex tw-text-start tw-mt-2">
                        <AiFillStar className="tw-text-yellow-400 tw-text-md" />
                        <span className="tw-text-yellow-400 tw-font-semibold tw-ml-2 -tw-mt-1">
                          {" "}
                          4.7{" "}
                        </span>
                        <span className="tw-text-slate-400 tw-text-sm tw-ml-1 -tw-mt-0.5">
                          (13)
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="tw-justify-end tw-px-4 tw-py-0 tw-flex">
                      <span className="tw-text-xs tw-font-semibold tw-py-4">
                        STARTING AT
                      </span>
                      <span className="tw-text-xl tw-pl-2 tw-py-2">$30</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card tw-m-auto">
                  <a href="https://www.fiverr.com/share/oPE74G">
                    <img
                      src="/fiver2.webp"
                      alt="fiverr img"
                      className="tw-w-full"
                    />
                    <div className="tw-p-4 title">
                      I will develop chat application using reactjs and nodejs
                      <div className="tw-flex tw-text-start tw-mt-2">
                        <AiFillStar className="tw-text-yellow-400 tw-text-md" />
                        <span className="tw-text-yellow-400 tw-font-semibold tw-ml-2 -tw-mt-1">
                          {" "}
                          5.0{" "}
                        </span>
                        <span className="tw-text-slate-400 tw-text-sm tw-ml-1 -tw-mt-0.5">
                          (2)
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="tw-justify-end tw-px-4 tw-py-0 tw-flex">
                      <span className="tw-text-xs tw-font-semibold tw-py-4">
                        STARTING AT
                      </span>
                      <span className="tw-text-xl tw-pl-2 tw-py-2">$150</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card tw-m-auto">
                  <a href="https://www.fiverr.com/share/2dkjmQ">
                    <img
                      src="/fiver3.webp"
                      alt="fiverr img"
                      className="tw-w-full"
                    />
                    <div className="tw-p-4 title">
                      I will do any software using react js and node express
                      <div className="tw-flex tw-text-start tw-mt-2">
                        <AiFillStar className="tw-text-yellow-400 tw-text-md" />
                        <span className="tw-text-yellow-400 tw-font-semibold tw-ml-2 -tw-mt-1">
                          {" "}
                          5.0{" "}
                        </span>
                        <span className="tw-text-slate-400 tw-text-sm tw-ml-1 -tw-mt-0.5">
                          (2)
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="tw-justify-end tw-px-4 tw-py-0 tw-flex">
                      <span className="tw-text-xs tw-font-semibold tw-py-4">
                        STARTING AT
                      </span>
                      <span className="tw-text-xl tw-pl-2 tw-py-2">$30</span>
                    </div>
                  </a>{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card tw-m-auto">
                  <a href="https://www.fiverr.com/share/Eb2L6y">
                    <img
                      src="/fiver4.webp"
                      alt="fiverr img"
                      className="tw-w-full"
                    />
                    <div className="tw-p-4 title">
                      I will develop chat system using reactjs nodejs and socket
                      io
                      <div className="tw-flex tw-text-start tw-mt-2">
                        <AiFillStar className="tw-text-yellow-400 tw-text-md" />
                        <span className="tw-text-yellow-400 tw-font-semibold tw-ml-2 -tw-mt-1">
                          {" "}
                          5.0{" "}
                        </span>
                        <span className="tw-text-slate-400 tw-text-sm tw-ml-1 -tw-mt-0.5">
                          (6)
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="tw-justify-end tw-px-4 tw-py-0 tw-flex">
                      <span className="tw-text-xs tw-font-semibold tw-py-4">
                        STARTING AT
                      </span>
                      <span className="tw-text-xl tw-pl-2 tw-py-2">$150</span>
                    </div>
                  </a>{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card tw-m-auto">
                  <a href="https://www.fiverr.com/share/Eb2L6y">
                    <img
                      src="/fiver6.webp"
                      alt="fiverr img"
                      className="tw-w-full"
                    />
                    <div className="tw-p-4 title">
                      I will make bot system by metaverse API
                    </div>
                    <hr />
                    <div className="tw-justify-end tw-px-4 tw-py-0 tw-flex">
                      <span className="tw-text-xs tw-font-semibold tw-py-4">
                        STARTING AT
                      </span>
                      <span className="tw-text-xl tw-pl-2 tw-py-2">$100</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default FiverrServices;
