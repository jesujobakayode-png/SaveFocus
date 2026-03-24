import React from "react";
import { getGoalVisual } from "../utils/goals";

const GoalHeaderCard = ({ goal }) => {
  const visual = getGoalVisual(goal.iconKey);

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="relative">
        <img src={visual.image} alt={goal.title} className="h-40 w-full object-cover sm:h-48" />

        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-semibold">{goal.title}</h2>
          <p className="text-xs opacity-80">
            Target: {goal.deadlineLabel} | {goal.savingPlan} plan
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalHeaderCard;
