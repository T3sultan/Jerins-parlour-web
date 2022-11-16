import React, { useEffect } from "react";
import login from "../../../../assets/parlour.png";
import g from "../../../../assets/google_.png";
import "../../home/Home.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../../components/common/Loading";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorMessage;

  if (guser) {
    console.log("user", guser);
  }

  if (guser) {
    console.log("user", guser);
    navigate(from, { replace: true });
  }

  if (gloading) {
    return <Loading />;
  }
  if (gerror) {
    errorMessage = <p className="text-red-500 text-sm">{gerror?.message}</p>;
  }

  return (
    <div className="grid items-center h-full justify-items-center">
      <img className="w-1/12" src={login} alt="" />
      <h3 className="font-bold">Login With</h3>
      <div
        onClick={() => signInWithGoogle()}
        className="flex items-center h-10 mt-4 border cursor-pointer rounded-3xl w-72"
      >
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
