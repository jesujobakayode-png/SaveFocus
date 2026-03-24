import React from "react";
import Lock from "../assets/lock.svg";
import image from "../assets/image.png";
import LockGoal from "../assets/lockgoal.svg";
import { Link } from "react-router-dom";

const Onboarding3 = () => {
  return (
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
      <div className="relative min-h-[240px] w-full overflow-hidden md:h-screen md:w-[465.99px]">
        <img
          src={LockGoal}
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#F54900] to-[#CA3500] opacity-90"></div>

        <div className="relative flex h-full w-full flex-col pl-4 pt-6">
          <div className="flex items-center gap-2">
            <img src={image} alt="logo" className="h-15 w-15 p-2" />

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">SaveFocus</span>
              <span className="text-white">One Goal at a Time</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-3 flex gap-2 p-2">
            <span className="h-1 w-1 rounded bg-gray-300"></span>
            <span className="h-1 w-1 rounded bg-gray-300"></span>
            <span className="h-1 w-8 rounded bg-gray-300"></span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-white p-4 md:pl-12">
        <div className="flex w-full max-w-md flex-col gap-6 px-4 py-8 md:w-[465.99px] md:max-w-[465.99px] md:gap-7.5 md:px-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
            <img src={Lock} alt="SaveFocus Logo" className="h-8 w-8" />
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-800 md:text-[40px]">
            Lock Your Focus, Unlock
            <br />
            Success
          </h1>

          <p className="leading-relaxed text-slate-500">
            Stay committed to your current goal by locking it in. This unique
            feature ensures you complete one goal before starting another,
            helping you build discipline and achieve real results.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/signin"
              className="flex w-full items-center justify-center rounded-xl bg-[#F54900] px-10 py-3 text-white sm:w-65"
            >
              Start Saving →
            </Link>
          </div>

          <div className="flex gap-2">
            <span className="h-1 w-1 rounded bg-gray-300"></span>
            <span className="h-1 w-1 rounded bg-gray-300"></span>
            <span className="h-1 w-8 rounded bg-[#F54900]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
