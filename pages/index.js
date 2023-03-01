import About from "components/features/about";
import Contact from "components/features/contact";
import Footer from "components/features/footer";
import Header from "components/features/header";
import MainSection from "components/features/main-section";
import Portfolio from "components/features/portfolio";
import Qualification from "components/features/qualification";
import Services from "components/features/services";
import Skills from "components/features/skills";
import Testimonial from "components/features/testimonial";
import Head from "next/head";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";
import MessengerCustomerChat from "react-messenger-customer-chat";
import FiverrServices from "components/features/fiverr-services";

export default function Home() {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
    return () => {};
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 20,
      duration: 1200,
      once: true,
      delay: 100,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Sakib Hossain</title>
        <meta
          name="description"
          content="I'm a designer & developer with a passion for web & windows application development. I enjoy develop web software that help people to fulfil their demand. Many clients have procured exceptional result while working with me. Delivering work within time and budget which meets client’s requirements is my moto."
        />
        <link rel="apple-touch-icon" href="mypic.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://shfsakib.com/" />
        <meta property="og:title" content="Mohammad Sakib Hossain" />
        <meta
          property="og:description"
          content="I'm a designer & developer with a passion for web & windows application development. I enjoy develop web software that help people to fulfil their demand. Many clients have procured exceptional result while working with me. Delivering work within time and budget which meets client’s requirements is my moto."
        />
        <meta property="og:image" content="mypic.png" />
        <link rel="icon" href="logo.ico" />
      </Head>
      <Header />
      <MainSection />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <FiverrServices />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <Link
        href="/"
        className={`scrollup${scrollHeight > 560 ? " show-scroll" : ""}`}
      >
        <BsArrowUp className="scrollup__icon" />
      </Link>
      <div className="messenger__button">
        <MessengerCustomerChat
          pageId="109876558707057"
          appId="129178523189747"
        />
      </div>
    </>
  );
}
