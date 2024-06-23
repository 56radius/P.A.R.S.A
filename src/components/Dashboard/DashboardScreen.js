import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/dashboard/assets/css/style.css";
import "../../assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../../assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../../assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../../assets/dashboard/assets/vendor/simple-datatables/style.css";

// Importing elements
import Headerbar from "../Elements/Headerbar";
import Sidebar from "../Elements/Sidebar";

function DashboardScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState('');

  return (
    <div style={{ background: "#f6f9ff" }}>
      {/* The header element */}
      <Headerbar />
      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "gray" }}>User's</span> Dashboard
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {/* Activity Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card activity-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Activity Options</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="activity1.html">
                            School Trips
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="activity2.html">
                            Sports Events
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="activity3.html">
                            Extra Classes
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">Student Activities</h5>
                      <div className="d-flex align-items-center">
                        <div
                          className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "lightgray" }}
                        >
                          <i
                            style={{ color: "green" }}
                            className="bi bi-activity"
                          ></i>
                        </div>
                        <div className="ps-3">
                          <h6>Manage Activities</h6>
                          <span>
                            View and manage all upcoming student activities that
                            require parental authorization.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Authorization Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card authorization-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-shield-check"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Authorization Status</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Pending
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Approved
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Declined
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">Parental Authorizations</h5>
                      <div className="d-flex align-items-center">
                        <div
                          className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "lightgray" }}
                        >
                          <i
                            style={{ color: "yellow" }}
                            className="bi bi-shield-check"
                          ></i>
                        </div>
                        <div className="ps-3">
                          <h6>Authorization Status</h6>
                          <span style={{ color: "green", fontSize: "80%" }}>
                            Track the status of parental authorizations for
                            various activities.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monitoring Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card monitoring-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-graph-up"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">Monitoring</h5>
                      <div className="d-flex align-items-center">
                        <div
                          className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "lightgray" }}
                        >
                          <i
                            style={{ color: "purple" }}
                            className="bi bi-graph-up"
                          ></i>
                        </div>
                        <div className="ps-3">
                          <h6>Track Authorizations</h6>
                          <span style={{ color: "green", fontSize: "80%" }}>
                            Monitor and track the progress of authorization
                            requests.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feedback Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card feedback-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-envelope"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Feedback Options</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">Feedback</h5>
                      <div className="d-flex align-items-center">
                        <div
                          className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "lightgray" }}
                        >
                          <i
                            style={{ color: "yellow" }}
                            className="bi bi-envelope"
                          ></i>
                        </div>
                        <div className="ps-3">
                          <h6>Provide Feedback</h6>
                          <span style={{ color: "green", fontSize: "80%" }}>
                            Click on the envelope icon to give feedback on how
                            we can improve the authorization process.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright 2024 Avinx Nation All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default DashboardScreen;
