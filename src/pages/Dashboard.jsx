// pages/Dashboard.jsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import DashboardHeader from "../components/OverviewHeader";
import StatCard from "../components/StatCard";
import GoalDashboardCard from "../components/GoalOverviewCard";
import RecentActivity from "../components/RecentActivity";
import { useGoals } from "../context/useGoals";
import { formatCurrency } from "../utils/goals";

const Dashboard = () => {
  const { stats, featuredGoal, recentActivity } = useGoals();

  return (
    <DashboardLayout>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 md:gap-[25.88px]">

        <DashboardHeader />

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:gap-[19.41px]">
          <StatCard title="Total Saved" value={formatCurrency(stats.totalSaved)} />
          <StatCard title="Active Goals" value={stats.activeGoals} />
          <StatCard title="Completed Goals" value={stats.completedGoals} />
          <StatCard title="This Month" value={formatCurrency(stats.thisMonth)} />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row gap-5">

          <GoalDashboardCard goal={featuredGoal} />

          <RecentActivity items={recentActivity} />

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
