import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StepProgress from "../components/StepProgress";
import GoalAmountCard from "../components/GoalAmountCard";


const CreateGoal = () => {
  return (
    <DashboardLayout>

      <h1 className="text-lg font-semibold mb-6">
        Create New Goal
      </h1>

      <StepProgress />

      <GoalAmountCard />

      {/* Summary */}
      <div className="mt-6 rounded-xl p-4 w-full bg-white text-sm">
        <p className="text-gray-400 mb-2">Summary</p>

        <div className="flex justify-between">
          <span>Goal Name:</span>
          <span>Dream Vacation</span>
        </div>

        <div className="flex justify-between">
          <span>Target Amount:</span>
          <span>$2,000</span>
        </div>
      </div>

    </DashboardLayout>
  );
};

export default CreateGoal;