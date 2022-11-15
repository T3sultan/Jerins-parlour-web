import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../../pages/home/Home.css";
import fb from "../../../../assets/facebook.png";
import g from "../../../../assets/google_.png";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {};
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-2xl font-bold">Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="First Name"
                className=" mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("firstName", {
                  required: { value: true, message: "First Name is required" },
                })}
              />
              <label className="label">
                {errors.firstName?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.firstName.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Last Name"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("lastName", {
                  required: { value: true, message: "Last Name is required" },
                })}
              />
              <label className="label">
                {errors.lastName?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.lastName.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Username or Email"
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
                placeholder="Password"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("email", {
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
                placeholder="Confirm Password"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Confirm Password is required",
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
            {/* {errorMessage} */}
            <input
              className="btn  w-full max-w-xs yt1"
              type="submit"
              value="Create an account"
            />
          </form>
          <p className="text-sm flex justify-center items-center">
            Already account ?{" "}
            <Link className="text-primary ytText" to="/login">
              Login
            </Link>{" "}
          </p>
          <div className="divider">Or</div>
          <button
            // onClick={() => signInWithGoogle()}
            className=" btn border bg-white text-black rounded-3xl "
          >
            <img className="w-8 rounded-2xl -mr-4" src={fb} alt="" />
            <p className="text-center "> Continue with facebook</p>
          </button>
          <button
            // onClick={() => signInWithGoogle()}
            className="btn bg-white text-black rounded-3xl"
          >
            <img className="w-8 rounded-2xl -mr-4" src={g} alt="" />
            <p className="text-center "> Continue with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
