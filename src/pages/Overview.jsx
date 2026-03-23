// pages/Overview.jsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import OverviewHeader from "../components/OverviewHeader";
import StatCard from "../components/StatCard";
import GoalOverviewCard from "../components/GoalOverviewCard";
import RecentActivity from "../components/RecentActivity";

const Overview = () => {
  return (
    <DashboardLayout>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 md:gap-[25.88px]">

        <OverviewHeader />

        {/* TOP CARDS */}
        <div className="grid grid-cols-2 md:flex md:gap-[19.41px] gap-3">
          <StatCard title="Total Saved" value="$3,420.00" />
          <StatCard title="Active Goals" value="3" />
          <StatCard title="Completed Goals" value="7" />
          <StatCard title="This Month" value="$450.00" />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row gap-5">

          <GoalOverviewCard />

          <RecentActivity />

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Overview;