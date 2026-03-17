import React from "react";

const AmountButton = ({ value, active, onClick, onMouseEnter }) => {
  return (
    <button
      className={`rounded-lg py-2 text-sm hover:text-orange-500 ${
        active
          ? "border-[#F54900] text-[#F54900]"
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