import React from "react";

const Input = ({ label, placeholder, className = "", ...props }) => {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        placeholder={placeholder}
        className={`w-full mt-2 p-3 bg-gray-100 rounded-lg outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
