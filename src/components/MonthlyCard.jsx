import React from "react";
import { formatCurrency, getMonthlyTarget } from "../utils/goals";

const MonthlyCard = ({ goal }) => {
  const monthlyTarget = Math.max(1, getMonthlyTarget(goal));
  const progress = Math.min(100, Math.round((goal.monthTotal / monthlyTarget) * 100));

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-medium">This Month</h3>

      <p className="mb-2 text-xs text-gray-400">Monthly Target</p>

      <div className="h-2 rounded bg-gray-200">
        <div className="h-2 rounded bg-black" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        {formatCurrency(goal.monthTotal)} of {formatCurrency(monthlyTarget)} saved
      </p>
    </div>
  );
};

export default MonthlyCard;
