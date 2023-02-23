import Link from "next/link";
import React, { Fragment, useState } from "react";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { BsBriefcase, BsImage } from "react-icons/bs";
import { AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      <header className="header" id="header">
        <nav className="nav container">
          <Link className="nav__logo" href={"/"}>
            <img src="/logo.svg" alt="logo" className="header-logo" />
          </Link>
          <div
            className={`nav__menu${showMenu ? " show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={"/"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <BiHomeAlt className={"nav__icon"} />
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={"#about"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <AiOutlineUser className={"nav__icon"} />
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={"#skills"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <AiOutlineFileText className={"nav__icon"} />
                  Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={"#services"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <BsBriefcase className={"nav__icon"} />
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={"#portfolio"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <BsImage className={"nav__icon"} />
                  Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={"#contact"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <BiMessageDetail className={"nav__icon"} />
                  Contact me
                </Link>
              </li>
            </ul>
            <span
              className="nav__close"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <MdOutlineClose />
            </span>
          </div>
          <div className="nav__btns">
            <div
              className="nav__toggle"
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <RxDashboard />
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
