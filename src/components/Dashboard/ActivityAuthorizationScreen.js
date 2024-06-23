import React, { useState } from "react";
import Headerbar from "../Elements/Headerbar";
import Sidebar from "../Elements/Sidebar";

function ActivityAuthorizationScreen() {
  // Sample data for activity authorizations with status
  const [authorizations, setAuthorizations] = useState([
    { id: 1, title: "School Trips", status: "Pending" },
    { id: 2, title: "Sports Events", status: "Approved" },
    { id: 3, title: "Extra Classes", status: "Declined" },
  ]);

  // Function to handle approval action
  const handleApprove = (id) => {
    // Logic to update authorization status to Approved
    const updatedAuthorizations = authorizations.map((auth) =>
      auth.id === id ? { ...auth, status: "Approved" } : auth
    );
    setAuthorizations(updatedAuthorizations);
  };

  // Function to handle denial action
  const handleDeny = (id) => {
    // Logic to update authorization status to Declined
    const updatedAuthorizations = authorizations.map((auth) =>
      auth.id === id ? { ...auth, status: "Declined" } : auth
    );
    setAuthorizations(updatedAuthorizations);
  };

  return (
    <div style={{ background: "#f6f9ff" }}>
      {/* Header */}
      <Headerbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            {" "}
            <span style={{ color: "green" }}>Activity</span> Authorization{" "}
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Activity Authorization</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            {authorizations.map((auth) => (
              <div key={auth.id} className="col-xxl-4 col-md-6">
                <div className="card info-card authorization-card">
                  <div className="card-body">
                    <h5 className="card-title">{auth.title}</h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i
                          className={`bi ${
                            auth.status === "Pending"
                              ? "bi-clock"
                              : auth.status === "Approved"
                              ? "bi-check-circle"
                              : "bi-x-circle"
                          }`}
                          style={{
                            color:
                              auth.status === "Pending"
                                ? "orange"
                                : auth.status === "Approved"
                                ? "green"
                                : "red",
                          }}
                        ></i>
                      </div>
                      <div className="ps-3">
                        <h6>Status: {auth.status}</h6>
                        <span>
                          {auth.status === "Pending" && (
                            <>
                              Parental authorization for {auth.title} is pending. Please review
                              and take action.
                              <div className="mt-2">
                                <button
                                  className="btn btn-success me-2"
                                  onClick={() => handleApprove(auth.id)}
                                >
                                  Approve
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDeny(auth.id)}
                                >
                                  Deny
                                </button>
                              </div>
                            </>
                          )}
                          {auth.status === "Approved" && (
                            <>
                              Parental authorization for {auth.title} has been approved. The
                              activity is authorized to proceed as planned.
                            </>
                          )}
                          {auth.status === "Declined" && (
                            <>
                              Parental authorization for {auth.title} has been declined. Please
                              contact parents or guardians for further action.
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default ActivityAuthorizationScreen;
