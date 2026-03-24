import React from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding1"); // change to your actual route
    }, 2500);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);


  return (
    <div className="w-full max-w-360 h-screen max-h-256 mx-auto animate-fadeIn flex items-center justify-center bg-linear-to-br from-[#FF6900] via-[#F54900] to-[#CA3500]">
      
      <div className="flex flex-col items-center justify-center w-20.75 h-[142.57px] gap-2">
        
        <img
          src={image}
          alt="Goal Logo"
          className="w-15 h-auto"
        />

        <p className="text-[#F9FAFB] text-sm font-bold">
          Goal
        </p>

      </div>
    </div>
  );
};

export default Splash;