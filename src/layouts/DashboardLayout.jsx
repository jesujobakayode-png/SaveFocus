import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-256">

      <Sidebar />

      <div
        className="flex-1 bg-gray-50"
        style={{
          paddingTop: "25.89px",
          paddingRight: "103.54px",
          paddingBottom: "318.72px",
          paddingLeft: "103.54px",
        }}
      >
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;