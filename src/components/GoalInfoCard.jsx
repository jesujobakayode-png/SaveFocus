import React from "react";

const GoalInfoCard = () => {
  return (
    <div className="rounded-xl bg-white p-4 text-sm shadow-sm">
      <h3 className="mb-3 font-medium">Goal Information</h3>

      <div className="space-y-2 text-gray-600">
        <p>Created On: Jan 15, 2026</p>
        <p>Saving Plan: Weekly</p>
        <p>Weekly Target: $50</p>
        <p>
          Status: <span className="text-orange-500">Active</span>
        </p>
      </div>
    </div>
  );
};

export default GoalInfoCard;
