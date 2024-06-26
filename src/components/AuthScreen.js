import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import parent from "../assets/img/parent.jpg";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS  
import SignupForm from "../components/Elements/SignupForm";
import "../assets/dashboard/assets/css/LoginScreen.css";
import { authConfig } from "../backend/firebase.config"; // Correct import of auth

const AuthScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader
    try {
      await signInWithEmailAndPassword(authConfig, email, password);
      navigate('/dashboard');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    } finally {
      setLoading(false); // Hide the loader
    }
  };

  return (
    <div className="container">
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
                  <input 
                    type="text" 
                    placeholder="Enter your email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{fontWeight: 'bold'}} className="text"><a onClick={() => navigate("/reset")}>Forgot password?</a></div>
                <div className="button input-box">
                  <input type="submit" value="Submit" disabled={loading} />
                  {loading && <div className="loader"></div>} {/* Spinner */}
                </div>
                <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
              </div>
            </form>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
