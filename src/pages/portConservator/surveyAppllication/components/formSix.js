import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Row, Col, Container, Modal } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import ApplicationReview from "./reviewApplication";

function RegisterFormSix ({changeTab, handleUpdateForm, ActionType, state}){
    
    const initialValues = {
        
    };


    const onSubmit = (values) => {
       // changeTab("form7");
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
                        <h2>Remarks</h2>
                        <Row className="justify-content-md align-self-end ">
                                <Col md={4} className="">
                                    <label>Section Clerk Remarks</label>
                                    <p className="display_value">xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx</p>
                                </Col>
                                <Col md={4}>
                                    <TextArea 
                                        label="Port Conservator Remark"
                                        id=""
                                        name=""
                                        className="remarks-text"
                                        type="text"
                                        value=""
                                        touched=""
                                        error=""
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextArea 
                                        label="Surveyor Remarks"
                                        id=""
                                        name=""
                                        className="remarks-text"
                                        type="text"
                                        value=""
                                        touched=""
                                        error=""                               
                                    />
                                </Col>
                        </Row>
                    </section>
                </div>
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
            </form>
        </div>
    );

};

export default RegisterFormSix;