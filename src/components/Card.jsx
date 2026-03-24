import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white border rounded-[11.32px] border-gray-200 p-[19.14px] flex flex-col gap-[19.41px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;