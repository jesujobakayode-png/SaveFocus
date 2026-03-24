// components/RecentActivity.jsx
import React from "react";
import { formatCurrency, formatShortDate } from "../utils/goals";

const RecentActivity = ({ items }) => {
  const data = items || [];

  return (
    <div className="w-full rounded-[11.32px] border border-gray-300 bg-white p-4 sm:p-[19.14px] lg:max-w-[241.57px]">

      <h3 className="text-sm font-medium mb-4">
        Recent Activity
      </h3>

      <div className="flex flex-col gap-3 text-sm">
        {data.length ? (
          data.map((item) => (
            <div key={item.id} className="flex items-start justify-between gap-3">
              <div>
                <span className="text-gray-500">Saved to {item.goalTitle}</span>
                <p className="text-xs text-gray-400">{formatShortDate(item.date)}</p>
              </div>

              <span className="text-green-500">+{formatCurrency(item.amount)}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-400">No recent activity yet.</p>
        )}
      </div>

    </div>
  );
};

export default RecentActivity;
