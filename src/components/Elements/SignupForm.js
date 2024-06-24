import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS  

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    childName: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission and authentication logic
    console.log(formData);
    navigate('/dashboard');
  };

  return (
    <div className="signup-form">
      <div className="title">Signup</div>
      <form onSubmit={handleSubmit}>
        <div className="input-boxes">
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <i className="fas fa-phone"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <i className="fas fa-child"></i>
            <input
              type="text"
              name="childName"
              placeholder="Your Child's name"
              required
              value={formData.childName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="button input-box">
            <input type="submit" value="Submit" />
          </div>
          <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
