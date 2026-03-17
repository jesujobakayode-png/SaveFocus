import React from "react";

const ProgressCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">

      <div className="flex flex-col items-center">

        {/* Circle */}
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="60"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="60"
              stroke="#10b981"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${0.65 * 376.99} 376.99`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
            65%
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-2">Complete</p>

      </div>

      {/* Stats */}
      <div className="flex justify-between mt-6 text-sm">

        <div>
          <p className="text-gray-400">Target Amount</p>
          <p className="font-medium">$2,000</p>
        </div>

        <div>
          <p className="text-gray-400">Current Balance</p>
          <p className="text-[#F54900] font-medium">$1,300</p>
        </div>

        <div>
          <p className="text-gray-400">Remaining</p>
          <p className="font-medium">$700</p>
        </div>

      </div>

    </div>
  );
};

export default ProgressCard;