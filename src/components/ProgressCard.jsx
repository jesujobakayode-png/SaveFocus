import React from "react";

const ProgressCard = () => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col items-center">
        <div className="relative h-32 w-32">
          <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 128 128">
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

        <p className="mt-2 text-xs text-gray-400">Complete</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
        <div>
          <p className="text-gray-400">Target Amount</p>
          <p className="font-medium">$2,000</p>
        </div>

        <div>
          <p className="text-gray-400">Current Balance</p>
          <p className="font-medium text-[#F54900]">$1,300</p>
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
