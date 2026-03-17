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

      {/* Top */}
      <button className="text-sm text-gray-500 mb-4 hover:text-gray-700" onClick={() => navigate('/creategoal')}>
        ← Back to Goals
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="md:col-span-2">

          <GoalHeaderCard />
          <ProgressCard />
          <SavingsHistory />

        </div>

        {/* RIGHT SIDE */}
        <div>

          <ActionsCard />
          <GoalInfoCard />
          <MonthlyCard />

        </div>

      </div>

    </DashboardLayout>
  );
};

export default GoalDetails;