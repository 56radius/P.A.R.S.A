import React from "react";
import { Spinner } from "react-bootstrap";

const SplashScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status">

      </Spinner>
    </div>
  );
};

export default SplashScreen;
