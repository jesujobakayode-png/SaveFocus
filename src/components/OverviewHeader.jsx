// components/DashboardHeader.jsx
import React from "react";
import { useAuth } from "../context/useAuth";

const DashboardHeader = () => {
  const { currentUser } = useAuth();

  const firstName = currentUser?.fullName?.split(" ")[0] || "there";

  return (
    <div className="mb-4 flex w-full max-w-[776.76px] flex-col gap-2">
      <h1 className="text-xl font-semibold">Welcome back, {firstName}!</h1>

      <p className="text-sm text-gray-400">Here is your savings dashboard</p>
    </div>
  );
};

export default DashboardHeader;
