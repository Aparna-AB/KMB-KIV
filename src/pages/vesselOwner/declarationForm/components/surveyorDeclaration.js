import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/button";
import AnnexureForm from "./AnnexureFormtwo";

const ApprovalForm = ({ show,handleClose }) => {
    
    const [annexureShow, setAnnexureShow] = useState(false);
    const handleViewClick = () => {
        setAnnexureShow(!annexureShow);
    }
    

    return (
        <div>
            { annexureShow && <AnnexureForm show={show} handleClose={handleClose} />}
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
                        <p className="aproval-form-name">Form Number 3 </p>
                        <h2>Application for Certificate of Competency</h2>
                    </div>
                </Modal.Header>
                <Modal.Body className="declaraion">
                    <p><strong>Reference Number:</strong>  Reference Number </p>
                    <p><strong>Date:</strong> 08/08/2023</p>
                    <p>
                        This is to certify that I have surveyed the Inland Vessel named <strong>MV Kingship</strong>, Official Number <strong>321425A</strong> in accordance with Inland Vessel Act,2021 and the rules made thereunder.</p>
                    <p>
                        During the survey, the condition of the vessel and its equipment was found, as detailed in the “Record of Equipment and Vessel Information” attached as annexure to this Declaration of Survey.</p>
                    <p>
                        Based on the details contained in the Record of Vessel Equipment and Vessel Information together with the number and qualification of the personnel manning the vessel, the vessel is fit for the service stated in the Certificate of Survey, and worthy of the trade or purpose stated therein.</p>
                    <p>This declaration of Survey is valid up to sixty days from the date of declaration mentioned above.
                    </p>
                    <p>
                        <signature>Surveyor signature displayed</signature>
                    </p>
                    
                        <Row>
                            <p className="enclosure" >Enclosure: Record of Equipment and Vessel Information</p>
                        </Row>
                   
                    <Container className="container">
                    <Row className="button-container">
                        <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                                label="Back"                                
                                className="btn-sucess float-right btn-outline"                        
                            />                    
                            <Button
                                label="Next"
                                type="submit"
                                className="btn-sucess float-right btn-default"
                                onClick={handleViewClick}
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