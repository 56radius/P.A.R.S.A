import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import Swal from 'sweetalert2';

// Import Firebase modules
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../backend/firebase.config"; // Assuming the Firebase config file is in this path

// Importing CSS files
import "../.././assets/dashboard/assets/css/style.css";
import "../.././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../.././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../.././assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../.././assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../.././assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../.././assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../.././assets/dashboard/assets/vendor/simple-datatables/style.css";

function Headerbar() {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fullName, setFullName] = useState('');
    const [notifications, setNotifications] = useState(2); // Example: starting with 2 notifications

    useEffect(() => {
        const auth = getAuth();
        
        const fetchUserData = async (user) => {
            try {
                console.log("Fetching data for user:", user.uid);
                const userDoc = doc(db, "users", user.uid);
                const docSnap = await getDoc(userDoc);
                
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    console.log("User Data:", userData);
                    setFullName(userData.fullName || "No Name Found");
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is signed in:", user.uid);
                fetchUserData(user);
            } else {
                console.log("No user is signed in");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Help Requested Successfully!',
            showConfirmButton: false,
            timer: 1500
        });
        setModalIsOpen(false);
    };

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
                const auth = getAuth();
                signOut(auth)
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        console.error("Error signing out:", error);
                    });
            }
        });
    };

    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <button style={{ borderWidth: 0, marginLeft: "30px", background: "#fff" }} className="logo d-flex align-items-center">
                        <span> P. A. R. S. A </span>
                    </button>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number">{notifications}</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have {notifications} new notifications
                                    <a href="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>New Activity</h4>
                                        <p>There is a new activity scheduled for next week.</p>
                                        <p>Just now</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Reminder</h4>
                                        <p>Don't forget to submit your feedback for the recent event.</p>
                                        <p>30 mins ago</p>
                                    </div>
                                </li>
                                {/* Add more notification items as needed */}
                            </ul>
                        </li>

                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <span className="d-none d-md-block dropdown-toggle ps-2">{fullName || "Loading..."}</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{fullName || "Loading..."}</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" onClick={() => navigate("/profile")}>
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" onClick={() => setModalIsOpen(true)}>
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a onClick={handleSignOut} className="dropdown-item d-flex align-items-center">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        width: '50%',
                        margin: 'auto',
                        marginTop: 50,
                        borderRadius: '10px',
                        padding: '20px'
                    }
                }}>
                <h2>Need Help?</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" value={message} rows={5} onChange={e => setMessage(e.target.value)} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Headerbar;
