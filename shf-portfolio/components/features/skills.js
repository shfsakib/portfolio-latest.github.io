import React, { Fragment, useState } from "react";
import { AiOutlineCloud } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import {
  BsArrowDownShort,
  BsChevronBarDown,
  BsChevronDown,
} from "react-icons/bs";
import { GoServer } from "react-icons/go";

const Skills = () => {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <Fragment>
      <section className="skills section" id="skills">
        <h2 className="section__title" data-aos="fade-down">
          Skills
        </h2>
        <span className="section__subtitle" data-aos="fade-up">
          My Experience
        </span>
        <div className="skills__container container grid">
          {/* <div className=""> */}
          {/* front */}
          <div
            className={`skill__content ${
              activeKey === 1 ? "skills__open" : "skills__close"
            }`}
          >
            <div
              className="skills__header"
              onClick={() => {
                setActiveKey(1);
              }}
            >
              <BiCodeCurly className="skills__icons" />
              <div className="" data-aos="zoom-out">
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">More than 3 years</span>
              </div>
              <BsChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">95%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">95%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">SASS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sass"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Tailwind CSS</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__tailwind"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__number">94%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__boostrap"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">jQuery</h3>
                  <span className="skills__number">95%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__jquery"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Vanilla JS</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__vanilla"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Advanced JavaScript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__adjs"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">ReactJS</h3>
                  <span className="skills__number">92%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">NextJS</h3>
                  <span className="skills__number">92%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__next"></span>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* backend */}
          <div
            className={`skill__content ${
              activeKey === 2 ? "skills__open" : "skills__close"
            }`}
          >
            <div
              className="skills__header"
              onClick={() => {
                setActiveKey(2);
              }}
            >
              <GoServer className="skills__icons" />
              <div className="" data-aos="zoom-out">
                <h1 className="skills__title">Backend Developer</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>
              <BsChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">ASP.Net C#</h3>
                  <span className="skills__number">87%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__asp"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">NodeJS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">SQL</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sql"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mongo"></span>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* cloud */}
          <div
            className={`skill__content ${
              activeKey === 3 ? "skills__open" : "skills__close"
            }`}
          >
            <div
              className="skills__header"
              onClick={() => {
                setActiveKey(3);
              }}
            >
              <AiOutlineCloud className="skills__icons" />
              <div className="" data-aos="zoom-out">
                <h1 className="skills__title">Cloud Compute</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>
              <BsChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">AWS</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__aws"></span>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* </div> */}
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
