import React from "react";
import "../../pages/home/Home.css";

const Footer = () => {
  return (
    <footer className="footer p-10 footerContainer  text-base-content">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current text-white"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
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
