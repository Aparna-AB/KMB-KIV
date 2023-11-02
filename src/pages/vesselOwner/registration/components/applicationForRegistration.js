import React from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";

import "../styles.scss";

const RegistrationForm = ({
    show,
    handleClose   
}) => {

    const onSubmit = (values) => {

    }
    const formik = useFormik({
        onSubmit,
    });

    const files_to_upload = [
        {
            label: "a) A declaration by the Owner that the provisions of the Act and the rules made thereunder have been complied with; certificate of survey or provisional certificate of survey",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "b) Copy of the 3rd party insurance certificate of the vessel duly attested",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "c) Builder's certificate for new vessels",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "d) Instrument of sale (for second hand vessels)",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "e) Mortgage details and",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "f) Declaration of Ownership",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "g) Online receipt evidencing payment of fees for the registration of the vessel",
            id: "signature",
            name:  "signature",
            type: "file"
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
                <form className="form-control" onSubmit={formik.handleSubmit}>
                    <Modal.Header closeButton>
                        <Row>
                            <h4 className="modal-head">Form Number 2 </h4>
                            <h2 className="modal-head">Application For Registration </h2>
                        </Row>

                    </Modal.Header>
                    <Modal.Body>
                        <section>
                            <Row>
                                <Col md={4}>
                                    <TextBox
                                        label = "Registering Authority"
                                        name = "authority"
                                        id = "authority"
                                        type="text"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Applicant Name"
                                        name = "name"
                                        id = "name"
                                        type="text"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextArea
                                        label = "Applicant Address"
                                        id = "address"
                                        name= "address"
                                        type = "text"
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Name of Vessel"
                                        name = "v_name"
                                        id = "v_name"
                                        type="text"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Registered at"
                                        name = "reg_at"
                                        id = "reg_at"
                                        type="text"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Application Date"
                                        name = "app_date"
                                        id = "app_date"
                                        type="date"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Signature of Owner or Master of the Vessel"
                                        name = "sign"
                                        id = "sign"
                                        type="file"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Place"
                                        name = "place"
                                        id = "place"
                                        type="date"
                                        required = {true}
                                    />
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <Row className="align-self-end">
                                <h2></h2>
                            <h4>I agree to pay such fees as may be payable under the rules. Particulars in respect of the said Vessel are as under :</h4>
                                <Col md={4}>
                                    <TextArea
                                    label = "Owner's name and address in full"
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                                <Col md={4}>
                                    <TextArea
                                    label = "Name of Master and his Certificate No."
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                                <Col md={4}>
                                    <TextBox
                                        label = "Occupation*"
                                        name = "occupation*"
                                        id = "occupation*"
                                        type="date"
                                        required = {true}
                                    />
                                </Col>
                                <Col md={4} className="align-self-end">
                                    <TextArea
                                    label = "Name of Registry and No. if previously registered"
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                                <Col md={4} className="align-self-end">
                                    <TextArea
                                    label = "When and how the vessel was secured"
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                                <Col md={4}>
                                    <TextArea
                                    label = "Kind of vessel viz. motor, name and address of engine makers with horsepower, speed and year of make"
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                                <Col md={4}>
                                    <TextArea
                                    label = " Name and address of builders with place and year of built"
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                                <Col md={4} className="align-self-end">
                                    <TextArea
                                    label = "Details of Insurance Certificate"
                                    id = "own_name"
                                    name= "own_name"
                                    type = "text"
                                     />
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <h4>Enclosures:</h4>
                                {/* <Col md={6}>
                                    <div className="text-box">
                                    <label>dfesfsfsd</label>
                                    </div>
                                </Col>
                                <Col md={6}>
                                <TextBox
                                        name = "occupation*"
                                        id = "occupation*"
                                        type="file"
                                    />
                                </Col> */}
                                <div className="enclosures">
                                {files_to_upload.map((input) => (
                                    <Col md={12}>
                                        <TextBox
                                        label = {input.label}
                                        name = "prop_build_year"
                                        id = "prop_build_year"
                                        type="file"
                                        required = {true}
                                        />
                                    </Col>
                                ))}
                                </div>
                            </Row>
                        </section>
                        <Container className="container">
                        <Row className="button-container">
                            <Col className="btn-col address-button d-flex justify-content-center">
                                <Button
                                    label="Cancel"
                                    className="btn-sucess btn-outline"                        
                                />                    
                                <Button
                                    label="Apply"
                                    className="btn-sucess btn-default"
                                />
                            </Col>
                        </Row>
                    </Container>

                    </Modal.Body>
                </form>
            </Modal>
        </div>
    );

};

export default RegistrationForm;