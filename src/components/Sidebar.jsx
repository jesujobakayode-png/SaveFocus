import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiSettings, FiTarget } from "react-icons/fi";
import image from "../assets/image.png";

const Sidebar = () => {
  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <img src={image} alt="logo" className="w-6 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-semibold">SaveFocus</p>
              <p className="truncate text-xs text-gray-400">One-Goal Saving</p>
            </div>
          </div>

          <Link to="/creategoal" className="rounded-lg bg-[#F54900] px-3 py-2 text-sm text-white">
            New Goal
          </Link>
        </div>
      </div>

      <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
          <Link to="/overview" className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-500">
            <FiHome /> Overview
          </Link>

          <Link to="/goals" className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-500">
            <FiTarget /> Goals
          </Link>

          <Link className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-500">
            <FiSettings /> Settings
          </Link>
        </div>
      </nav>

      <div className="hidden min-h-screen w-52 flex-col justify-between bg-white md:flex">
        <div>
          <div className="flex items-center gap-2 p-4">
            <img src={image} alt="logo" className="w-6" />
            <div>
              <p className="text-sm font-semibold">SaveFocus</p>
              <p className="text-xs text-gray-400">One-Goal Saving</p>
            </div>
          </div>

          <nav className="mt-6 flex flex-col gap-4 px-4 text-sm text-gray-600">
            <Link to="/overview" className="flex items-center gap-2 hover:text-orange-500">
              <FiHome /> Overview
            </Link>

            <Link to="/goals" className="flex items-center gap-2 hover:text-orange-500">
              <FiTarget /> Goals
            </Link>

            <Link className="flex items-center gap-2 hover:text-orange-500">
              <FiSettings /> Settings
            </Link>
          </nav>
        </div>

        <div className="space-y-4 p-4">
          <Link to="/creategoal" className="block">
            <button className="w-full rounded-lg bg-[#F54900] py-2 text-sm text-white">
              + New Goal
            </button>
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              IM
            </div>

            <div>
              <p className="text-xs font-medium">Isaac Martins</p>
              <p className="text-[10px] text-gray-400">isaac@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
