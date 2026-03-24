import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoalsProvider } from "./context/GoalsContext";
import { useAuth } from "./context/useAuth";

const AppProviders = () => {
  const { currentUser } = useAuth();

  return (
    <GoalsProvider key={currentUser?.id || "guest"}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoalsProvider>
  );
};

export default AppProviders;
