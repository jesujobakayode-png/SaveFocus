import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StepProgress from "../components/StepProgress";
import GoalAmountCard from "../components/GoalAmountCard";

const CreateGoal = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-6 text-lg font-semibold">Create New Goal</h1>

      <StepProgress />

      <GoalAmountCard />

      <div className="mt-6 w-full rounded-xl bg-white p-4 text-sm sm:p-5">
        <p className="mb-2 text-gray-400">Summary</p>

        <div className="flex flex-col gap-1 border-b border-gray-100 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-2">
          <span>Goal Name:</span>
          <span>Dream Vacation</span>
        </div>

        <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-2">
          <span>Target Amount:</span>
          <span>$2,000</span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateGoal;
