import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency, getGoalVisual } from "../utils/goals";

const GoalDashboardCard = ({ goal }) => {
  if (!goal) {
    return (
      <div className="flex w-full flex-col justify-center rounded-lg border border-gray-300 bg-white p-6 text-center">
        <h3 className="text-sm font-semibold text-gray-800">No goals yet</h3>
        <p className="mt-2 text-sm text-gray-500">
          Create your first savings goal to start tracking progress.
        </p>
        <Link to="/creategoal" className="mt-4">
          <button className="w-full rounded-lg bg-[#F54900] py-3 text-sm text-white">
            Create Goal
          </button>
        </Link>
      </div>
    );
  }

  const visual = getGoalVisual(goal.iconKey);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-300 bg-white">
      <div className="relative h-40 sm:h-48">
        <img src={visual.image} alt={goal.title} className="h-full w-full object-cover" />

        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-sm font-semibold">{goal.title}</h3>
          <p className="text-xs opacity-80">Target: {goal.deadlineLabel}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 md:p-5">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-green-500 text-sm md:h-28 md:w-28 md:text-base">
            {goal.progress}%
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs sm:flex-row sm:justify-between md:text-sm">
          <div>
            <p className="text-gray-400">Current Balance</p>
            <p className="text-[#F54900]">{formatCurrency(goal.currentBalance)}</p>
          </div>

          <div>
            <p className="text-gray-400">Target Amount</p>
            <p>{formatCurrency(goal.targetAmount)}</p>
          </div>
        </div>

        <Link to={`/goaldetails?goal=${goal.id}`} className="mt-auto">
          <button className="w-full rounded-lg bg-[#F54900] py-3 text-sm text-white">
            View Goal Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GoalDashboardCard;
