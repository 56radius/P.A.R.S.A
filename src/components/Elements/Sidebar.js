import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

//importing css code
import "../.././assets/dashboard/assets/css/style.css";

//importing css vendor variables
import "../.././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../.././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../.././assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../.././assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../.././assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../.././assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../.././assets/dashboard/assets/vendor/simple-datatables/style.css";

//firebase auth for sign out
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";

function Sidebar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
    // Show confirmation dialog
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Show loading state
        setLoading(true);

        // User confirmed, perform sign out
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            // Navigate to the home page after successful logout
            navigate("/");
          })
          .catch((error) => {
            // Handle any errors that occur during sign out
            console.error("Error signing out:", error);
            // Hide loading state if an error occurs
            setLoading(false);
          });
      }
    });
  };
  
  return (
    <div style={{ background: "#f6f9ff" }}>
      {/* second header or aside header */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a onClick={() => navigate("/dashboard")} className="nav-link">
              <i className="bi bi-grid"></i>
              <span style={{ color: "green" }}>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a 
            onClick={() => navigate("/profile")}
            className="nav-link collapsed">
              <i className="bi bi-person"></i>
              <span> Profile </span>
            </a>
          </li>

          <li className="nav-item">
            <a
              onClick={() => navigate("/tryava")}
              className="nav-link collapsed"
            >
              <i className="bi bi-dash-circle"></i>
              <span> Try AVA </span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a href="#" className="nav-link">
              <i className="bi bi-gem"></i>
              <span> Mindful Minutes </span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a 
                onClick={() => navigate("/yoga")}
                >
                  <i className="bi bi-circle"></i>
                  <span> Yoga </span>
                </a>
              </li>
              <li>
                <a 
                onClick={() => navigate("/exercise")}
                >
                  <i className="bi bi-circle"></i>
                  <span> Exercise </span>
                </a>
              </li>
              <li>
                <a 
                onClick={() => navigate("/journal")}>
                  <i className="bi bi-circle"></i>
                  <span> Mental Health Journal </span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              onClick={() => navigate("/tracking")}
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-bar-chart"></i>
              <span> Tracking </span>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            ></ul>
          </li>

          <li className="nav-item">
            <a
              onClick={() => navigate("/diagnoser")}
              className="nav-link collapsed"
            >
              <i className="bi bi-person"></i>
              <span> Self-diagnoser </span>
            </a>
          </li>

          <li className="nav-item">
            <a 
            onClick={() => navigate("/community")}
            className="nav-link collapsed">
              <i className="bi bi-person"></i>
              <span> Community </span>
            </a>
          </li>

          <li className="nav-heading">Pages</li>

          {/* Logout item */}
          <li className="nav-item">
            <a onClick={handleSignOut} className="nav-link collapsed">
              <i className="bi bi-box-arrow-in-right"></i>
              <span> Logout </span>
            </a>
          </li>
        </ul>
      </aside>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner-border text-primary animate-spin" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
