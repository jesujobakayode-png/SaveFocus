import React from "react";
import Logo from "../assets/logo.svg";
import image from "../assets/image.png";
import { Link } from "react-router-dom";

const Onboarding1 = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">

      {/* LEFT GRADIENT PANEL */}
      <div className="flex w-full md:w-[465.99px] h-screen bg-linear-to-b from-[#F54900] to-[#CA3500] pl-4 pt-6">
        
        <img src={image} alt="image" className="w-15 h-15 p-2 flex" />

        <div className="flex flex-col">
          <span className="text-white text-2xl font-bold">SaveFocus</span>
          <span className="text-white">One Goal at a Time</span>
        </div>

        <div className="flex gap-2 p-2 absolute bottom-6 left-3">

          <span className="w-8 h-1 bg-gray-300 rounded"></span>
          <span className="w-1 h-1 bg-gray-300 rounded"></span>
          <span className="w-1 h-1 bg-gray-300 rounded"></span>

        </div>

      </div>

      {/* RIGHT CONTENT */}
     <div className="flex flex-1 bg-white items-center justify-center p-4 md:pl-12">

        <div className="w-full max-w-md md:w-[465.99px] md:max-w-[465.99px] px-4 md:px-10 flex flex-col gap-7.5">

          {/* ICON */}
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
            <img src={Logo} alt="SaveFocus Logo" className="w-6 h-6" />
          </div>

          {/* TITLE */}
          <h1 className="text-[35px] leading-tight font-bold text-slate-800">
            Save Smarter, One Goal
            <br />
            at a Time
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-500 leading-relaxed text-[13.5px]">
            Focus on what matters most. SaveFocus helps you achieve your
            <br />
            financial goals by concentrating on one target at a time,
            <br />
            eliminating distractions and maximizing your success.
          </p>

          {/* BUTTON + SKIP */}
          <div className="flex items-center gap-6">

            <Link
              to="/onboarding2"
              className="bg-[#F54900] text-white px-10 py-3 rounded-xl flex items-center justify-center w-65"
            >
              →
            </Link>

            <Link to="/signin" className="text-slate-600">
              Skip
            </Link>

          </div>

          {/* PROGRESS */}
          <div className="flex gap-2">

            <span className="w-8 h-1 bg-[#F54900] rounded"></span>
            <span className="w-1 h-1 bg-gray-300 rounded"></span>
            <span className="w-1 h-1 bg-gray-300 rounded"></span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Onboarding1;