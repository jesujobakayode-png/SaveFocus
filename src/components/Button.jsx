import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "px-4 py-2 rounded-lg text-sm font-medium";

  const styles = {
    primary: "bg-[#F54900] text-white",
    secondary: "bg-gray-100 text-gray-600",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;