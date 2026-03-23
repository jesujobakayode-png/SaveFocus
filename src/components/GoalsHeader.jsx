import React from "react";
import { useNavigate } from "react-router-dom";

const GoalsHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-md">
        <h1 className="text-xl font-semibold">My Goals</h1>
        <p className="mt-1 text-sm text-gray-400">
          Track and manage your savings goals
        </p>
      </div>

      <button
        className="flex w-full items-center justify-center rounded-lg bg-[#F54900] px-4 py-3 text-sm text-white sm:w-auto"
        onClick={() => navigate("/creategoal")}
      >
        + Create New Goal
      </button>
    </div>
  );
};

export default GoalsHeader;
