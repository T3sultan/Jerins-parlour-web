import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../../../pages/home/Home.css";
import fb from "../../../../assets/facebook.png";
import g from "../../../../assets/google_.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../../components/common/Loading";

const Signup = () => {
  const [updateProfile, updating, uerror] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update data");
    // navigate("/home");
  };
  let errorMessage;
  if (loading || gloading || updating) {
    return <Loading />;
  }
  if (gerror || error || uerror) {
    errorMessage = (
      <p className="text-red-500 text-sm">
        {error?.message || gerror?.message || uerror?.message}
      </p>
    );
  }
  if (user || guser) {
    navigate("/home");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-2xl font-bold">Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Your Name"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Your Password"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: " Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {errorMessage}
            <input
              className="btn w-full max-w-xs text-black bg-white"
              type="submit"
              value="Signup"
            />
          </form>
          <p className="text-sm flex justify-center items-center">
            Already account ?{" "}
            <Link className="text-primary ytText" to="/login">
              Login
            </Link>{" "}
          </p>
          <div className="divider">Or</div>
          <div className="flex items-center h-10  border cursor-pointer rounded-3xl  w-full max-w-xs">
            <img className="w-6 ml-2  rounded-xl " src={fb} alt="" />
            <div className="flex justify-center ">
              <h4 className="ml-10 text-sm ">Continue with Facebook</h4>
            </div>
          </div>
          <div
            onClick={() => signInWithGoogle()}
            className="flex items-center h-10 border cursor-pointer rounded-3xl  w-full max-w-xs"
          >
            <img className="w-6 ml-2 " src={g} alt="" />
            <div className="flex justify-center ">
              <h4 className="ml-10 text-sm ">Continue with Google</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
