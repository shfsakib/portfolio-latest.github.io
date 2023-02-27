import About from "components/features/about";
import Header from "components/features/header";
import MainSection from "components/features/main-section";
import Portfolio from "components/features/portfolio";
import Qualification from "components/features/qualification";
import Services from "components/features/services";
import Skills from "components/features/skills";
import Testimonial from "components/features/testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakib Hossain</title>
        <meta
          name="description"
          content="I'm a designer & developer with a passion for web & windows application development. I enjoy develop web software that help people to fulfil their demand. Many clients have procured exceptional result while working with me. Delivering work within time and budget which meets client’s requirements is my moto."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <MainSection />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Testimonial />
    </>
  );
}
