import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { authConfig, db } from "../../backend/firebase.config"; // Correct import
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        authConfig,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      const userData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        childName: formData.childName,
        uid: user.uid,
      };

      await addDoc(collection(db, 'users'), userData);

      await sendEmailVerification(user);

      Swal.fire({
        icon: 'success',
        title: 'Signup successful! Verification email sent.',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate('/dashboard');
      });
    } catch (error) {
      console.error('Signup error: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Signup failed!',
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
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
            <input type="submit" value="Submit" disabled={loading} />
          </div>
          <div className="text sign-up-text">Already have an account? <label htmlFor='flip'>Login now</label></div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
