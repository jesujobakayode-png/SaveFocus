import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Button from "../components/button";
import AmountButton from "../components/AmountButton";
import { useGoals } from "../context/useGoals";


const CreateGoalStep2 = () => {
  const navigate = useNavigate();
  const { draft, setDraftField } = useGoals();
  const [errorMessage, setErrorMessage] = useState("");

  const presetAmounts = [100, 500, 1000, 2000, 5000, 10000];
  const amount = Number(draft.targetAmount) || 0;

  const handleAmountChange = (value) => {
    setDraftField("targetAmount", Number(value));
  };

  const handleContinue = () => {
    if (amount <= 0) {
      setErrorMessage("Choose a target amount greater than zero.");
      return;
    }

    setErrorMessage("");
    navigate("/creategoalstep3");
  };

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10">
        <h1 className="mb-6 text-xl font-semibold">Create New Goal</h1>

        <div className="mb-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-10">
          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-gray-200 text-center text-sm">
              1
            </span>
            <p className="mt-1 text-xs">Name Goal</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-[#F54900] text-center text-sm text-white">
              2
            </span>
            <p className="mt-1 text-xs text-[#F54900]">Target Amount</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-gray-200 text-center text-sm">
              3
            </span>
            <p className="mt-1 text-xs">Deadline</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-gray-200 text-center text-sm">
              4
            </span>
            <p className="mt-1 text-xs">Saving Plan</p>
          </div>
        </div>

        <div className="max-w-xl rounded-xl border border-gray-300 bg-white p-4 sm:p-6">
          <h2 className="mb-2 font-semibold text-gray-800">
            How much do you want to save?
          </h2>

          <p className="mb-4 text-sm text-gray-400">Set your target amount</p>

          <div className="mb-4 flex items-center rounded-lg bg-gray-200 p-3">
            <span className="mr-2 text-gray-400">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 bg-gray-100 text-gray-900 sm:grid-cols-3">
            {presetAmounts.map((val) => (
              <AmountButton
                key={val}
                value={val}
                selected={amount}
                onClick={handleAmountChange}
              />
            ))}
          </div>

          {errorMessage ? (
            <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
          ) : null}

          <div className="my-6 border-t border-gray-300"></div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => navigate("/creategoal")}
            >
              Back
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleContinue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGoalStep2;
