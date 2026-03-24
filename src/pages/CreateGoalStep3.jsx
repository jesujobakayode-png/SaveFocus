import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Button from "../components/button";
import { useGoals } from "../context/useGoals";

const CreateGoalStep3 = () => {
  const navigate = useNavigate();
  const { draft, setDraftField } = useGoals();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const selectedDate = draft.deadline ? new Date(draft.deadline) : new Date();
    return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  });

  const selectedDate = draft.deadline ? new Date(draft.deadline) : null;
  const monthName = currentMonth.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const calendarDays = [
    ...Array.from({ length: firstDayOfMonth }, (_, index) => ({
      id: `blank-${index}`,
      empty: true,
    })),
    ...Array.from({ length: daysInMonth }, (_, index) => ({
      id: index + 1,
      day: index + 1,
    })),
  ];

  const selectDate = (day) => {
    const nextDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setDraftField("deadline", nextDate.toISOString());
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] md:flex">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10">
        <h2 className="mb-6 text-xl font-semibold">Create New Goal</h2>

        <div className="mb-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-10">
          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-gray-200 text-center text-sm">
              1
            </span>
            <p className="mt-1 text-xs text-gray-400">Name Goal</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-gray-200 text-center text-sm">
              2
            </span>
            <p className="mt-1 text-xs text-gray-400">Target Amount</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-[#F54900] text-center text-sm text-white">
              3
            </span>
            <p className="mt-1 text-xs text-[#F54900]">Deadline</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="h-6 w-6 rounded-full bg-gray-200 text-center text-sm">
              4
            </span>
            <p className="mt-1 text-xs text-gray-400">Saving Plan</p>
          </div>
        </div>

        <div className="max-w-xl rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
          <div>
            <h3 className="text-lg font-semibold">When do you want to reach it?</h3>
            <p className="text-sm text-gray-500">
              Setting a target date helps you stay on track and measure progress.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              className="text-gray-500"
              aria-label="Previous month"
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                    1
                  )
                )
              }
            >
              {"<"}
            </button>
            <h4 className="font-medium">{monthName}</h4>
            <button
              type="button"
              className="text-gray-500"
              aria-label="Next month"
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                    1
                  )
                )
              }
            >
              {">"}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 text-center text-xs text-gray-400">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <span key={`${day}-${index}`}>{day}</span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-7 gap-y-3 text-center text-sm">
            {calendarDays.map((item) => {
              const isSelected =
                !item.empty &&
                selectedDate &&
                item.day === selectedDate.getDate() &&
                currentMonth.getMonth() === selectedDate.getMonth() &&
                currentMonth.getFullYear() === selectedDate.getFullYear();

              return (
                <button
                  type="button"
                  key={item.id}
                  className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${
                    item.empty
                      ? "cursor-default text-transparent"
                      : isSelected
                        ? "bg-[#F54900] text-white"
                        : "text-gray-700"
                  }`}
                  onClick={() => item.day && selectDate(item.day)}
                  disabled={item.empty}
                >
                  {item.day || "."}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => navigate("/creategoalstep2")}
            >
              Back
            </Button>

            <Button
              className="w-full sm:w-auto"
              onClick={() => navigate("/creategoalstep4")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGoalStep3;
