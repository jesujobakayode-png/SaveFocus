import React from "react";
import { formatCurrency, formatShortDate } from "../utils/goals";

const SavingsHistory = ({ history }) => {
  const data = history || [];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mt-6">

      <h3 className="text-sm font-medium mb-4">Savings History</h3>

      {data.length ? data.map((item) => (
        <div key={item.id} className="flex justify-between py-2 text-sm border-b border-gray-200">

          <div>
            <p>Deposit</p>
            <span className="text-xs text-gray-400">{formatShortDate(item.date)}</span>
          </div>

          <span className="text-green-500">+{formatCurrency(item.amount)}</span>

        </div>
      )) : <p className="text-sm text-gray-400">No savings activity yet.</p>}

    </div>
  );
};

export default SavingsHistory;
