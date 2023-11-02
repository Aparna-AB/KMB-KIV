import { useEffect } from "react";
import { useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import SelectBox from "../../../../components/Selectbox";

function RegisterFormFour({changeTab, handleUpdateForm, ActionType, state}){



    const inputFields1 = [
        {
            label: "Number ,size and Capacity of fire pumps",
            id: "pump_prop",
            name:  "pump_prop",
            type: "text"
        },
        {
            label: "Fire mains, diameter, material and no. of Hydrants",
            id: "firemains",
            name:  "firemains",
            type: "text"
        },
        {
            label: "Any other equipment",
            id: "other_equipment",
            name:  "other_equipment",
            type: "text"
        },
    ];
    const inputFields2 = [
        {
            label: "Soda Acid",
            id: "soda_acid",
            name: "soda_acid",
            type: "text",
            required: true
        },
        {
            label: "Foam",
            id: "foam",
            name: "foam",
            type: "text",
            required: true
        },
        {
            label: "Dry Powder",
            id: "dry_powder",
            name: "dry_powder",
            type: "text",
            required: true
        },
        {
            label: "Any other types",
            id: "other_types",
            name: "other_types",
            type: "text",
            required: true
        },        

    ];
    


    const initialValues = {
        pump_prop: "",
        firemains: "",
        other_equipment: "",
        nozzle: "",
        hoses: "",
        soda_acid: "",
        foam: "",
        dry_powder: "",
        other_types: "",
        commu_equi_details: "",
        nav_equi_details: "",
      };


    const onSubmit = (values) => {
        changeTab("form5");
        handleUpdateForm(values, ActionType.FORM_TWO);
      };
    
    const formik = useFormik({
         initialValues,
        // validationSchema,
        onSubmit,
      });
    useEffect (() => {

        const {
            pump_prop, firemains, other_equipment, nozzle, hoses, soda_acid, foam, dry_powder,
            other_types, commu_equi_details, nav_equi_details
        } = state || {};

        const fieldValues = {
            pump_prop, firemains, other_equipment, nozzle, hoses, soda_acid, foam, dry_powder,
            other_types, commu_equi_details, nav_equi_details
        };

        Object.keys(fieldValues).forEach((field) => {
            formik.setFieldValue(field, fieldValues[field] ?? "");
        });

    }, []);

    return (
        <div>
            <Row>
                <h4>Form Number 7 </h4>
                <h2>Fire And Other Particulars</h2>
            </Row>
            <form onSubmit={formik.handleSubmit} >
            <section>
                <Row>
                    <h2>Particulars of Fire Appliances</h2>
                </Row>
                
                <Row>
                    {inputFields1.map((input) => (
                        <Col md={4}>
                            <TextArea
                            label={input.label}
                            id = {input.id}
                            name={input.name}
                            type={input.type}
                            />
                        </Col>
                    ) ) }
                    <Col md={4}>
                    <SelectBox
                    label = "Nozzles"
                    name  = "nozzle"
                    required = {true}
                    />
                    </Col>
                    <Col md={4}>
                    <TextBox
                    label = "Number of hoses*"
                    name  = "hoses"
                    id = "hoses"
                    type="text"
                    required = {true}
                    />
                    </Col>

                </Row>
            </section>
            <section>
                <Row>
                    <h2>No. of Portable Fire Extinguisher with Particulars and name of Manufactures </h2>
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
            </section>
            <section>
                <Row>
                    <h2>Particulars of Communication Equipment</h2>
                </Row>
                <Row>
                    <Col md={4}>
                        <TextArea
                            label = "Equipment Details"
                            id = "commu_equi_details"
                            name= "commu_equi_details"
                            type = "text"                        
                        />
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <h2>Particulars of Navigation Equipment</h2>
                </Row>
                <Row>
                    <Col md={4}>
                        <TextArea
                            label = "Equipment Details"
                            id = "nav_equi_details"
                            name= "nav_equi_details"
                            type = "text"                        
                        />
                    </Col>
                </Row>
                <Container className="container">
                    <Row className="button-container">
                        <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                                label="Back"                                
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
            </section>
            </form>

        </div>


    );

}

export default RegisterFormFour;