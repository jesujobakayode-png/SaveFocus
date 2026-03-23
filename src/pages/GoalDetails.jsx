import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import GoalHeaderCard from "../components/GoalHeaderCard";
import ProgressCard from "../components/ProgressCard";
import SavingsHistory from "../components/SavingsHistory";
import ActionsCard from "../components/ActionsCard";
import GoalInfoCard from "../components/GoalInfoCard";
import MonthlyCard from "../components/MonthlyCard";

const GoalDetails = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <button className="mb-4 text-sm text-gray-500 hover:text-gray-700" onClick={() => navigate("/goals")}>
        &larr; Back to Goals
      </button>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <GoalHeaderCard />
          <ProgressCard />
          <SavingsHistory />
        </div>

        <div className="space-y-4">
          <ActionsCard />
          <GoalInfoCard />
          <MonthlyCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GoalDetails;
