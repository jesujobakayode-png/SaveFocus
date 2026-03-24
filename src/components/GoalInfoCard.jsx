import React from "react";
import {
  formatCurrency,
  formatShortDate,
  getContributionLabel,
  getGoalStatus,
} from "../utils/goals";

const GoalInfoCard = ({ goal }) => {
  const status = getGoalStatus(goal);

  return (
    <div className="rounded-xl bg-white p-4 text-sm shadow-sm">
      <h3 className="mb-3 font-medium">Goal Information</h3>

      <div className="space-y-2 text-gray-600">
        <p>Created On: {formatShortDate(goal.createdAt)}</p>
        <p>Saving Plan: {goal.savingPlan}</p>
        <p>
          {getContributionLabel(goal.savingPlan)}: {formatCurrency(goal.nextContribution)}
        </p>
        <p>
          Status: <span className="text-orange-500">{status}</span>
        </p>
      </div>
    </div>
  );
};

export default GoalInfoCard;
