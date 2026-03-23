import React from "react";
import Goals from "../assets/Goals.svg";

const GoalHeaderCard = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="relative">
        <img src={Goals} alt="goal" className="h-40 w-full object-cover sm:h-48" />

        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-semibold">Dream Vacation</h2>
          <p className="text-xs opacity-80">Target: Dec 2026 | Weekly Plan</p>
        </div>
      </div>
    </div>
  );
};

export default GoalHeaderCard;
