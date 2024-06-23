import React, { useState } from "react";
import Headerbar from "../Elements/Headerbar";
import Sidebar from "../Elements/Sidebar";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

function ForumScreen() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    if (newFeedback.trim() !== "") {
      const feedback = {
        id: feedbackList.length + 1,
        text: newFeedback,
        date: new Date().toLocaleDateString(),
      };
      setFeedbackList([feedback, ...feedbackList]);
      setNewFeedback("");
    }
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
            <span style={{ color: "green" }}>Parent</span> Forum{" "}
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Forum</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="container-fluid">
            <div className="px-4 py-4">
              <h2 className="mb-4">Feedback and Complaints</h2>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write your feedback here..."
                  value={newFeedback}
                  onChange={(e) => setNewFeedback(e.target.value)}
                ></textarea>
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleFeedbackSubmit}
                >
                  Submit
                </button>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Feedback</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackList.map((feedback) => (
                      <tr key={feedback.id}>
                        <td>{feedback.id}</td>
                        <td>{feedback.text}</td>
                        <td>{feedback.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer mt-auto">
        <div className="container-fluid">
          <div className="text-center py-3">
            &copy; Copyright 2024 Avinx Nation All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ForumScreen;
