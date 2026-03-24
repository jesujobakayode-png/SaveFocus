import React from "react";
import Logo from "../assets/Logo.svg";
import image from "../assets/image.png";
import { Link } from "react-router-dom";

const Onboarding1 = () => {
  return (
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
      <div className="relative flex min-h-[240px] w-full bg-linear-to-b from-[#F54900] to-[#CA3500] pl-4 pt-6 md:h-screen md:w-[465.99px]">
        <img src={image} alt="image" className="flex h-15 w-15 p-2" />

        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white">SaveFocus</span>
          <span className="text-white">One Goal at a Time</span>
        </div>

        <div className="absolute bottom-6 left-3 flex gap-2 p-2">
          <span className="h-1 w-8 rounded bg-gray-300"></span>
          <span className="h-1 w-1 rounded bg-gray-300"></span>
          <span className="h-1 w-1 rounded bg-gray-300"></span>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-white p-4 md:pl-12">
        <div className="flex w-full max-w-md flex-col gap-6 px-4 py-8 md:w-[465.99px] md:max-w-[465.99px] md:gap-7.5 md:px-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
            <img src={Logo} alt="SaveFocus Logo" className="h-6 w-6" />
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-800 md:text-[35px]">
            Save Smarter, One Goal
            <br />
            at a Time
          </h1>

          <p className="text-[13.5px] leading-relaxed text-slate-500">
            Focus on what matters most. SaveFocus helps you achieve your
            financial goals by concentrating on one target at a time,
            eliminating distractions and maximizing your success.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/onboarding2"
              className="flex w-full items-center justify-center rounded-xl bg-[#F54900] px-10 py-3 text-white sm:w-65"
            >
              →
            </Link>

            <Link to="/signin" className="text-slate-600">
              Skip
            </Link>
          </div>

          <div className="flex gap-2">
            <span className="h-1 w-8 rounded bg-[#F54900]"></span>
            <span className="h-1 w-1 rounded bg-gray-300"></span>
            <span className="h-1 w-1 rounded bg-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding1;
