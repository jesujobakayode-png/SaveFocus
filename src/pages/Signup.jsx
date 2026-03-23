import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";

import { FiUser, FiMail, FiLock, FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-stretch w-full">
      {/* LEFT PANEL */}

      <div
        className="flex items-center justify-center text-white min-h-screen w-full lg:w-230"
        style={{
          background:
            "linear-gradient(135deg, #FF6900 0%, #F54900 50%, #CA3500 100%)",
        }}
      >
        <div className="text-center space-y-4 max-w-sm">
          <img src={image} alt="SaveFocus Logo" className="mx-auto w-14" />

          <h1 className="text-3xl font-bold">SaveFocus</h1>

          <p className="text-sm">One Goal at a Time</p>

          <p className="text-sm mt-4">
            Join thousands of users who are achieving their financial goals
            with our proven one-goal-at-a-time approach.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}

     <div className="bg-white flex justify-center items-center w-full lg:w-129.25 min-h-screen p-4 lg:p-[51.71px]">
      <div className="flex flex-col justify-center w-full max-w-sm lg:w-[361.99px] lg:max-w-[361.99px] gap-4 lg:gap-[25.86px]">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 text-sm">
              Sign up to start your savings journey
            </p>
          </div>

          {/* Full Name */}

          <div>
            <label className="text-sm text-gray-600">Full Name</label>

            <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3">
              <FiUser className="text-gray-400" />

              <input
                type="text"
                placeholder="Isaac Martins"
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="text-sm text-gray-600">Email Address</label>

            <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3">
              <FiMail className="text-gray-400" />

              <input
                type="email"
                placeholder="isaac@mail.com"
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="text-sm text-gray-600">Password</label>

            <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3">
              <FiLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-3 bg-transparent outline-none"
              />

              <FiEye className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>

            <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3">
              <FiLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full p-3 bg-transparent outline-none"
              />

              <FiEye className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Terms */}

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            I agree to the
            <span className="text-[#F54900]">Terms of Service</span>
            and
            <span className="text-[#F54900]">Privacy Policy</span>
          </label>

          {/* Button */}

          <button className="w-full py-3 rounded-lg text-white bg-[#F54900]">
            Create Account
          </button>

          {/* Divider */}

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <hr className="flex-1" />
            Or sign up with
            <hr className="flex-1" />
          </div>

          {/* Social */}

          <div className="flex gap-4">

            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2">
              <FcGoogle size={20} />
              Google
            </button>

            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2">
              <FaFacebook size={20} className="text-blue-600" />
              Facebook
            </button>

          </div>

          {/* Login */}

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#F54900]">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;