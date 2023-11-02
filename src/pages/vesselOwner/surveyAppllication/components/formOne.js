import { useEffect } from "react";
import { Field, useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import SelectBox from "../../../../components/Selectbox";
import Button from "../../../../components/button";


function RegisterFormOne({changeTab, handleUpdateForm, ActionType, state}){

    const files_to_upload = [
        {
            label: "Signature of owner/Master/Authorized Person",
            id: "signature",
            name:  "signature",
            type: "file"
        },
        {
            label: "Proof of Payment of survey fee and other charges",
            id: "payment_proof",
            name:  "payment_proof",
            type: "file",
        },
        {
            label: "Copy of last certificate of survey",
            id: "last_survey_certificate",
            name:  "last_survey_certificate",
            type: "file",
        },
        {
            label: "Copy of Certificate of Registration",
            id: "register_certificate",
            name:  "register_certificate",
            type: "file",
        },
        {
            label: "Document establishing the Authority of Authorized Person (if making request)",
            id: "authorised_doc",
            name:  "authorised_doc",
            type: "file",
        }
        
    ];

    const initialValues = {
        user_type: "",
        date: "",
        survey_type: "",
        chief_surveyor: "",
        vessel_name: "",
        vessel_number: "",
        place: "",
        registry: "",
        tonnage: "",
        vessel_type: "",
        vessel_category: "",
        builder_name: "",
        builder_address: "",
        build_year: "",
        hull_dimension: "",
        place_last_survey: "",
        date_last_survey: "",
        owner_name: "",
        owner_phone: "",
        owner_address: "",
        agent_name: "",
        agent_number: "",
        agent_address: "",
        machinery: "",
        machinery_details: "",
        purposed_survey_date: "",
        purposed_survey_time: "",
        purposed_survey_place: "",
        signature: "",
        payment_proof: "",
        register_certificate: "",
        authorised_doc: "",
        last_survey_certificate: "",
    };

    const onSubmit = (values) => {
        changeTab("form2");
        handleUpdateForm(values, ActionType.FORM_TWO);
    };

    const formik = useFormik({
        initialValues,
        //validationSchema,
        onSubmit,
     });

    useEffect(() => {

        const { user_type, date,survey_type, chief_surveyor, vessel_name, vessel_number, place, registry, tonnage, 
            vessel_type, vessel_category, builder_name, builder_address, build_year, hull_dimension, place_last_survey, 
            date_last_survey, owner_name, owner_phone, owner_address, agent_name, agent_number, agent_address, machinery, 
            machinery_details, purposed_survey_date, purposed_survey_time, purposed_survey_place, signature, ayment_proof, 
            register_certificate, authorised_doc, last_survey_certificate } = state;

        const fieldValues = {  user_type, date,survey_type, chief_surveyor, vessel_name, vessel_number, place, registry, tonnage, 
            vessel_type, vessel_category, builder_name, builder_address, build_year, hull_dimension, place_last_survey, 
            date_last_survey, owner_name, owner_phone, owner_address, agent_name, agent_number, agent_address, machinery, 
            machinery_details, purposed_survey_date, purposed_survey_time, purposed_survey_place, signature, ayment_proof, 
            register_certificate, authorised_doc, last_survey_certificate  };

        Object.keys(fieldValues).forEach((field) => {
            formik.setFieldValue(field,fieldValues[field] ?? "");
        });

    }, []);
    
    return (
        <div>
            <div className="row">
                <h4>Form Number 1</h4>
                <h2>Application For Conducting Survey of Inland Vessels</h2>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <Row className="justify-content-md">
                    <Col md={4}>
                        <SelectBox
                        label = "User Type"
                        name  = "user_type" 
                        required = {true}                       
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Date"
                        name = "date"
                        id = "id"
                        type="date"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <SelectBox
                        label = "Survey Type"
                        name  = "survey_type" 
                        required = {true}                       
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Applying to Chief Surveyor"
                        name = "chief_surveyor"
                        id = "chief_surveyor"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Name of Vessel"
                        name = "vessel_name"
                        id = "vessel_namde"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Official Number of Vessel"
                        name = "vessel_number"
                        id = "vessel_number"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Place"
                        name = "place"
                        id = "place"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <SelectBox
                        label = "Port of Registry of Vessel"
                        name  = "registry" 
                        required = {true}                       
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Registered Tonnage"
                        name = "tonnage"
                        id = "tonnage"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <SelectBox
                        label = "Vessel Type"
                        name  = "vessel_type" 
                        required = {true}                       
                        />
                    </Col>
                    <Col md={4}>
                        <SelectBox
                        label = "Category of Vessel"
                        name  = "vessel_category"
                        required = {true}                       
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Name of Builder"
                        name = "builder_name"
                        id = "builder_name"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextArea
                            label = "Address of Builder"
                            id = "builder_address"
                            name= "builder_address"
                            type = "text"
                            />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Year of Build"
                        name = "build_year"
                        id = "build_year"
                        type="date"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Hull Dimension"
                        name = "hull_dimension"
                        id = "hull_dimension"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Place of Last Survey"
                        name = "place_last_survey"
                        id = "place_last_survey"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Date of Last Survey"
                        name = "date_last_survey"
                        id = "date_last_survey"
                        type="date"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Owners Name"
                        name = "owner_name"
                        id = "owner_name"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Owners Mobile Number"
                        name = "owner_phone"
                        id = "owner_phone"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextArea
                            label = "Address of Owner"
                            id = "owner_address"
                            name= "owner_address"
                            type = "text"
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Name of Agent"
                        name = "agent_name"
                        id = "agent_name"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Agent Number"
                        name = "agent_number"
                        id = "agent_number"
                        type="text"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextArea
                            label = "Address of Agent"
                            id = "agent_address"
                            name= "agent_address"
                            type = "text"
                        />
                    </Col>
                    <Col md={4}>
                        <TextArea
                            label = "Type And BHP of Main Propulsion Machinery"
                            id = "machinery"
                            name= "machinery"
                            type = "text"
                        />
                    </Col>
                    <Col md={4}>
                        <TextArea
                            label = "Details of Other Machinery"
                            id = "machinery_details"
                            name= "machinery_details"
                            type = "text"
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Date of Purposed Survey"
                        name = "purposed_survey_date"
                        id = "purposed_survey_date"
                        type="date"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextBox
                        label = "Time of Purposed Survey"
                        name = "purposed_survey_time"
                        id = "purposed_survey_time"
                        type="date"
                        required = {true}
                        />
                    </Col>
                    <Col md={4}>
                        <TextArea
                            label = "Place of Purposed Survey"
                            id = "purposed_survey_place"
                            name= "purposed_survey_place"
                            type = "text"
                        />
                    </Col>

                    {files_to_upload.map((input) => (
                        <Col md={4} className="d-flex align-items-end">
                            <TextBox
                                label={input.label}
                                id={input.id}
                                name={input.name}
                                type={input.type}                            
                            />
                        </Col>
                    ))}
                </Row>
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
