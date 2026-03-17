import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiTarget, FiSettings } from "react-icons/fi";
import image from "../assets/image.png";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col md:justify-between w-52 bg-white">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 p-4">
          <img src={image} alt="logo" className="w-6" />
          <div>
            <p className="font-semibold text-sm">SaveFocus</p>
            <p className="text-xs text-gray-400">One-Goal Saving</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-6 flex flex-col gap-4 px-4 text-gray-600 text-sm">

          <Link className="flex items-center gap-2 hover:text-orange-500">
            <FiHome /> Overview
          </Link>

          <Link className="flex items-center gap-2 hover:text-orange-500">
            <FiTarget /> Goals
          </Link>

          <Link className="flex items-center gap-2 hover:text-orange-500">
            <FiSettings /> Settings
          </Link>

        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-4">

        <button className="w-full bg-[#F54900] text-white py-2 rounded-lg text-sm">
          + New Goal
        </button>

        <div className="flex items-center gap-2 text-sm">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            IM
          </div>

          <div>
            <p className="text-xs font-medium">Isaac Martins</p>
            <p className="text-[10px] text-gray-400">isaac@email.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;