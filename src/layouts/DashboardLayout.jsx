import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex-col md:flex md:flex-row">
      <Sidebar />

      <div className="flex-1 bg-gray-50 px-4 py-4 sm:px-6 md:px-10 md:py-6 lg:px-16 xl:px-24">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
