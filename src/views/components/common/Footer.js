import React from "react";
import "../../pages/home/Home.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer p-10 footerContainer  text-base-content">
      <div>
        <Icon
          color="white"
          width="29px"
          icon="material-symbols:location-on-outline"
        />
        <p className="text-white">
          Jerins Parlour
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className=" text-white font-bold">Company</span>
        <a className="link link-hover text-white">About</a>
        <a className="link link-hover text-white">Project</a>
        <a className="link link-hover text-white">Our Team</a>
        <a className="link link-hover text-white">Terms Conditions</a>
        <a className="link link-hover text-white">Submit Listing</a>
      </div>
      <div>
        <span className=" text-white font-bold">Quick Links</span>
        <a className="link link-hover text-white">Quick Links</a>
        <a className="link link-hover text-white">Rentals</a>
        <a className="link link-hover text-white">Sales</a>
        <a className="link link-hover text-white">Contact</a>
        <a className="link link-hover text-white">Our blog</a>
      </div>
      <div>
        <span className=" text-white font-bold">About us</span>
        <p className="text-gray-300">
          {" "}
          The first known use of the word to denote a room was in medieval{" "}
          <br />
          Christian Europe, when it designated the two rooms in a monastery{" "}
          <br />
          where clergy, constrained by vow or regulation from speaking otherwise{" "}
          <br />
          in the cloister, were allowed to converse without disturbing their
          fellows.{" "}
        </p>
        <div className="flex gap-6">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              className="fill-current fb border rounded-2xl bg-white"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333
             1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className="fill-current yt  border rounded-2xl "
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
