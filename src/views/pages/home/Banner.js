import React from "react";
import Button from "../../components/common/Button";
import bannerImage from ".././../../assets/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import "./Home.css";

const Banner = () => {
  return (
    <div className="hero min-h-fit banner px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className=" lg:mr-20 ">
          <h1 className="text-5xl font-bold uppercase text-gray-800">
            Beauty Salon{" "}
          </h1>
          <br />
          <h1 className="text-5xl font-bold uppercase text-gray-800">
            For Every Women{" "}
          </h1>
          <br />

          <p className="py-2 text-sm text-gray-500 indent-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
            <br /> In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="py-3">
            <Button title={"Get an Appointment"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
