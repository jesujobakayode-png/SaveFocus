import React from "react";

const MonthlyCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mt-4">

      <h3 className="text-sm font-medium mb-3">This Month</h3>

      <p className="text-xs text-gray-400 mb-2">Monthly Target</p>

      <div className="h-2 bg-gray-200 rounded">
        <div className="h-2 bg-black w-2/3 rounded"></div>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        $150 of $200 saved
      </p>

    </div>
  );
};

export default MonthlyCard;