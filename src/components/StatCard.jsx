// components/StatCard.jsx
import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div
      style={{
        width: "179.63px",
        height: "86.14px",
        borderRadius: "11.32px",
        borderWidth: "0.81px",
        padding: "19.14px",
      }}
      className="bg-white flex justify-between items-center border-gray-300"
    >
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h2 className="font-semibold">{value}</h2>
      </div>

      <div>{icon}</div>
    </div>
  );
};

export default StatCard;