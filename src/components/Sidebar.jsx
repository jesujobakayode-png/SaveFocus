import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiCheckCircle, FiLogOut, FiSettings } from "react-icons/fi";
import image from "../assets/image.png";
import { useAuth } from "../context/useAuth";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, signout } = useAuth();

  const navItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Completed Goals", icon: <FiCheckCircle />, path: "/goals" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  const handleSignout = () => {
    signout();
    navigate("/signin");
  };

  return (
    <div
      className="w-full shrink-0 border-b bg-white md:sticky md:top-0 md:h-screen md:w-51.75 md:border-b-0 md:border-r"
      style={{
        borderRight: "0.5px solid #eee",
      }}
    >
      <div className="flex h-full flex-col">
        {/* TOP */}
        <div className="p-4 flex flex-col gap-6">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={image} alt="logo" className="w-8 h-8" />
            <span className="font-semibold text-gray-800">Goal</span>
          </Link>

          {/* NEW GOAL BUTTON */}
          <Link
            to="/creategoal"
            className="bg-[#F54900] text-white text-sm py-2 rounded-lg text-center"
          >
            + New Goal
          </Link>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  location.pathname === item.path
                    ? "bg-orange-50 text-[#F54900]"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM USER */}
        <div className="mt-4 border-t p-4 text-sm text-gray-500 md:mt-auto">
          <p className="font-medium text-gray-700">
            {currentUser?.fullName || "SaveFocus User"}
          </p>
          <p className="text-xs">{currentUser?.email || "No email available"}</p>

          <button
            type="button"
            onClick={handleSignout}
            className="mt-3 flex items-center gap-2 text-xs font-medium text-[#F54900]"
          >
            <FiLogOut />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
