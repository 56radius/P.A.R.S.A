import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing the main components
import SplashScreen from "./components/SplashScreen";
import AuthScreen from "./components/AuthScreen.js";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen.js";

//importimng dashboard components
import DashboardScreen from "./components/Dashboard/DashboardScreen.js";
import ActivityAuthorizationScreen from "./components/Dashboard/ActivityAuthorizationScreen.js";
import AuthorizationStatusScreen from "./components/Dashboard/AuthorizationStatusScreen.js";
import ForumScreen from "./components/Dashboard/ForumScreen.js";
import ResourceCenterScreen from "./components/Dashboard/ResourceCenterScreen.js";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <AuthScreen />}
          />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/activity" element={<ActivityAuthorizationScreen />} />
          <Route path="/reset" element={<ForgotPasswordScreen />} />
          <Route path="/status" element={<AuthorizationStatusScreen />} />
          <Route path="/forum" element={<ForumScreen />} />
          <Route path="/resources" element={<ResourceCenterScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
