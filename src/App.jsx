import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateGoal from "./pages/CreateGoal";
import CreateGoalStep2 from "./pages/CreateGoalStep2";
import CreateGoalStep3 from "./pages/CreateGoalStep3";
import CreateGoalStep4 from "./pages/CreateGoalStep4";
import GoalDetails from "./pages/GoalDetails";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding1" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creategoal"
        element={
          <ProtectedRoute>
            <CreateGoal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creategoalstep2"
        element={
          <ProtectedRoute>
            <CreateGoalStep2 />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creategoalstep3"
        element={
          <ProtectedRoute>
            <CreateGoalStep3 />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creategoalstep4"
        element={
          <ProtectedRoute>
            <CreateGoalStep4 />
          </ProtectedRoute>
        }
      />
      <Route
        path="/goaldetails"
        element={
          <ProtectedRoute>
            <GoalDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/goals"
        element={
          <ProtectedRoute>
            <Goals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
