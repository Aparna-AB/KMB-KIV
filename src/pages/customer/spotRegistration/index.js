import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SpotRegistration from "./spotRegistration";
import OTP from "./otp";
import "../../../styles.scss";
import Instructions from "./components/instructions";
const Index = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hasSpotRegFormBeenSubmitted, setSpotRegFormSubmitted] =
    useState(false);

  const handleSpotRegForm = (value) => {
    setSpotRegFormSubmitted(value);
  };

  return (
    <div className="container-fluid h-100">
      <Instructions show={show} handleClose={handleClose} />
      <div className="spot-registartion">
        <div className="row d-flex  justify-content-end h-100">
          <div className="col-md-6 col-lg-6 col-xl-6 log-bg-img">
            <div className="log-welcome-msg">
              <h1 className="pt-3">Welcome Back</h1>
              <p>
                Smooth seas never made a skilled sailor.
                <br /> Welcome to Kerala Maritime Port Portal
              </p>
            </div>
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 spot-registartion-form">
            <div className="logo-wraper mb-4">
              <img src="../../../assets/images/default-logo.jpg" alt="logo" />
            </div>
            <div>
              {" "}
              <h2 className="text-center">Spot registration</h2>
            </div>

            {!hasSpotRegFormBeenSubmitted && (
              <SpotRegistration handleSpotRegForm={handleSpotRegForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
