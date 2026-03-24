import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./AppProviders.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppProviders />
  </AuthProvider>
);
