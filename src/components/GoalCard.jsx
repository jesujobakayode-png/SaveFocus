import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency, getGoalVisual } from "../utils/goals";

const GoalCard = ({ goal }) => {
  const visual = getGoalVisual(goal.iconKey);

  return (
    <Link to={`/goaldetails?goal=${goal.id}`} className="block h-full">
      <div className="flex h-full min-h-70 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
        <div className="relative h-40 sm:h-32 md:h-40">
          <img
            src={visual.image}
            alt={goal.title}
            className="h-full w-full object-cover"
          />

          {goal.status === "Completed" && (
            <span className="absolute right-2 top-2 rounded bg-green-500 px-2 py-1 text-xs text-white">
              Completed
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <h3 className="text-sm font-medium">{goal.title}</h3>
            <p className="text-xs text-gray-400">
              Target: {formatCurrency(goal.targetAmount)}
            </p>
          </div>

          <div>
            <div className="h-1 rounded bg-gray-200">
              <div
                className="h-1 rounded bg-black"
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            <p className="mt-1 text-right text-xs">{goal.progress}%</p>
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 text-xs">
            <div>
              <p className="text-gray-400">Saved</p>
              <p className="text-[#F54900]">{formatCurrency(goal.currentBalance)}</p>
            </div>

            <div className="text-right">
              <p className="text-gray-400">Deadline</p>
              <p>{goal.deadlineLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GoalCard;
