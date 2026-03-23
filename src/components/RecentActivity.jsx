// components/RecentActivity.jsx
import React from "react";

const RecentActivity = () => {
  const data = [1,2,3,4];

  return (
    <div
      style={{
        width: "241.57px",
        height: "329.02px",
        borderRadius: "11.32px",
        borderWidth: "0.81px",
        padding: "19.14px",
      }}
      className="bg-white border border-gray-300"
    >

      <h3 className="text-sm font-medium mb-4">
        Recent Activity
      </h3>

      <div className="flex flex-col gap-3 text-sm">
        {data.map((_, i) => (
          <div key={i} className="flex justify-between">
            <span className="text-gray-500">
              Saved to Dream Vacation
            </span>

            <span className="text-green-500">
              +$50.00
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecentActivity;