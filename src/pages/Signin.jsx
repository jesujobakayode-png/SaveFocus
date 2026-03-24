import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import image from "../assets/image.png";

import { FiMail, FiLock, FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../context/useAuth";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const redirectPath = location.state?.from || "/dashboard";

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const result = signin(formData);

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-stretch w-full">
      {/* LEFT ORANGE PANEL */}

      <div
        className="flex items-center justify-center text-white min-h-screen w-full lg:w-230"
          style={{
          background:"linear-gradient(135deg, #FF6900 0%, #F54900 50%, #CA3500 100%)",
        }}
      >
        <div className="text-center space-y-4">
          <img src={image} alt="SaveFocus Logo" className="mx-auto w-14" />
          <h1 className="text-3xl font-bold">SaveFocus</h1>
          <p className="text-sm">One Goal at a Time</p>
        </div>
      </div>

      {/* RIGHT WHITE PANEL */}

      <div className="bg-white flex justify-center items-center w-full lg:w-129.25 min-h-screen p-4 lg:p-[51.71px]">

       <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-full max-w-sm lg:w-[361.99px] lg:max-w-[361.99px] gap-4 lg:gap-[25.86px]"
        >
          {/* Heading */}

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome back
            </h2>
            <p className="text-gray-500 text-sm">
              Sign in to continue to your account
            </p>
          </div>

          {/* Email */}

          <div>
            <label className="text-sm text-gray-600">Email Address</label>

            <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3">
              <FiMail className="text-gray-400" />

              <input
                name="email"
                type="email"
                placeholder="isaac@mail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="text-sm text-gray-600">Password</label>

            <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3">
              <FiLock className="text-gray-400" />

              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 bg-transparent outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="text-gray-400 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <FiEye />
              </button>
            </div>
          </div>

          {/* Remember */}

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-2">
              <input
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>

            <span className="text-[#F54900] cursor-pointer">
              Forgot password?
            </span>
          </div>

          {errorMessage ? (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {errorMessage}
            </p>
          ) : null}

          {/* Button */}

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white bg-[#F54900] text-center text-sm"
          >
            Sign In
          </button>

          {/* Divider */}

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <hr className="flex-1" />
            Or continue with
            <hr className="flex-1" />
          </div>

          {/* Social */}

          <div className="flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} />
              Google
            </button>

            <button
              type="button"
              className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2"
            >
              <FaFacebook size={20} className="text-blue-600" />
              Facebook
            </button>

          </div>

          {/* Signup */}

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#F54900]">
              Sign up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Signin;
