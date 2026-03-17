import React from "react";

const ActionsCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">

      <h3 className="text-sm font-medium mb-4">Actions</h3>

      <button className="w-full bg-[#F54900] text-white py-2 rounded-lg mb-2">
        + Add Funds
      </button>

      <button className="w-full border border-gray-200 py-2 rounded-lg mb-2 text-sm">
        Change Deadline
      </button>

      <button className="w-full border border-gray-200 py-2 rounded-lg text-sm">
        Lock Goal
      </button>

    </div>
  );
};

export default ActionsCard;