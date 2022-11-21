import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import Banner from "./Banner";
import InputBox from "./InputBox";
import Professionally from "./Professionally";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="">
      <Banner />
      <Services date={date} setDate={setDate} />
      <Professionally />
      <Testimonials />
      <InputBox />
      <Footer />
    </div>
  );
};

export default Home;
