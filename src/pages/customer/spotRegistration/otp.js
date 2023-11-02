import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import Button from "../../../components/button";
import "./spotStyles.scss";
import "../../../styles.scss";
import { Col, Row } from "react-bootstrap";
import { Messages } from "../../../utils/constants";
import SuccessModal from "../../../components/successModal";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  useVerifyOtpMutation,
  useSendOtpMutation,
} from "../../../services/modules/customer/otp";

const OTP = () => {
  const [verifyOtp, { data: verifyData }] = useVerifyOtpMutation();
  const [sendOtp, { data: otpData }] = useSendOtpMutation();

  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  useEffect(() => {
    if (otpData?.success) {
    }
  }, [otpData]);

  const handleOnclick = () => {
    verifyOtp({ mobile, otp });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("LLLLLLLLLLLLLLLL", state);
  useEffect(() => {
    if (otpData?.success) {
      const extractedOtp = otpData?.data?.otp;
      setOtp(extractedOtp);
    }
  }, []);
  let otpdata = {
    mobile: state.phoneNumber,
    email: state.mail,
  };

  const handleResendOtp = () => {
    sendOtp(otpdata);
  };

  useEffect(() => {
    if (verifyData?.success) {
      setShowSuccessModal(true);
      setMessage(Messages.OtpSuccess);
      navigate("/login");
    }
    if (verifyData?.success === false) {
      setShowSuccessModal(true);
      setMessage(Messages.otpFail);
    }
  }, [verifyData]);

  useEffect(() => {
    if (state) {
      setMobile(state.phoneNumber);
      setEmail(state.mail);
    }
  }, [state]);

  return (
    <div className=" form-control main-div row-md-12 row-lg-12 row-xl-12 py-5 h-100 spototp">
      {showSuccessModal && (
        <SuccessModal
          show={showSuccessModal}
          handleClose={handleCloseModal}
          message={message}
        />
      )}

      <div className="row d-flex  justify-content-center h-100">
        <div className="col-md-6 col-lg-6 col-xl-6 log-bg-img">
          <div className="log-welcome-msg">
            <h1 className="pt-3">Welcome Back</h1>
            <p>
              Smooth seas never made a skilled sailor.
              <br /> Welcome to Kerala Maritime Port Portal
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 content">
          <div className="logo-wraper mb-4">
            <img src="http://kmb.kerala.gov.in/uploads/settings/1683701832kmb_new_logo.jpg" />
          </div>
          <div className="row-sm-12">
            <h4>OTP Verification</h4>
            <p className="sub"> Enter the OTP you recived to </p>
            <p className="sub2">{state.phoneNumber || ""}</p>
            <div className="otp-container">
              <div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span style={{ marginLeft: "3px" }}></span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle="inputStyle"
                />
              </div>
            </div>
            <div
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <Button
                label="Verify and Register"
                type="submit"
                className="btn-default full-width"
                onClick={handleOnclick}
              />
            </div>
            <Row className=" otb-btn">
              <Col className="btn-col address-button">
                <a
                  className="btn-outline "
                  onClick={() => navigate("/spotregistration")}
                >
                  Previous
                </a>
                <h6 className="px">
                  Not recived Yet?
                  <a onClick={handleResendOtp} style={{ color: "blue" }}>
                    Resend OTP{" "}
                  </a>
                </h6>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {show && (
        <SuccessModal
          show={setShow}
          handleClose={handleClose}
          message={Messages.spotbookingsuccessmsg}
        />
      )}
    </div>
  );
};

export default OTP;
