import { useEffect } from "react";
import { Field, useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../../../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";


function RegisterFormOne({changeTab, handleUpdateForm, ActionType, state}){

    const initialValues = {
        
    };

    const display_fields = [
        {
            label: "Date",
            value: "Display Field"
        },
        {
            label: "Survey Type",
            value: "Display Field"
        },
        {
            label: "Applying to Chief Surveyor at",
            value: "Swathi Gangatharan AP"
        },
        {
            label: "Name of Vessel",
            value: "Display Field"
        },
        {
            label: "Official Number of Vessel",
            value: "Display Field"
        },
        {
            label: "Place",
            value: "Display Field"
        },
        {
            label: "Port of Registry of Vessel",
            value: "Display Field"
        },
        {
            label: "Registered Tonnage",
            value: "Display Field"
        },
        {
            label: "Vessel Type",
            value: "Display Field"
        },
        {
            label: "Category of Vessel",
            value: "Display Field"
        },
        {
            label: "Name of Builder",
            value: "Display Field"
        },
        {
            label: "Address of Builder",
            value: "xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xx x xxxxx"
        },
        {
            label: "Year of Build",
            value: "Display Field"
        },
        {
            label: "Hull Dimension",
            value: "Display Field"
        },
        {
            label: "Place of Last Survey",
            value: "Display Field"
        },
        {
            label: "Date of Last Survey",
            value: "Display Field"
        },
        {
            label: "Owners Name",
            value: "Display Field"
        },
        {
            label: "Owners Mobile Number",
            value: "Display Field"
        },
        {
            label: "Address of Owner",
            value: "xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xx x xxxxx"
        },
        {
            label: "Name of Agent",
            value: "Display Field"
        },
        {
            label: "Agent Number",
            value: "Display Field"
        },
        {
            label: "Address of Agent",
            value: "xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xx x xxxxxxxx"
        },
        {
            label: "Type And BHP of Main Propulsion Machinery",
            value: "xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xx x xxxxx"
        },
        {
            label: "Details of Other Machinery",
            value: "xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xx x xxxxx"
        },
        {
            label: "Date of Purposed Survey",
            value: "Display Field "
        },
        {
            label: "Time of Purposed Survey",
            value: "Display Field "
        },
        {
            label: "Place of Purposed Survey",
            value: "Display Field "
        }
    ];
    const display_files = [
        {
            label: "Signature of owner/Master/Authorized Person",
            value: "Display Selection "
        },
        {
            label: "Proof of Payment of survey fee and other charges",
            value: "Display Selection "
        },
        {
            label: "Copy of Certificate of Registration",
            value: "Display Selection "
        },
        {
            label: "Copy of last certificate of survey",
            value: "Display Selection "
        },
        {
            label: "Document establishing the Authority of Authorized Person (if making request)",
            value: "Display Selection "
        }
    ];

    const onSubmit = (values) => {
        changeTab("form2");
        handleUpdateForm(values, ActionType.FORM_TWO);
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
     });

    useEffect(() => {

    }, []);
    
    return (
        <div>
            <div className="row">
                <h4>Form Number 1</h4>
                <h2>Application For Conducting Survey of Inland Vessels</h2>
            </div>
            <form onSubmit={formik.handleSubmit} >
            <div className="card review-card">
                <Row className="justify-content-md">
                    {display_fields.map((input) => (
                        <Col md={4} className="align-self-end">
                            <label>{input.label}</label>
                            <p className="display_value">{input.value}</p>
                        </Col>
                    ))}
                    {display_files.map((input) => (
                        <Col md={4} className="align-self-end">
                        <label>{input.label}</label>
                        <p className="display_value">
                        <FontAwesomeIcon icon={faPaperclip} />  {input.value}</p>
                    </Col>
                    ))}
                </Row>
            </div>
                                
                <Container className="container">
                    <Row className="button-container">
                        <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                                label="Cancel"
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

export default RegisterFormOne;
