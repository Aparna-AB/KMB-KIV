import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Row, Col, Container, Modal } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import ApplicationReview from "./reviewApplication";

function RegisterFormFive ({changeTab, handleUpdateForm, ActionType, state}){


    
    const display_fields = [
        {
            label: "Sewage treatment and disposal",
            value: "Display Field "
        },
        {
            label: "Solid waste processing and disposal",
            value: "Display Field "
        },
        {
            label: "Sound Pollution Control",
            value: "Display Field "
        },
        {
            label: "Water Consumption/Day",
            value: "Display Field "
        },
        {
            label: "Source of Water",
            value: "Display Field "
        },
    ];
    const display_fields2 = [
        {
            label: "Number of Deck Crew",
            value: "Display Field "
        },
        {
            label: "Number of Engine Crew",
            value: "Display Field "
        },
    ];
    const initialValues = {
        
    };


    const onSubmit = (values) => {
        changeTab("form6");
        handleUpdateForm(values, ActionType.FORM_TWO);
    };
    
    const formik = useFormik({
         initialValues,
        // validationSchema,
        onSubmit,
    });

    return (
        <div>
            <Row>
                <h4>Form Number 7 </h4>
                <h2>Final Particulars</h2>
            </Row>
            <form onSubmit={formik.handleSubmit} >
                <div className="card review-card">
                    <h2>Particulars of Pollution Control Devices</h2>
                    <section>
                        <Row className="justify-content-md ">
                            {display_fields.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}
                        </Row>
                    </section>
                    <section>
                        <h2>No. of Deck Crew and Management Crew </h2>
                        <Row className="justify-content-md ">
                            {display_fields2.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}
                        </Row>
                    </section>
                    <section>
                        <h2>Number of Passengers</h2>
                        <Row className="justify-content-md ">
                            <Col md={4}>
                                <label>Number of Passengers</label>
                                <p className="display_value">Display Field</p>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <h2>Plans and Drawings</h2>
                        <Row className="justify-content-md ">
                            <Col md={4}>
                                <label>Plans and Drawings</label>
                                <p className="display_value">xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx</p>
                            </Col>
                        </Row>
                    </section>
                </div>
                <Container className="container">
                    <Row className="button-container">
                        <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                                label="Back"
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
                                label="Next"
                                type="submit"
                                className="btn-sucess float-right btn-default"
                            />
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    );

};

export default RegisterFormFive;
