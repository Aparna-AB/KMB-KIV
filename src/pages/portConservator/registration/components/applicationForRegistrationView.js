import React from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import "../styles.scss";

const RegistrationForm = ({
    show,
    handleClose   
}) => {

    const displayfields = [
        {
            label: "Owner's name and address in full",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx ",
        },
        {
            label: "Name of Master and his Certificate No.",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx ",
        },
        {
            label: "Occupation",
            value: "Display Field",
        },
        {
            label: "Name of Registry and No. if previously registered",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx  ",
        },
        {
            label: "When and how the vessel was secured",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx  ",
        },
        {
            label: "Kind of vessel viz. motor, name and address of engine makers with horsepower, speed and year of make",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx ",
        },
        {
            label: "Name and address of builders with place and year of built",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx ",
        },
        {
            label: "Details of Insurance Certificate",
            value: "xxxxxxx xxxx xxxxx xxxx xxxx xx xxxxxx xxxx xxx x xxxxxxx xxxxxxx ",
        }
    ];
    const displayfiles = [
        {
            label: "a) A declaration by the Owner that the provisions of the Act and the rules made thereunder have been complied with; certificate of survey or provisional certificate of survey",
            value: "Display File Name",
        },
        {
            label: "b) Copy of the 3rd party insurance certificate of the vessel duly attested",
            value: "Display File Name",
        },
        {
            label: "c) Builder's certificate for new vessels",
            value: "Display File Name",
        },
        {
            label: "d) Instrument of sale (for second hand vessels)",
            value: "Display File Name",
        },
        {
            label: "e) Mortgage details and",
            value: "Display File Name",
        },
        {
            label: "f) Declaration of Ownership",
            value: "Display File Name",
        },
        {
            label: "g) Online receipt evidencing payment of fees for the registration of the vessel",
            value: "Display File Name",
        }
    ];

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
                            <h4 className="modal-head">Form Number 2 </h4>
                            <h2>Application for Registration</h2>                        
                        </Col>
                        
                    </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <p>
                                To
                                <br />
                                <strong>The Registering Authority</strong>  
                                <br />
                                Name Displayed
                            </p>
                            <p>
                            I, Display Name Resident of Display Address being the Owner or Master of an Inland Vessel Display Vessel Name hereby request that the said vessel be registered at the Display Details

                            </p>
                            <p>
                            I agree to pay such fees as may be payable under the rules. Particulars in respect of the said Vessel are as under :
                            </p>
                            <section className="card">
                                <Container>
                                    <Row>
                                        {displayfields.map((input) => (
                                            <Col md={4} className="align-self-end">
                                                <label>{input.label}</label>
                                                <p className="display_field">{input.value}</p>
                                            </Col>

                                        ) ) }
                                    </Row>
                                    <Row>
                                        <h4>Enclosures:</h4>
                                    </Row>
                                    <Row>
                                        <div className="enclosures">
                                        {displayfiles.map((input) => (
                                            <Col md={12}>
                                                <label>{input.label}</label>
                                                <a href="#"><FontAwesomeIcon icon={faPaperclip} />   {input.value}</a>

                                            </Col>
                                        ))}
                                        </div>
                                    </Row>
                                    </Container>
                            </section>
                            <section className="sec-signature">
                                <Row>
                                    <Col md={6}>
                                        <p><strong>Place</strong>  <span>Display Place</span> </p>
                                        <p><strong>Date</strong> <span>Display Date</span></p>
                                        
                                    </Col>
                                    <Col md={6}>
                                    <p><span>Signature of Owner or Master of the Vessel</span></p>
                                        
                                    </Col>
                                </Row>
                            </section>
                            <section>
                                <Row className="remarks">
                                    <Col md={4}>
                                        <TextArea
                                        label= "Section Clerk Remark"
                                        id = "sec_clerk_remark"
                                        name= "sec_clerk_remark"
                                        type= "text"
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <TextArea
                                        label= "Port Conservator Remark"
                                        id = "port_cons_remark"
                                        name= "port_cons_remark"
                                        type= "text"
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <TextArea
                                        label= "Registering Authority Remarks"
                                        id = "reg_auth_remark"
                                        name= "reg_auth_remark"
                                        type= "text"
                                        />
                                    </Col>

                                </Row>
                            </section>
                        </Container>
                        <Container className="container">
                            <Row className="button-container">
                                <Col className="btn-col address-button d-flex justify-content-center">
                                    <Button
                                    label="Reject"
                                    className="btn-sucess float-right btn-outline"
                                    />
                                    <Button
                                    label="Approve"
                                    type="submit"
                                    className="btn-sucess float-right btn-default"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
            </Modal>
        </div>

    );

};

export default RegistrationForm;