import { useEffect } from "react";
import { useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";

function RegisterFormthree({changeTab, handleUpdateForm, ActionType, state}){

    const inputFields1 = [
        {
            label: "No of sets fitted and Sr. Number",
            id: "no_sets",
            name: "no_sets",
            type: "text",
            required: true,
        },
        {
            label: "Manufacture's Name and Brand",
            id: "manuf_name",
            name: "manuf_name",
            type: "text",
            required: true,
        },
        {
            label: "Model Number",
            id: "modal_number",
            name: "modal_number",
            type: "text",
            required: true,
        },
    ];
    const inputFields2 = [
        {
            label: "Type of Engine with Horse Power of each",
            id: "engine_type",
            name:  "engine_type",
            type: "text"
        },
        {
            label: "Stroke and Cylinder Diameter",
            id: "stroke_cylinder",
            name:  "stroke_cylinder",
            type: "text"
        },
        {
            label: "Diameter of propulsion shaft and material*",
            id: "prop_diameter",
            name:  "prop_diameter",
            type: "text"
        },
    ];
    const inputFields3 = [
        {
            label: "Anchor-Spare (Weight and Material of each equipment)",
            id: "anchor_squre",
            name:  "anchor_squre",
            type: "text"
        },
        {
            label: "Anchor-Port, Starboard(Weight and Material of each)",
            id: "anchor_port",
            name:  "anchor_port",
            type: "text"
        },
        {
            label: "Chain: Size Type and length and test certificate (Port)",
            id: "chain_port",
            name:  "chain_port",
            type: "text"
        },
        {
            label: "Chain: Size Type and length and test certificate (Starboard)",
            id: "chain_starboard",
            name:  "chain_starboard",
            type: "text"
        },
        {
            label: "Ropes-Size, material and no of ropes",
            id: "ropes_size",
            name:  "ropes_size",
            type: "text"
        },
        {
            label: "Search Lights, number, size and power",
            id: "search_light_prop",
            name:  "search_light_prop",
            type: "text"
        },
        {
            label: "Lifebuoys, Buoyant apparatus with Self Ignited Lights, No. with buoyant lanyard",
            id: "lifebuoys",
            name:  "lifebuoys",
            type: "text"
        },
        {
            label: "Navigation Lights giving particulars and certificate, main mast, auxiliary mast, port, Starboard, Stem, Anchor not under command",
            id: "nav_lights",
            name:  "nav_lights",
            type: "text"
        },
        {
            label: "Shapes for anchor not under command",
            id: "anchor",
            name:  "anchor",
            type: "text"
        }
    ];
    
    const initialValues = {
        no_sets: "",
        manuf_name: "",
        modal_number: "",
        engine_type: "",
        stroke_cylinder: "",
        prop_diameter: "",
        prop_build_year: "",
        prop_test_certificate: "",
        prop_type_gears: "",
        anchor_squre: "",
        anchor_port: "",
        chain_port: "",
        chain_starboard: "",
        ropes_size: "",
        search_light_prop: "",
        lifebuoys: "",
        nav_lights: "",
        anchor: "",
    };

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
        const { 
            no_sets, manuf_name, modal_number, engine_type, stroke_cylinder, prop_diameter, prop_build_year, prop_test_certificate, prop_type_gears,
            anchor_squre, anchor_port, chain_port, chain_starboard, ropes_size, search_light_prop, lifebuoys, nav_lights, anchor
        } = state || {};

        const fieldValues = {
            no_sets, manuf_name, modal_number, engine_type, stroke_cylinder, prop_diameter, prop_build_year, prop_test_certificate, prop_type_gears,
            anchor_squre, anchor_port, chain_port, chain_starboard, ropes_size, search_light_prop, lifebuoys, nav_lights, anchor
        };

        Object.keys(fieldValues).forEach((field) => {
            formik.setFieldValue(field, fieldValues[field] ?? "");
        });
     }, []);

     return (
        <div>
            <div className="row">
                <h4>Form Number 7</h4>
                <h2>Propulsion And Equipment</h2>
                <h2>Particulars of Propulsion of Engines</h2>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <Row className="justify-content-md">
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
                ) )}
                {inputFields2.map((input) => (
                    <Col md={4}>
                        <TextArea
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
                ) )}
                <Col md={4}>
                <TextBox
                        label = "Year of Build"
                        name = "prop_build_year"
                        id = "prop_build_year"
                        type="date"
                        required = {true}
                        />
                </Col>
                <Col md={4}>
                <TextBox
                        label = "Test Certificate"
                        name = "prop_test_certificate"
                        id = "prop_test_certificate"
                        type="file"
                        required = {true}
                        />
                </Col>
                <Col md={4}>
                        <TextArea
                            label = "Type and No. of gears"
                            id = "prop_type_gears"
                            name= "prop_type_gears"
                            type = "text"
                            />
                    </Col>
                </Row>
                <section>
                    <Row>
                        <h2>Particulars of Equipment</h2>
                    </Row>
                    <Row>
                    {inputFields3.map((input) => (
                        <Col md={4} className="align-self-end">
                            <TextArea
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
                    ) )}

                    </Row>
                </section>
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
