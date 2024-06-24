import React from 'react';
import { useNavigate } from 'react-router-dom';

import parent from "../assets/img/parent.jpg";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS  

import "../assets/dashboard/assets/css/LoginScreen.css";

const AuthScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission and authentication logic
    navigate('/dashboard');
  };

  return (
    <div style={{}} className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src={parent} alt="parent" />
          <div className="text">
            <span className="text-1"> Control your Child <br /> New Child</span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          <img src={parent} alt="parent" />
          <div className="text">
            <span className="text-1">Complete miles of journey <br /> with one step</span>
            <span className="text-2">Let's get started</span>
          </div>
        </div> 
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div style={{fontWWeight: 'bold'}} className="text"><a href="#">Forgot password?</a></div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter Phone Number" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Your Child's name" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
