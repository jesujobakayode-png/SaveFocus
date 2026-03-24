import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import GoalHeaderCard from "../components/GoalHeaderCard";
import ProgressCard from "../components/ProgressCard";
import SavingsHistory from "../components/SavingsHistory";
import ActionsCard from "../components/ActionsCard";
import GoalInfoCard from "../components/GoalInfoCard";
import MonthlyCard from "../components/MonthlyCard";
import { useGoals } from "../context/useGoals";

const GoalDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { goals, addFunds, toggleGoalLock, updateGoalDeadline } = useGoals();
  const [message, setMessage] = useState("");
  const goalId = searchParams.get("goal");
  const goal = useMemo(
    () => goals.find((item) => item.id === goalId) || goals[0] || null,
    [goalId, goals]
  );

  if (!goal) {
    return (
      <DashboardLayout>
        <button
          className="mb-4 text-sm text-gray-500 hover:text-gray-700"
          onClick={() => navigate("/goals")}
        >
          &larr; Back to Goals
        </button>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">No goal selected yet.</p>
        </div>
      </DashboardLayout>
    );
  }

  const handleAddFunds = () => {
    const amount = window.prompt("How much would you like to add?");

    if (amount === null) {
      return;
    }

    const result = addFunds(goal.id, amount);
    setMessage(result.success ? "Funds added successfully." : result.message);
  };

  const handleChangeDeadline = () => {
    const nextDate = window.prompt(
      "Enter a new deadline in YYYY-MM-DD format.",
      goal.deadline.slice(0, 10)
    );

    if (nextDate === null) {
      return;
    }

    const result = updateGoalDeadline(goal.id, nextDate);
    setMessage(result.success ? "Deadline updated successfully." : result.message);
  };

  const handleToggleLock = () => {
    const updatedGoal = toggleGoalLock(goal.id);
    setMessage(updatedGoal?.locked ? "Goal locked." : "Goal unlocked.");
  };

  return (
    <DashboardLayout>
      <button className="mb-4 text-sm text-gray-500 hover:text-gray-700" onClick={() => navigate("/goals")}>
        &larr; Back to Goals
      </button>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <GoalHeaderCard goal={goal} />
          <ProgressCard goal={goal} />
          <SavingsHistory history={goal.history} />
        </div>

        <div className="space-y-4">
          <ActionsCard
            goal={goal}
            onAddFunds={handleAddFunds}
            onChangeDeadline={handleChangeDeadline}
            onToggleLock={handleToggleLock}
            message={message}
          />
          <GoalInfoCard goal={goal} />
          <MonthlyCard goal={goal} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GoalDetails;
