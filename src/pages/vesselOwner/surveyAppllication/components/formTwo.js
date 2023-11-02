import { useEffect } from "react";
import { useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";



function RegisterForm({changeTab, handleUpdateForm, ActionType, state}){

    const inputFields = [
        {
            label: "Name of Vessel (if already named)/Yard Number",
            id: "vessel_name",
            name: "vessel_name",
            type: "text",
            required: true,
        },
        {
            label: "Length of Vessel",
            id: "length",
            name: "length",
            type: "text",
            required: true,
        },
        {
            label: "Breadth of Vessel",
            id: "breadth",
            name: "breadth",
            type: "text",
            required: true,
        },
        {
            label: "Depth of Vessel",
            id: "depth",
            name: "depth",
            type: "text",
            required: true,
        },
        {
            label: "Vessel Type",
            id: "vtype",
            name: "vtype",
            type: "text",
            required: true,
        },
        {
            label: "Owner Name",
            id: "own_name",
            name: "own_name",
            type: "text",
            required: true,
        }

    ];

    const inputFields2 = [
        {
            label: "Material of Hull",
            id: "material",
            name: "material",
            type: "text",
            required: true
        },
        {
            label: "Year of Build",
            id: "year",
            name: "year",
            type: "text",
            requred: true
        },
        {
            label: "Builders Name",
            id: "builders",
            name: "builders",
            type: "text",
            requred: true
        }

    ];

    const particualr_textarea = [
        {
            label: "Builders Address",
            id: "builder_address",
            name:  "builder_address",
            type: "text"
        },
        {
            label: "No. of Bulk Heads ,their Placement and Thickness",
            id: "placement",
            name: "placement",
            type: "text"
        },
        {
            label: "Hull Plaiting Materials and Thickness",
            id: "plating",
            name: "plating",
            type: "text"
        },
        {
            label: "Frames(Material and thickness)",
            id: "frames",
            name: "frames",
            type: "text"
        },
        {
            label: "Floors(Material and thickness)",
            id: "floors",
            name: "floors",
            type: "text"
        }
    ];

    const initialValues = {
        vessel_name: "",
        length: "",
        breadth: "",
        depth: "",
        vtype: "",
        own_name: "",
        owner_address: "",
        material: "",
        year: "",
        builders: "",
        builder_address: "",
        placement: "",
        plating: "",
        frames: "",
        floors: "",
        certificates: "",
        
      };


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
        const { vessel_name, length, breadth, depth, vtype, own_name, owner_address, material, year,
            builders, builder_address, placement, plating, frames, floors, certificates 
        } = state || {} ;
        
        const fieldValues = { vessel_name, length, breadth, depth, vtype, own_name, owner_address, material, year,
            builders, builder_address, placement, plating, frames, floors, certificates
        };

        Object.keys(fieldValues).forEach((field) => {
            formik.setFieldValue(field, fieldValues[field] ?? "");
          });

        
    }, []);
    
    return (
        <div>
            <div className="row">
                <h4>Form Number 7 </h4>
                <h2>Particular To Be Furnished For Survey Of New Vessel Or Vessels Which Are To Be Surveyed For The First Time</h2>
            </div>
            <form  onSubmit={formik.handleSubmit}>
                <Row className="justify-content-md">
                    
                        {inputFields.map((input) => (
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
                        <Col md={4}>
                        <TextArea
                            label = "Owner Address"
                            id = "owner_address"
                            name= "owner_address"
                            type = "text"

                        />
                        </Col>                   
                </Row>
                <section>
                {/* <Container className="container">                 */}
                    <h2>Particulars of Hull</h2>
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
                        ) )}
                    </Row>
                    <Row>
                        {particualr_textarea.map((input) => (
                            <Col md={4}>
                                <TextArea
                                label={input.label}
                                id = {input.id}
                                name={input.name}
                                type={input.type}                                
                            />
                          </Col>                          
                        ) )}
                        <Col md={4}>
                        <TextBox
                            label="Builder’s Certificates*"
                            id="certificates"
                            name="certificates"
                            type="file"
                            /* onChange={(file) => {
                                formik.setFieldValue("aadhaar", file);
                                uploadFile(file, "aadhaar");
                            }}
                            touched={isTouched("aadhaar", formik)} */
                            error={formik.errors.aadhaar}
                            />
                        </Col>
                         
                    </Row>
                    </section>
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