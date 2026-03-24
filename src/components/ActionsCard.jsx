import React from "react";

const ActionsCard = ({ onAddFunds, onChangeDeadline, onToggleLock, goal, message }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">

      <h3 className="text-sm font-medium mb-4">Actions</h3>

      <button
        type="button"
        onClick={onAddFunds}
        className="w-full bg-[#F54900] text-white py-2 rounded-lg mb-2"
      >
        + Add Funds
      </button>

      <button
        type="button"
        onClick={onChangeDeadline}
        className="w-full border border-gray-200 py-2 rounded-lg mb-2 text-sm"
      >
        Change Deadline
      </button>

      <button
        type="button"
        onClick={onToggleLock}
        className="w-full border border-gray-200 py-2 rounded-lg text-sm"
      >
        {goal.locked ? "Unlock Goal" : "Lock Goal"}
      </button>

      {message ? <p className="mt-3 text-xs text-gray-500">{message}</p> : null}

    </div>
  );
};

export default ActionsCard;
