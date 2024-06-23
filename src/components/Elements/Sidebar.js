import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing CSS code
import "../../assets/dashboard/assets/css/style.css";

// Importing CSS vendor variables
import "../../assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../../assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../../assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../../assets/dashboard/assets/vendor/simple-datatables/style.css";

// Firebase auth for sign out
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";

function Sidebar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
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
        setLoading(true);
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.error("Error signing out:", error);
            setLoading(false);
          });
      }
    });
  };

  return (
    <div style={{ background: "#f6f9ff" }}>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a onClick={() => navigate("/dashboard")} className="nav-link">
              <i className="bi bi-grid"></i>
              <span style={{ color: "green" }}>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a onClick={() => navigate("/activity")} className="nav-link collapsed">
              <i className="bi bi-check-circle"></i>
              <span>Activity Authorization</span>
            </a>
          </li>

          <li className="nav-item">
            <a onClick={() => navigate("/status")} className="nav-link collapsed">
              <i className="bi bi-info-circle"></i>
              <span>Authorization Status</span>
            </a>
          </li>

          <li className="nav-item">
            <a onClick={() => navigate("/feedback")} className="nav-link collapsed">
              <i className="bi bi-envelope"></i>
              <span>Feedback</span>
            </a>
          </li>

          <li className="nav-item">
            <a onClick={() => navigate("/tracking")} className="nav-link collapsed">
              <i className="bi bi-bar-chart"></i>
              <span>Tracking</span>
            </a>
          </li>

          <li className="nav-heading">Pages</li>

          {/* Logout item */}
          <li className="nav-item">
            <a onClick={handleSignOut} className="nav-link collapsed">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Logout</span>
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
