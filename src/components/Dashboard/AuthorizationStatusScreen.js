import React, { useState } from "react";
import { Table, Badge, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Headerbar from "../Elements/Headerbar";
import Sidebar from "../Elements/Sidebar";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

function AuthorizationStatusScreen() {
  // Sample data for authorization status
  const [authorizations, setAuthorizations] = useState([
    {
      id: 1,
      title: "School Trips",
      type: "Educational",
      status: "Pending",
      details: "Details for pending status",
      date: "2024-06-25",
      comments: "Awaiting parent confirmation",
    },
    {
      id: 2,
      title: "Sports Events",
      type: "Sports",
      status: "Approved",
      details: "Details for approved status",
      date: "2024-06-24",
      comments: "All parents have approved",
    },
    {
      id: 3,
      title: "Extra Classes",
      type: "Educational",
      status: "Declined",
      details: "Details for declined status",
      date: "2024-06-23",
      comments: "Lack of interest from students",
    },
    // Add more sample data as needed
  ]);

  // State for category filter
  const [filter, setFilter] = useState("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredAuthorizations = filter === "All" ? authorizations : authorizations.filter(auth => auth.status === filter);
  const currentItems = filteredAuthorizations.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle approval action
  const handleApprove = (id) => {
    const updatedAuthorizations = authorizations.map((auth) =>
      auth.id === id ? { ...auth, status: "Approved" } : auth
    );
    setAuthorizations(updatedAuthorizations);
  };

  // Function to handle denial action
  const handleDeny = (id) => {
    const updatedAuthorizations = authorizations.map((auth) =>
      auth.id === id ? { ...auth, status: "Declined" } : auth
    );
    setAuthorizations(updatedAuthorizations);
  };

  // Function to handle edit action
  const handleEdit = (id) => {
    // Logic for handling edit action, e.g., opening a modal to edit the authorization
    console.log("Edit authorization with id:", id);
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
            <span style={{ color: "green" }}>Activity</span> Authorization
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
          <div className="container-fluid">
            <div className="px-4 py-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Button variant="primary">
                  <i className="fas fa-print"></i> Print
                </Button>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={`Filter: ${filter}`}
                  onSelect={(e) => setFilter(e)}
                >
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                  <Dropdown.Item eventKey="Declined">Declined</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Details</th>
                      <th>Date</th>
                      <th>Comments</th>
                      <th>Action</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((auth, index) => (
                      <tr key={auth.id}>
                        <td>{index + 1}</td>
                        <td>{auth.title}</td>
                        <td>{auth.type}</td>
                        <td>
                          <Badge
                            bg={
                              auth.status === "Pending"
                                ? "warning"
                                : auth.status === "Approved"
                                ? "success"
                                : "danger"
                            }
                          >
                            {auth.status}
                          </Badge>
                        </td>
                        <td>{auth.details}</td>
                        <td>{auth.date}</td>
                        <td>{auth.comments}</td>
                        <td>
                          {auth.status === "Pending" && (
                            <>
                              <Button
                                variant="success"
                                className="me-2"
                                onClick={() => handleApprove(auth.id)}
                              >
                                Approve
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => handleDeny(auth.id)}
                              >
                                Deny
                              </Button>
                            </>
                          )}
                        </td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => handleEdit(auth.id)}
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              {/* Pagination */}
              <nav className="mt-4">
                <ul className="pagination justify-content-center">
                  {Array.from(
                    { length: Math.ceil(filteredAuthorizations.length / itemsPerPage) },
                    (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(index + 1)}
                          className="page-link"
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </nav>
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

export default AuthorizationStatusScreen;
