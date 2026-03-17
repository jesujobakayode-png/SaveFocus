import React from "react";

const SavingsHistory = () => {
  const data = [1,2,3,4];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mt-6">

      <h3 className="text-sm font-medium mb-4">Savings History</h3>

      {data.map((item, i) => (
        <div key={i} className="flex justify-between py-2 text-sm border-b border-gray-200">

          <div>
            <p>Deposit</p>
            <span className="text-xs text-gray-400">Mar 10, 2026</span>
          </div>

          <span className="text-green-500">+$50</span>

        </div>
      ))}

    </div>
  );
};

export default SavingsHistory;