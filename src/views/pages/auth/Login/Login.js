import React from "react";
import login from "../../../../assets/parlour.png";
import g from "../../../../assets/google_.png";
import "../../home/Home.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid items-center h-full justify-items-center">
      <img className="w-1/12" src={login} alt="" />
      <h3 className="font-bold">Login With</h3>
      <div className="flex items-center h-10 mt-4 border cursor-pointer rounded-3xl w-72">
        <img className="w-6 ml-2 " src={g} alt="" />
        <div className="flex justify-center ">
          <h4 className="ml-10 text-sm ">Continue with Google</h4>
        </div>
      </div>
      <p className="text-sm mt-2">
        Don't have an account?
        <Link to={"/signup"}>
          <span className="ytText">Create an account</span>
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
