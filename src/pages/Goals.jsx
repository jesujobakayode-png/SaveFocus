import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import GoalsHeader from "../components/GoalsHeader";
import GoalCard from "../components/GoalCard";
import { useGoals } from "../context/useGoals";

const Goals = () => {
  const { goals, stats } = useGoals();

  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:gap-6">
        <GoalsHeader />

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">
            All Goals ({goals.length}) | Completed ({stats.completedGoals})
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Goals;
