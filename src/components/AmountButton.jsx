import React from "react";

const AmountButton = ({ value, active, onClick, onMouseEnter }) => {
  return (
    <button
      className={`w-full rounded-lg border px-3 py-2 text-sm transition hover:text-orange-500 ${
        active
          ? "border-[#F54900] bg-orange-50 text-[#F54900]"
          : "border-gray-300 text-gray-600"
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      ${value}
    </button>
  );
};

export default AmountButton;
