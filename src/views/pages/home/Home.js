import React from "react";
import Footer from "../../components/common/Footer";
import Banner from "./Banner";
import Professionally from "./Professionally";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Services />
      <Professionally />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
