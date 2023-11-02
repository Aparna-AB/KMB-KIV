import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Row, Col, Container, Modal } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import ApplicationReview from "./reviewApplication";

function RegisterFormFive ({changeTab, handleUpdateForm, ActionType, state}){


    const inputFields1 = [
        {
            label: "Sewage treatment and disposal",
            id: "sewage_treatment",
            name: "sewage_treatment",
            type: "text",
            required: true
        },
        {
            label: "Solid waste processing and disposal",
            id: "solid_waste_peocess",
            name: "solid_waste_peocess",
            type: "text",
            required: true
        },
        {
            label: "Sound Pollution Control",
            id: "sound_polution_control",
            name: "sound_polution_control",
            type: "text",
            required: true
        },
        {
            label: "Water Consumption/Day",
            id: "water_consumption",
            name: "water_consumption",
            type: "text",
            required: true
        },
        {
            label: "Water Consumption/Day",
            id: "water_consumption",
            name: "water_consumption",
            type: "text",
            required: true
        }
    ];
    const inputFields2 = [
        {
            label: "Number of Deck Crew",
            id: "deckcrew_no",
            name: "deckcrew_no",
            type: "text",
            required: true
        },
        {
            label: "Number of Engine Crew",
            id: "enginecrew_no",
            name: "enginecrew_no",
            type: "text",
            required: true
        }
    ];
    const displayFields = [
        {
            label: "Date",
            id: "deckcrew_no",
            name: "deckcrew_no",
            type: "text",
            value: "Display Field ",
            class: "display_field"
        },
    ];
    const initialValues = {
        name: "", // Initial date value
        length: "", // Initial survey value
        breadth: "", // Initial chief value
    };


    const onSubmit = (values) => {
        changeTab("form2");
        handleUpdateForm(values, ActionType.FORM_TWO);
    };
    
    const formik = useFormik({
         initialValues,
        // validationSchema,
        onSubmit,
    });

    const [isOpen, setIsOpen] = useState(false);
    const [clickX, setClickX] = useState(null);
    const [clickY, setClickY] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <Row>
                <h4>Form Number 7 </h4>
                <h2>Final Particulars</h2>
            </Row>
            <section>
                <Row>
                    <h2>Particulars of Pollution Control Devices</h2>
                </Row>
                <Row>
                {inputFields1.map((input) => (
                        <Col md={4}>
                            <TextBox
                                label={input.label}
                                id={input.id}
                                name={input.name}
                                type={input.type}
                                onChange={formik.handleChange}
                                value={formik.values[input.name]}
                                touched={formik.touched[input.name]}
                                error={formik.errors[input.name]}
                                required={input.required}
                                key={input.id}
                            />
                        </Col>                          
                    ) ) }
                </Row>
            </section>
            <section>
                <Row>
                    <h2>No. of Deck Crew and Management Crew</h2>
                </Row>
                <Row>
                {inputFields2.map((input) => (
                        <Col md={4}>
                            <TextBox
                                label={input.label}
                                id={input.id}
                                name={input.name}
                                type={input.type}
                                onChange={formik.handleChange}
                                value={formik.values[input.name]}
                                touched={formik.touched[input.name]}
                                error={formik.errors[input.name]}
                                required={input.required}
                                key={input.id}
                            />
                        </Col>                          
                    ) ) }
                </Row>
                <section>
                    <Row>
                        <h2>Number of Passengers</h2>
                        <Col md={4}>
                            <TextBox
                            label = "Number of Passengers"
                            name = "passengers_num"
                            id = "passengers_num"
                            type="text"
                            required = {true}
                            />
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <h2>Plans and Drawings</h2>
                        <Col md={4}>
                            <TextBox
                            label = "Plans and Drawings"
                            name = "plans_and_drawings"
                            id = "plans_and_drawings"
                            type="text"
                            required = {true}
                            />
                        </Col>
                    </Row>
                    <Container className="container">
                        <Row className="button-container">
                            <Col className="btn-col address-button d-flex justify-content-center">
                                <Button
                                    label="Cancel"
                                    onClick={()=>{
                                        changeTab("address");
                                        handleUpdateForm(
                                            formik.values,
                                            ActionType.UPDATE_ADDITIONAL_DETAILS
                                        );
                                    }}
                                    className="btn-sucess float-right btn-outline"                        
                                />                    
                                <Button
                                    label="Review and Pay"
                                    onClick={handleShowModal}
                                    className="btn-sucess float-right btn-default"
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Modal 
                        show={showModal}
                        onHide={handleCloseModal}
                        size="xl"
                    >
                        <Modal.Header closeButton className="vo-review-close-button" style={{ borderBottom: '1px solid #CBC9C966' }}>
                            {/* <div class="d-flex justify-content-between">
                                <h2>Review Application</h2>
                                <Button
                                label="Pay Application Fee"
                                    className="btn-sucess float-right btn-default"
                                />
                            </div> */}
                            <div className="col-md-12">

                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <h2>Review Application</h2>
                                </div>
                                <div>
                                <Button
                                label="Pay Application Fee"
                                    className=" btn-default pay-btn"
                                />
                                </div>
                            </div>
                            </div>
                            
                        </Modal.Header>
                        <Modal.Body>
                            <ApplicationReview />
                        </Modal.Body>
                    
                    </Modal>
                </section>
            </section>
            
        </div>
        
        



    );

};

export default RegisterFormFive;