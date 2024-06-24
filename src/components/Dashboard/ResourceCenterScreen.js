import React, { useState } from "react";
import { Table, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Headerbar from "../Elements/Headerbar";
import Sidebar from "../Elements/Sidebar";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

function ResourceCenterScreen() {
  // Sample data for resources
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Parental Guide for Online Safety",
      category: "Guides",
      description: "A comprehensive guide to help parents ensure their children's online safety.",
      date: "2024-06-25",
      link: "https://example.com/guide-online-safety"
    },
    {
      id: 2,
      title: "Mental Health Resources for Students",
      category: "Health",
      description: "A list of mental health resources available for students.",
      date: "2024-06-24",
      link: "https://example.com/mental-health-resources"
    },
    {
      id: 3,
      title: "Extracurricular Activities Handbook",
      category: "Activities",
      description: "A handbook detailing various extracurricular activities available for students.",
      date: "2024-06-23",
      link: "https://example.com/extracurricular-handbook"
    },
    // Add more sample data as needed
  ]);

  // State for category filter
  const [filter, setFilter] = useState("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredResources = filter === "All" ? resources : resources.filter(resource => resource.category === filter);
  const currentItems = filteredResources.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <span style={{ color: "green" }}>Resource</span> Center
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Resource Center</li>
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
                  <Dropdown.Item eventKey="Guides">Guides</Dropdown.Item>
                  <Dropdown.Item eventKey="Health">Health</Dropdown.Item>
                  <Dropdown.Item eventKey="Activities">Activities</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((resource, index) => (
                      <tr key={resource.id}>
                        <td>{index + 1}</td>
                        <td>{resource.title}</td>
                        <td>{resource.category}</td>
                        <td>{resource.description}</td>
                        <td>{resource.date}</td>
                        <td>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            View Resource
                          </a>
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
                    { length: Math.ceil(filteredResources.length / itemsPerPage) },
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

export default ResourceCenterScreen;
