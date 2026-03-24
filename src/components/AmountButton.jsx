import React from "react";

const AmountButton = ({ value, selected, onClick }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`border rounded-lg py-3 text-sm w-full
        ${
          selected === value
            ? "border-[#F54900] text-[#F54900]"
            : "border-gray-200 text-gray-600"
        }
      `}
    >
      ${value.toLocaleString()}
    </button>
  );
};

export default AmountButton;