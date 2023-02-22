import Link from "next/link";
import React, { Fragment } from "react";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { BsBriefcase, BsImage } from "react-icons/bs";
import { AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Header = () => {
  return (
    <Fragment>
      <header className="header" id="header">
        <nav className="nav container">
          <Link className="nav__logo" href={"/"}>
            <img src="/logo.svg" alt="logo" className="header-logo" />
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link className="nav__link" href={"/"}>
                  <BiHomeAlt />
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href={"#about"}>
                  <AiOutlineUser />
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href={"#skills"}>
                  <AiOutlineFileText />
                  Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href={"#services"}>
                  <BsBriefcase />
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href={"#portfolio"}>
                  <BsImage />
                  Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href={"#contact"}>
                  <BiMessageDetail />
                  Contact me
                </Link>
              </li>
            </ul>
            <span className="nav__close">
              <MdOutlineClose />
            </span>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle">
              <RxDashboard />
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
