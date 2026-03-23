import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import GoalsHeader from "../components/GoalsHeader";
import GoalCard from "../components/GoalCard";

import img1 from "../assets/LockGoal.svg";
import img2 from "../assets/Goals.svg";
import img3 from "../assets/LockGoal.svg";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "New Macbook Pro",
      target: 2500,
      saved: 820,
      progress: 33,
      deadline: "15 JUL 2026",
      image: img1,
    },
    {
      id: 2,
      title: "Cool Basketball",
      target: 1500,
      saved: 1200,
      progress: 80,
      deadline: "1 MAY 2026",
      image: img2,
    },
    {
      id: 3,
      title: "Modern Home",
      target: 5000,
      saved: 5000,
      progress: 100,
      completed: true,
      deadline: "Completed",
      image: img3,
    },
  ];

  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:gap-6">
        <GoalsHeader />

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">Completed Goals (4)</p>

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
