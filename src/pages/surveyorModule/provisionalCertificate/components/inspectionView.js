import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/button";
import Applicationform from "./applicationform";


const ApprovalForm = ({ show,handleClose,handleOnClick }) => {
    
    const [applicationShow, setApplicationShow] = useState(false);
    

    return (
        <div>
            {/* { applicationShow && <Applicationform show={show} handleClose={handleClose} />} */}
            <Modal
                show = {show}
                onHide = {handleClose}
                backdrop = "static"
                keyboard = {false}
                size = "lg"
                className="surveyor-declaration"
            >
                <Modal.Header closeButton>
                    <div>
                        <p className="aproval-form-name">Form Number 4 </p>
                        <h2>Application for Provisional Certificate of Survey</h2>
                    </div>
                </Modal.Header>
                <Modal.Body className="declaraion">
                    <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                <h6><strong>From</strong></h6>
                    <h6><strong>User Type</strong></h6>
                    <h6 style={{color: "rgba(127, 128, 135, 1)"}}>Name Displayed</h6>
                    <br />
                </div>

                <div className="col-md-12 col-lg-12 col-sm-12">
                <h6><strong>To</strong></h6>
                <h6><strong>Certifying Authority</strong></h6>
                    <h6 style={{color: "rgba(127, 128, 135, 1)"}}>Name Displayed</h6>
                </div>
                    </div><br/>
               
                    <div className="row toadress">
                <p>
                  Sir/Madam,
                  <br/>
                  <p><strong>Subject: </strong>  Application for Provisional Certificate of Survey</p>
                  This has reference to the Declaration of Survey Ref No. xxxxxx dated xxxxx for the vessel 
                  with Official Number xxxxxx.It is requested that a Provisional Certificate of Survey be issued which is
                   valid till such time a permanent Certificate of Survey is issued.
                </p>
              </div><br/>

              <div className="row">
                <h6><strong>Yours faithfully</strong></h6>
                <h6><strong>Name of the Owner / Master / Authorised Person</strong></h6>
                <p>Signature</p>
              </div>
                    

                    
                   
                    <Container className="container">
                    <Row className="button-container">
                        <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                                label="Back"                                
                                className="btn-sucess float-right btn-outline"  
                                onClick={handleClose}                      
                            />                    
                            <Button
                                label="Provide Provisional Certificate"
                                type="submit"
                                className="btn-sucess float-right btn-default"
                                onClick={handleOnClick}
                            />
                        </Col>
                    </Row>
                </Container>
                    
                </Modal.Body>

            </Modal>

        </div>
    );
};
export default ApprovalForm;