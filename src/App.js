import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing the main components
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen.js";


//importimng dashboard components
import DashboardScreen from "./components/Dashboard/DashboardScreen.js";
import ActivityAuthorizationScreen from "./components/Dashboard/ActivityAuthorizationScreen.js";
import AuthorizationStatusScreen from "./components/Dashboard/AuthorizationStatusScreen.js";
import ForumScreen from "./components/Dashboard/ForumScreen.js";

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
            element={showSplash ? <SplashScreen /> : <LoginScreen />}
          />
          <Route path="/register" element={<SignupScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/activity" element={<ActivityAuthorizationScreen />} />
          <Route path="/status" element={<AuthorizationStatusScreen />} />
          <Route path="/forum" element={<ForumScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
