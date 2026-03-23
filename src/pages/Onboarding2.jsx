import React from 'react'
import Target1 from "../assets/target1.png";
import image from "../assets/image.png";
import { Link } from "react-router-dom";    
import Goals from "../assets/goals.svg";

const Onboarding2 = () => {
 return (
    <div className="flex flex-col md:flex-row h-screen">
    
        {/* LEFT GRADIENT PANEL */}
    <div className="w-full md:w-[465.99px] h-screen relative overflow-hidden">

  {/* Background Image */}
  <img
    src={Goals}
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-[#F54900] to-[#CA3500] opacity-90"></div>

  {/* Content */}
  <div className="relative flex flex-col w-full h-full pl-4 pt-6">

    {/* Logo Row */}
    <div className="flex items-center gap-2">
      <img src={image} alt="logo" className="w-15 h-15 p-2" />

      <div className="flex flex-col">
        <span className="text-white text-2xl font-bold">SaveFocus</span>
        <span className="text-white">One Goal at a Time</span>
      </div>
    </div>

    {/* Bottom Indicators */}
    <div className="flex gap-2 p-2 absolute bottom-6 left-3">

      <span className="w-1 h-1 bg-gray-300 rounded"></span>
      <span className="w-8 h-1 bg-gray-300 rounded"></span>
      <span className="w-1 h-1 bg-gray-300 rounded"></span>

    </div>

  </div>

</div>

       
      {/* RIGHT CONTENT */}
      <div className="flex flex-1 bg-white items-center justify-center p-4 md:pl-12">

        <div className="w-full max-w-md md:w-[465.99px] md:max-w-[465.99px] px-4 md:px-10 flex flex-col gap-7.5">

          {/* ICON */}
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
            <img src={Target1} alt="SaveFocus Logo" className="w-6 h-6" />
          </div>

          {/* TITLE */}
          <h1 className="text-[35px] leading-tight font-bold text-slate-800">
            Set Clear Financial
            <br />
            Targets
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-500 leading-relaxed text-[13.5px]">
           Define your dreams and turn them into achievable goals.
            <br />
            Whether it's a vacation, new car, or emergency fund, set your
            <br />
            target amount and deadline with ease.
          </p>

          {/* BUTTON + SKIP */}
          <div className="flex items-center gap-6">

            <Link
             to="/onboarding3"
             className="bg-[#F54900] text-white px-10 py-3 rounded-xl flex items-center justify-center w-65">
              →
            </Link>

            <Link to="/signin" className="text-slate-600">
                Skip
            </Link>

          </div>

          {/* PROGRESS */}
          <div className="flex gap-2">

            <span className="w-1 h-1 bg-gray-300 rounded"></span>
            <span className="w-8 h-1 bg-[#F54900] rounded"></span>
            <span className="w-1 h-1 bg-gray-300 rounded"></span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Onboarding2;