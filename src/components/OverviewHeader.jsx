// components/OverviewHeader.jsx
import React from "react";

const OverviewHeader = () => {
  return (
    <div className="flex flex-col gap-2 mb-4"
      style={{ width: "776.76px" }}
    >
      <h1 className="text-xl font-semibold">
        Welcome back!
      </h1>

      <p className="text-sm text-gray-400">
        Here’s your savings overview
      </p>
    </div>
  );
};

export default OverviewHeader;