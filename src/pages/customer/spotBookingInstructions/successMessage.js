import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import Toaster from "../../../components/toaster";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import tickpic from "../../../assets/tick.png";


import "./style.css";

const SuccessMessage = ({ show, handleClose }) => {
    const [showToast, setToast] = useState(false);
  

    const navigate = useNavigate();

    const handleNavigation = (route) => navigate(`/${route}`);

useEffect(() => {
    setToast(false);
  }, []);

  const onSubmit = (values) => {
  
    setToast(true);
    handleClose();
  };

  const handleToast = () => {};

  const formik = useFormik({
    onSubmit,
  });


  const hideToast = () => {
    setToast(false);
  };

  return (
    <div>
      {showToast && (
        <Toaster
          message={"Successfully updated"}
          show={showToast}
          hideToast={hideToast}
        />
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        
      >
        <form  onSubmit={formik.handleSubmit} className="modalbox">
         
          <Modal.Body >
            <Container>
            <Row>
                <Col>
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col>
                    <div className="tickimg">
                  
          <img
           src={tickpic}
            className="img-fluid"
            alt="Phone image"
          />
        </div>
                    <h4 style={{textAlign:"center"}}>Registration Successfully Completed</h4>
                    </Col>
                  
                   <Row className="para">
                    <p style={{textAlign:"center"}}>Please Login into your account and continue</p>
                  </Row>
                
          <Row className="view-button">
        <Col>
          {/* <Button  onClick={() => handleNavigation("customerDashboard")}></Button> */}
       <p onClick={() => handleNavigation("customerDashboard")}>Login</p>
       
        </Col>
      </Row>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
         
         
        </form>
      </Modal>
    </div>


  );
};

export default SuccessMessage;