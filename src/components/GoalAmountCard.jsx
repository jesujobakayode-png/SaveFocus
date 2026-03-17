import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AmountButton from "./AmountButton";

const GoalAmountCard = () => {
  const [selectedAmount, setSelectedAmount] = useState("2,000");
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-6 w-full">

      <h2 className="font-semibold mb-1">
        How much do you want to save?
      </h2>

      <p className="text-xs text-gray-500 mb-4">
        Set your target amount for "Dream Vacation"
      </p>

      {/* Input */}
      <input
        className="w-full rounded-lg p-3 mb-4 text-sm bg-gray-100"
        placeholder="$ 2000"
      />

      {/* Amount Options */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <AmountButton value="100" onMouseEnter={() => setSelectedAmount("100")} onClick={() => setSelectedAmount("100")} active={selectedAmount === "100"} />
        <AmountButton value="500" onMouseEnter={() => setSelectedAmount("500")} onClick={() => setSelectedAmount("500")} active={selectedAmount === "500"} />
        <AmountButton value="1,000" onMouseEnter={() => setSelectedAmount("1,000")} onClick={() => setSelectedAmount("1,000")} active={selectedAmount === "1,000"} />
        <AmountButton value="2,000" onMouseEnter={() => setSelectedAmount("2,000")} onClick={() => setSelectedAmount("2,000")} active={selectedAmount === "2,000"} />
        <AmountButton value="5,000" onMouseEnter={() => setSelectedAmount("5,000")} onClick={() => setSelectedAmount("5,000")} active={selectedAmount === "5,000"} />
        <AmountButton value="10,000" onMouseEnter={() => setSelectedAmount("10,000")} onClick={() => setSelectedAmount("10,000")} active={selectedAmount === "10,000"} />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-6 py-2 rounded-lg text-sm">
          Back
        </button>

        <button className="bg-[#F54900] text-white px-6 py-2 rounded-lg text-sm" onClick={() => navigate('/goaldetails')}>
          Continue
        </button>
      </div>

    </div>
  );
};

export default GoalAmountCard;