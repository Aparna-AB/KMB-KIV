import { useEffect } from "react";
import { useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

function RegisterFormthree({changeTab, handleUpdateForm, ActionType, state}){

    
    
    const initialValues = {
        
    };
    const display_fields = [
        {
            label: "No of sets fitted and Sr. Number",
            value: "Display Field"
        },
        {
            label: "Manufacture's Name and Brand",
            value: "Display Field"
        },
        {
            label: "Model Number ",
            value: "Display Field"
        },
        {
            label: "Type of Engine with Horse Power of each",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Stroke and Cylinder Diameter",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Diameter of propulsion shaft and material",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Year of Build",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        }        
    ];
    const display_fields2 = [
        {
            label: "Anchor-Spare (Weight and Material of each equipment)",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Anchor-Port, Starboard(Weight and Material of each)",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Chain: Size Type and length and test certificate (Port)",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Chain: Size Type and length and test certificate (Starboard)",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Ropes-Size, material and no of ropes",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Search Lights, number, size and power",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Lifebuoys, Buoyant apparatus with Self Ignited Lights, No. with buoyant lanyard",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Navigation Lights giving particulars and certificate, main mast, auxiliary mast, port, Starboard, Stem, Anchor not under command",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Shapes for anchor not under command",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Sound signals: Mechanical or Electrical",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        }
    ];

    const onSubmit = (values) => {
        changeTab("form4");
        handleUpdateForm(values, ActionType.FORM_TWO);
    };

    const formik = useFormik({
        initialValues,
        //validationSchema,
        onSubmit,
     });

     useEffect (() => {
        
     }, []);

     return (
        <div>
            <div className="row">
                <h4>Form Number 7</h4>
                <h2>Propulsion And Equipment</h2>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <div className="card review-card">
                    <h2>Particulars of Propulsion of Engines</h2>
                    <section>
                        <Row className="justify-content-md ">
                            {display_fields.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}
                            <Col md={4}>
                                <label>Test Certificate</label>
                                <p className="display_value"><FontAwesomeIcon icon={faPaperclip} />{"Display File Name "}</p>
                            </Col>
                            <Col md={4} className="align-self-start">
                                <label>Type and No. of gears</label>
                                <p className="display_value">{"xxxxx xxxxxx xxxx xxx xxxx xxxxxxxxx. "}</p>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <h2>Particulars of Equipment</h2>
                            {display_fields2.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}

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

}

export default RegisterFormthree;
