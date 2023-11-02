import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/button";

const ApprovalForm = ({ show,handleClose }) => {
    
    const [annexureShow, setAnnexureShow] = useState(false);
    const handleViewClick = () => {
        setAnnexureShow(!annexureShow);
    }

    return (
        <div>
            <Modal
                show = {show}
                onHide = {handleClose}
                backdrop = "static"
                keyboard = {false}
                size = "xl"
                className=""
            >
                
                <Modal.Header closeButton>
                    
                    <Row className="col-md-12">
                        <Col md={8}>
                            <h4 className="modal-head">Form Number 4</h4>
                            <h2>Appointment of date and time of inspection of the Inland Vessel by the Registering Authority</h2>                        
                        </Col>
                        <Col md={4} className="d-flex justify-content-end">
                            <Button
                                label="Download"
                                className="btn-outline btn-download"
                            />
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body className="inspection">
                    <Container>
                    <p><strong>Date:</strong> 25/08/2023
                    <br />
                    <strong>Reference Number:</strong> Reference Number </p>
                    <p>
                        To
                        <br />
                        The Owner or Master on the Inland Vessel
                        <br />
                        Name Displayed                        
                    </p>
                    
                    <p>
                        Sir/Madam
                        < br/>
                        In acknowledging the receipt of your application for registration of the vessel named above under Inland Vessels Act 2021, this is to state that Registering Authority or Surveyor shall proceed on board the vessel at  hours on <strong>Display Data day</strong> of <strong>Display Data</strong>
                        <br />
 You are requested to afford to the Registering Authority or Surveyor all reasonable facilities for the registration of the Inland Vessel and all such information respecting the vessel as he may require for the purpose of registration.
                    </p>
                    
                        <Row className="d-flex justify-content-end">
                            <div className="d-flex align-items-end flex-column">
                            <strong>Yours faithfully</strong>
                            <strong>Registering Authority</strong>
                            Inland Vessels
                            </div>
                        </Row>
                        </Container>
                   
                </Modal.Body>

            </Modal>

        </div>
    );
};
export default ApprovalForm;

