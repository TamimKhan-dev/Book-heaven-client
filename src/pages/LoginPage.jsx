import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="min-h-[50vh] flex flex-col gap-5 justify-center items-center py-10 mx-5">
      <form className="bg-white rounded-lg pb-8 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <fieldset className="w-[250px] sm:w-[350px] p-4 flex flex-col items-center">
          <div className="pb-2">
            <div className="flex items-center jusitfy-between">
              <div className="w-20 sm:w-32 border border-gray-300"></div>
              <h3 className="text-2xl font-semibold px-5 whitespace-nowrap">
                Log In
              </h3>
              <div className="w-20 sm:w-32 border border-gray-300"></div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-3">
              Login your account. It's free and only takes a minute
            </p>
          </div>

          <div className="space-y-5">

            <div className="flex flex-col sm:min-w-[300px]">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col sm:min-w-[300px]">
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
            </div>
          </div>

          <div className="sm:min-w-[300px] flex flex-col items-center gap-2 mt-3">
            <button className="mt-4 btn w-full bg-blue-500 text-white hover:bg-blue-600">
              Log In
            </button>
            <span className="text-md font-bold text-gray-500 divider">OR</span>
            <button
              type="button"
              className="btn bg-white w-full text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </fieldset>
      </form>
      <p className="font-semibold">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-500 border-b-2 border-transparent hover:border-blue-500 font-bold duration-150 cursor-pointer"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
