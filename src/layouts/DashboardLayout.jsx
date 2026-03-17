import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-gray-50 p-4 md:px-24 md:py-6">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;