import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Input from "../components/Input";
import IconSelector from "../components/IconSelector";
import { useGoals } from "../context/useGoals";

const CreateGoal = () => {
  const navigate = useNavigate();
  const { draft, setDraftField } = useGoals();
  const [errorMessage, setErrorMessage] = useState("");

  const handleContinue = () => {
    if (!draft.title.trim()) {
      setErrorMessage("Enter a goal name before continuing.");
      return;
    }

    setErrorMessage("");
    navigate("/creategoalstep2");
  };

  return (
    <div className="min-h-screen bg-gray-50 md:flex">

      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10">
        <h1 className="mb-6 text-xl font-semibold">Create New Goal</h1>

        <div className="mb-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-10">
          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-[#F54900] text-center text-sm text-white">
              1
            </span>
            <p className="mt-1 text-xs text-[#F54900]">Name Goal</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full text-center bg-gray-200 text-sm">
              2
            </span>
            <p className="mt-1 text-xs">Target Amount</p>
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

        {/* CARD */}
        <div className="max-w-xl rounded-xl border border-gray-200 bg-white p-4 sm:p-6">

          <h2 className="font-semibold text-gray-800">
            What are you saving <span className="text-[#F54900]">Towards?</span>
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            e.g "Dream Vacation"
          </p>

          <Input
            label="Goal Name"
            name="goalName"
            placeholder="House rent for next year..."
            value={draft.title}
            onChange={(event) => setDraftField("title", event.target.value)}
          />

          {/* ICON SELECTOR */}
          <IconSelector
            selected={draft.iconKey}
            onSelect={(iconKey) => setDraftField("iconKey", iconKey)}
          />

          {errorMessage ? (
            <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
          ) : null}

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => navigate("/dashboard")}
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

export default CreateGoal;
