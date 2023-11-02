import { useEffect } from "react";
import { useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../../../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

function RegisterForm({changeTab, handleUpdateForm, ActionType, state}){

    

    const initialValues = {        
    };
    const display_fields = [
        {
            label: "Name of Vessel (if already named)/Yard Number",
            value: "Display Field"
        },
        {
            label: "Length of Vessel",
            value: "Display Field"
        },
        {
            label: "Breadth of Vessel",
            value: "Display Field"
        },
        {
            label: "Breadth of Vessel",
            value: "Display Field"
        },
        {
            label: "Depth of Vessel",
            value: "Display Field"
        },
        {
            label: "Vessel Type",
            value: "Display Field"
        },
        {
            label: "Owner Address",
            value: "xxxxxx xxxx xxxxxxxxxx xxxxx xxxx x xx x  x xx x xxxx x xxx"
        },
        
    ];
    const display_fields2 = [
        {
            label: "Material of Hull",
            value: "Display Field"
        },
        {
            label: "Year of Build",
            value: "Display Field"
        },
        {
            label: "Builders Name",
            value: "Display Field"
        },
        {
            label: "Builders Address",
            value: "xxxxxx xxxx xxxx xxx xxxxxxxxx xx xxx xxxx x xxxx"
        },
        {
            label: "No. of Bulk Heads ,their Placement and Thickness",
            value: "xxxxxx xxxx xxxx xxx xxxxxxxxx xx xxx xxxx x xxxx"
        },
        {
            label: "Hull Plaiting Materials and Thickness",
            value: "xxxxxx xxxx xxxx xxx xxxxxxxxx xx xxx xxxx x xxxx"
        },
        {
            label: "Frames(Material and thickness)",
            value: "xxxxxx xxxx xxxx xxx xxxxxxxxx xx xxx xxxx x xxxx"
        },
        {
            label: "Floors(Material and thickness)",
            value: "xxxxxx xxxx xxxx xxx xxxxxxxxx xx xxx xxxx x xxxx"
        }        
    ];


    const onSubmit = (values) => {
        changeTab("form3");
        handleUpdateForm(values, ActionType.FORM_THREE);
    };
    
    const formik = useFormik({
         initialValues,
        // validationSchema,
        onSubmit,
    });

    useEffect(() => {

        
    }, []);
    
    return (
        <div>
            <div className="row">
                <h4>Form Number 7 </h4>
                <h2>Particular To Be Furnished For Survey Of New Vessel Or Vessels Which Are To Be Surveyed For The First Time</h2>
            </div>
            <form  onSubmit={formik.handleSubmit}>
                <div className="card review-card">
                    <section>
                        <Row className="justify-content-md">
                            {display_fields.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}                                                                                         
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <h2>Particulars of Hull</h2>
                            {display_fields2.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}  
                            <Col md={4} className="align-self-start">
                                <label>Builders Certificates</label>
                                <p className="display_value">
                                    <FontAwesomeIcon icon={faPaperclip} />{"Display File Name "}
                                </p>
                            </Col>
                        </Row>
                    </section>
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

};

export default RegisterForm;
