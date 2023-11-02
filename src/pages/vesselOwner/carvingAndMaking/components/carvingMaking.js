import React from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const CarvingNote = ({
    show,
    handleClose   
}) => {


    return (
        <div>
            <Modal
                show = { show }
                onHide = { handleClose }
                backdrop = "static"
                keyboard = { false }
                size = "xl"             
            >
                <Modal.Header closeButton>
                    
                    <Row className="col-md-12">
                        <Col md={6}>
                            <h4 className="modal-head">Form Number 5</h4>
                            <h2>Carving and Marking Note</h2>                        
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <Button className="btn-outline btn-download">Download</Button>
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body className="carving">
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
                        This has reference to your application for registration of the above named vessel and subsequent enquiry of the vessel conducted under rule 6 of these rules, you are advised to have the below enumerated marks carved on the vessel's hull under rule 9 of these rules:
                        <br />
                    </p>
                    <p className="card">
                        <Container>
                        <Row>
                            <Col md="4">
                                <label>Name of the Vessel</label>
                                <p>
                                Display Field
                                </p>
                            </Col>
                            <Col md="4">
                                <label>Official Number</label>
                                <p>
                                Display Field
                                </p>
                            </Col>
                            <Col md="4">
                                <label>Port of Registry</label>
                                <p>
                                Display Field
                                </p>
                            </Col>
                            <Col md="4">
                                <label>Year of Registry</label>
                                <p>
                                Display Field
                                </p>
                            </Col>
                        </Row>
                        </Container>
                    </p>
                    <p>
                    You are further advised to contact this office after the completion of requisite carving (which in no case shall be greater than fifteen days from the date of issue of this letter) for final inspection for the purpose of registering this vessel.
                    <br />
 Please also be advised that you shall be required to surrender this carving note in original at the time of issuance of Certificate of Registration.
                    </p>
                    <Container>
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
}
export default CarvingNote;