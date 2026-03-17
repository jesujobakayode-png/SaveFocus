import React from "react";
import Goals from "../assets/Goals.svg";

const GoalHeaderCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">

      <div className="relative">
        <img src={Goals} alt="goal" className="w-full h-40 object-cover" />

        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-semibold">Dream Vacation</h2>
          <p className="text-xs opacity-80">
            Target: Dec 2026 • Weekly Plan
          </p>
        </div>
      </div>

    </div>
  );
};

export default GoalHeaderCard;