import React from "react";

const GoalInfoCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mt-4 text-sm">

      <h3 className="font-medium mb-3">Goal Information</h3>

      <div className="space-y-2 text-gray-600">

        <p>Created On: Jan 15, 2026</p>
        <p>Saving Plan: Weekly</p>
        <p>Weekly Target: $50</p>
        <p>Status: <span className="text-orange-500">Active</span></p>

      </div>

    </div>
  );
};

export default GoalInfoCard;