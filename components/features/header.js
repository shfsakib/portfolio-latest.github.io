import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { BsBriefcase, BsImage, BsMoon, BsSun } from "react-icons/bs";
import { AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [themeDark, setThemeDark] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    themeDark
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");

    return () => {};
  }, [themeDark]);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "true") {
        document.body.classList.add("dark-theme");
        setThemeDark(true);
      } else {
        document.body.classList.remove("dark-theme");
        setThemeDark(false);
      }
      // setThemeDark(Boolean(localStorage.getItem("theme")));
    } else {
      setThemeDark(true);
    }
    return () => {};
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
    return () => {};
  }, []);

  return (
    <Fragment>
      <header
        className={`header${
          scrollHeight > 80
            ? themeDark
              ? " scroll-header-dark"
              : " scroll-header"
            : ""
        }`}
        id="header"
      >
        <nav className="nav container">
          <Link className="nav__logo" href={"/"}>
            <img src="logo.svg" alt="logo" className="header-logo" />
          </Link>
          <div
            className={`nav__menu${showMenu ? " show-menu" : ""}`}
            id="nav-menu"
          >
            <span
              className="nav__close"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <MdOutlineClose />
            </span>
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link
                  className={`nav__link${
                    router.asPath === "/" ? " active-link" : ""
                  }`}
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
                  className={`nav__link${
                    router.asPath === "/#about" ? " active-link" : ""
                  }`}
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
                  className={`nav__link${
                    router.asPath === "/#skills" ? " active-link" : ""
                  }`}
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
                  className={`nav__link${
                    router.asPath === "/#services" ? " active-link" : ""
                  }`}
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
                  className={`nav__link${
                    router.asPath === "/#portfolio" ? " active-link" : ""
                  }`}
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
                  className={`nav__link${
                    router.asPath === "/#contact" ? " active-link" : ""
                  }`}
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
          </div>
          <div className="nav__btns tw-flex tw-align-center">
            {themeDark ? (
              <BsMoon
                className={"change-theme"}
                onClick={() => {
                  localStorage.setItem("theme", false);
                  setThemeDark(false);
                }}
              />
            ) : (
              <BsSun
                className={"change-theme"}
                onClick={() => {
                  localStorage.setItem("theme", true);
                  setThemeDark(true);
                }}
              />
            )}
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
