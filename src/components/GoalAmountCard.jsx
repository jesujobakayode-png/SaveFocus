import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AmountButton from "./AmountButton";

const GoalAmountCard = () => {
  const [selectedAmount, setSelectedAmount] = useState("2,000");
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-xl bg-white p-4 sm:p-6">
      <h2 className="mb-1 font-semibold">How much do you want to save?</h2>

      <p className="mb-4 text-xs text-gray-500">
        Set your target amount for "Dream Vacation"
      </p>

      <input
        className="mb-4 w-full rounded-lg bg-gray-100 p-3 text-sm"
        placeholder="$ 2000"
      />

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <AmountButton value="100" onMouseEnter={() => setSelectedAmount("100")} onClick={() => setSelectedAmount("100")} active={selectedAmount === "100"} />
        <AmountButton value="500" onMouseEnter={() => setSelectedAmount("500")} onClick={() => setSelectedAmount("500")} active={selectedAmount === "500"} />
        <AmountButton value="1,000" onMouseEnter={() => setSelectedAmount("1,000")} onClick={() => setSelectedAmount("1,000")} active={selectedAmount === "1,000"} />
        <AmountButton value="2,000" onMouseEnter={() => setSelectedAmount("2,000")} onClick={() => setSelectedAmount("2,000")} active={selectedAmount === "2,000"} />
        <AmountButton value="5,000" onMouseEnter={() => setSelectedAmount("5,000")} onClick={() => setSelectedAmount("5,000")} active={selectedAmount === "5,000"} />
        <AmountButton value="10,000" onMouseEnter={() => setSelectedAmount("10,000")} onClick={() => setSelectedAmount("10,000")} active={selectedAmount === "10,000"} />
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button className="rounded-lg px-6 py-3 text-sm sm:py-2" onClick={() => navigate("/goals")}>
          Back
        </button>

        <button className="rounded-lg bg-[#F54900] px-6 py-3 text-sm text-white sm:py-2" onClick={() => navigate("/goaldetails")}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoalAmountCard;
