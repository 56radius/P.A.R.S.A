import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";
import { authConfig } from "../backend/firebase.config";  // Import your Firebase configuration here

function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(authConfig, email);
      Swal.fire({
        icon: "success",
        title: "Password Reset Email Sent!",
        text: `An email has been sent to ${email} with instructions to reset your password.`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error Sending Email",
        text: error.message,
      });
    }
  };

  return (
    <div>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <button
                    style={{
                      borderWidth: 0,
                      background: "#fff",
                    }}
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <span className="d-none d-lg-block">
                      {" "}
                      <span
                        style={{
                          color: "green",
                        }}
                      >
                        {" "}
                        Reset Your Password
                      </span>{" "}
                    </span>
                  </button>
                </div>
                <form onSubmit={handleResetPassword} className="mt" method="post">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          {" "}
                          Please enter your Email{" "}
                        </h5>
                      </div>

                      <div className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your email!
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ForgotPasswordScreen;
