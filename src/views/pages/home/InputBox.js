import React from "react";
import Button from "../../components/common/Button";
import Professionally from "./Professionally";
import "./Home.css";

const InputBox = () => {
  return (
    <div className="px-10 banner">
      <section className="">
        <div className=" min-h-full ">
          <div className="hero-content justify-center items-center text-center ">
            <div className=" my-12">
              <h1 className="text-2xl text-gray-800 font-bold ">
                Let us handle your
              </h1>
              <h3 className="text-2xl text-gray-800 font-bold ">
                project, Professionally
              </h3>

              <div className="flex sm:gap-6 mt-12">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input w-full "
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input w-full  mt-4"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input w-full "
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input w-full  mt-4"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Your Message"
                className="input mt-4  input-lg w-full  h-28 "
              />

              <div className="mt-4">
                <Button title="Send Message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InputBox;
