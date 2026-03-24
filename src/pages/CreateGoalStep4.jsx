import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Button from "../components/button";
import { useGoals } from "../context/useGoals";
import { formatCurrency, getRecurringContribution } from "../utils/goals";

const CreateGoalStep4 = () => {
  const navigate = useNavigate();
  const { draft, setDraftField, createGoal } = useGoals();
  const [selected, setSelected] = useState(draft.savingPlan || "weekly");

  const options = [
    {
      id: "daily",
      title: "Save Daily",
      desc: "Small amounts, high consistency.",
      tag: "PER DAY",
    },
    {
      id: "weekly",
      title: "Save Weekly",
      desc: "Easier to manage with consistent paychecks.",
      tag: "PER WEEK",
    },
    {
      id: "monthly",
      title: "Save Monthly",
      desc: "Lump sum transfers for automation.",
      tag: "PER MONTH",
    },
  ];

  const previewGoal = {
    targetAmount: Number(draft.targetAmount),
    currentBalance: 0,
    deadline: draft.deadline,
    savingPlan: selected,
  };

  const recurringAmount = getRecurringContribution(previewGoal);

  const handleSelect = (savingPlan) => {
    setSelected(savingPlan);
    setDraftField("savingPlan", savingPlan);
  };

  const handleSubmit = () => {
    setDraftField("savingPlan", selected);
    const goalId = createGoal();
    navigate(`/goaldetails?goal=${goalId}`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] md:flex">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10">
        <h2 className="mb-6 text-xl font-semibold">Create New Goal</h2>

        <div className="mb-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-10">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-700">
                {step}
              </div>
              <span className="mt-1 text-xs text-gray-400">
                {step === 1 && "Name Goal"}
                {step === 2 && "Target Amount"}
                {step === 3 && "Deadline"}
              </span>
            </div>
          ))}

          <div className="flex flex-col items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F54900] text-sm text-white">
              4
            </div>
            <span className="mt-1 text-xs text-[#F54900]">Saving Plan</span>
          </div>
        </div>

        <div className="flex max-w-xl flex-col gap-4 sm:gap-6">
          {options.map((option) => {
            const isActive = selected === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={`flex items-center justify-between rounded-xl border p-5 text-left transition-all duration-200 ${
                  isActive
                    ? "border-[#F54900] bg-orange-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-orange-400 hover:bg-orange-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm ${
                      isActive
                        ? "bg-[#F54900] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {option.id === "daily" && "D"}
                    {option.id === "weekly" && "W"}
                    {option.id === "monthly" && "M"}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">{option.title}</h3>
                    <p className="text-xs text-gray-500">{option.desc}</p>
                  </div>
                </div>

                <span className="text-[10px] font-medium text-gray-400">
                  {option.tag}
                </span>
              </button>
            );
          })}

          <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-600">
            <p className="font-medium text-gray-800">Plan Summary</p>
            <p className="mt-2">
              Save {formatCurrency(recurringAmount)}{" "}
              {selected === "daily"
                ? "per day"
                : selected === "weekly"
                  ? "per week"
                  : "per month"}{" "}
              to hit your {formatCurrency(draft.targetAmount)} goal.
            </p>
          </div>

          <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => navigate("/creategoalstep3")}
            >
              Back
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleSubmit}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGoalStep4;
