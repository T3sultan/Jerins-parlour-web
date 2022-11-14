import React from "react";
import professionally from "../../../assets/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
import "./Home.css";

const Professionally = () => {
  return (
    <div className="hero min-h-fit banner px-12 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" lg:ml-20 lg:mr-20 ">
          <h1 className="text-3xl font-bold  text-gray-800">
            Let us handle your
          </h1>
          <br />
          <h1 className="text-3xl -mt-3 font-bold  text-gray-800">
            screen <span className="text-red-400">Professionally</span>.
          </h1>
          <br />

          <p className="py-2 text-sm text-gray-500 indent-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-9 mt-4">
            <div>
              <p className="text-4xl font-bold  text-red-400">500+</p>
              <h5 className="mt-3 text-black font-mono">Happy Customer</h5>
            </div>
            <div>
              <p className="text-4xl font-bold  text-red-400">16+</p>
              <h5 className="mt-3 text-black font-mono">Total Service</h5>
            </div>
          </div>
        </div>
        <img src={professionally} className="max-w-sm  rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Professionally;
