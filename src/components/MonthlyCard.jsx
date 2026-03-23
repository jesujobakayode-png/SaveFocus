import React from "react";

const MonthlyCard = () => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-medium">This Month</h3>

      <p className="mb-2 text-xs text-gray-400">Monthly Target</p>

      <div className="h-2 rounded bg-gray-200">
        <div className="h-2 w-2/3 rounded bg-black"></div>
      </div>

      <p className="mt-2 text-xs text-gray-400">$150 of $200 saved</p>
    </div>
  );
};

export default MonthlyCard;
