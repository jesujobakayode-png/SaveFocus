import React from "react";

const StepProgress = () => {
  return (
    <div className="flex items-center gap-2 md:gap-6 mb-10 overflow-x-auto">

      <div className="flex items-center gap-1 md:gap-2">
        <span className="w-6 h-6 rounded-full bg-[#F54900] text-white flex items-center justify-center text-xs">1</span>
        <span className="text-xs">Name Goal</span>
      </div>

      <div className="h-0.5 w-8 md:w-16 bg-[#F54900]"></div>

      <div className="flex items-center gap-1 md:gap-2">
        <span className="w-6 h-6 rounded-full bg-[#F54900] text-white flex items-center justify-center text-xs">2</span>
        <span className="text-xs">Target Amount</span>
      </div>

      <div className="h-0.5 w-8 md:w-16 bg-gray-300"></div>

      <div className="flex items-center gap-1 md:gap-2 text-gray-400">
        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">3</span>
        <span className="text-xs">Deadline</span>
      </div>

      <div className="h-0.5 w-8 md:w-16 bg-gray-300"></div>

      <div className="flex items-center gap-1 md:gap-2 text-gray-400">
        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">4</span>
        <span className="text-xs">Saving Plan</span>
      </div>

    </div>
  );
};

export default StepProgress;