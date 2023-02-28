import React, { Fragment, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const Qualification = () => {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <Fragment>
      <section className="qualification section">
        <h2 className="section__title" data-aos="fade-down">
          Qualification
        </h2>
        <span className="section__subtitle" data-aos="fade-up">
          My journey
        </span>
        <div className="qualification__container container">
          <div className="qualification__tab">
            <div
              className={`qualification__button button--flex${
                activeKey === 1 ? " active" : ""
              }`}
              onClick={() => {
                setActiveKey(1);
              }}
            >
              <FaGraduationCap className="qualification__icons" />
              Education
            </div>

            <div
              className={`qualification__button button--flex${
                activeKey === 2 ? " active" : ""
              }`}
              onClick={() => {
                setActiveKey(2);
              }}
            >
              <BsBriefcase className="qualification__icons" />
              Work
            </div>
          </div>
          <div className="qualification__sections">
            <div
              className={`qualification__content${
                activeKey === 1 ? " qualification__active" : ""
              }`}
              data-content
            >
              {/*  */}
              <div className="qualification__data">
                <div className="" data-aos="fade-right">
                  <h3 className="qualification__title">BSc in CSE</h3>
                  <span className="qualification__subtitle">
                    Port City International University
                  </span>
                  <span className="qualification__calendar">
                    <AiOutlineCalendar />
                    2015 - 2019
                  </span>
                </div>
                <div className="">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div className=""></div>
              </div>
              {/*  */}
              {/*  */}
              <div className="qualification__data">
                <div className=""></div>
                <div className="">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div className="" data-aos="fade-left">
                  <h3 className="qualification__title">Web Design</h3>
                  <span className="qualification__subtitle">BITS IT</span>
                  <span className="qualification__calendar">
                    <AiOutlineCalendar />
                    2017
                  </span>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="qualification__data">
                <div className="" data-aos="fade-right">
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">
                    Bangladesh Association of Software and Information Services
                  </span>
                  <span className="qualification__calendar">
                    <AiOutlineCalendar />
                    2017 - 2018
                  </span>
                </div>
                <div className="">
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
                <div className=""></div>
              </div>
              {/*  */}
            </div>
            {/* 2 */}
            <div
              className={`qualification__content${
                activeKey === 2 ? " qualification__active" : ""
              }`}
              data-content
            >
              {/*  */}
              <div className="qualification__data">
                <div className="" data-aos="fade-right">
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">
                    Alchemy Software Limited
                  </span>
                  <span className="qualification__calendar">
                    <AiOutlineCalendar />
                    2020 - Continuing
                  </span>
                </div>
                <div className="">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div className=""></div>
              </div>
              {/*  */}
              {/*  */}
              {/* <div className="qualification__data">
                 <div className="">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div className="">
                  <h3 className="qualification__title">
                    Sr. Software Engineer
                  </h3>
                  <span className="qualification__subtitle">
                    My Social Pulse
                  </span>
                  <span className="qualification__calendar">
                    <AiOutlineCalendar />
                    2022 - Continuing
                  </span>
                </div>
              </div> */}
              {/*  */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Qualification;
