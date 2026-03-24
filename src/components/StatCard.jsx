// components/StatCard.jsx
import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="flex min-h-[86.14px] w-full items-center justify-between rounded-[11.32px] border border-gray-300 bg-white p-4 sm:p-[19.14px] md:w-[179.63px]">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h2 className="font-semibold">{value}</h2>
      </div>

      <div>{icon}</div>
    </div>
  );
};

export default StatCard;
