import React from "react";
import { Routes, Route } from "react-router-dom";

import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CreateGoal from "./pages/CreateGoal";
import GoalDetails from "./pages/GoalDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/creategoal" element={<CreateGoal />} />
      <Route path="/goaldetails" element={<GoalDetails />} />
    </Routes>
  );
}

export default App;