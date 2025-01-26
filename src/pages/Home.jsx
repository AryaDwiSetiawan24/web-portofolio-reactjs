import React from "react";
import LoaderHome from "../components/pageHome/loaderHome/LoaderHome";
import Navbar from "../components/pageHome/navbar/Navbar";
import Hero from "../components/pageHome/hero/Hero";
import About from "../components/pageHome/about/About";
import Work from "../components/pageHome/work/Work";
import Service from "../components/pageHome/service/Service";
import Footer from "../components/pageHome/footer/Footer";

const Home = () => {
  return (
    <div>
        <LoaderHome />
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Service />
        <Footer />
    </div>
  );
};

export default Home;
