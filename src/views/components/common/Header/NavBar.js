import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/parlour.png";
import CustomLink from "../../../../hooks/CustomLink";
import "./Navbar.css";

const NavBar = () => {
  const menuItems = (
    <>
      <li>
        <CustomLink to="/home">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/portfolio">Our Portfolio</CustomLink>
      </li>{" "}
      <li>
        <CustomLink to="/team">Our Team</CustomLink>
      </li>
      <li>
        <CustomLink to="/contact">Contact</CustomLink>
      </li>
      <li>
        <CustomLink to="/login">Login</CustomLink>
      </li>
      <li>
        <CustomLink to="/signup">Signup</CustomLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-100  px-12">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52 "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home">
          <img
            className=" w-2/6 hidden cursor-pointer sm:flex  "
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className=" hidden navbar-center lg:flex navbar-end">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
