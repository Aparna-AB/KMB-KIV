import { useEffect } from "react";
import { useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Button from "../../../../components/button";
import SelectBox from "../../../../components/Selectbox";

function RegisterFormFour({changeTab, handleUpdateForm, ActionType, state}){

    const initialValues = {
       
      };

      const display_fields = [
        {
            label: "Number ,size and Capacity of fire pumps",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Fire mains, diameter, material and no. of Hydrants",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Any other equipment",
            value: "xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx"
        },
        {
            label: "Nozzles",
            value: "Display Field"
        },
        {
            label: "Number of hoses",
            value: "Display Field"
        },
      ];
      const display_fields2 = [
        {
            label: "Soda Acid",
            value: "Display Field"
        },
        {
            label: "Foam",
            value: "Display Field"
        },
        {
            label: "Dry Powder",
            value: "Display Field"
        },
        {
            label: "Any other types",
            value: "Display Field"
        },
      ];


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

    }, []);

    return (
        <div>
            <Row>
                <h4>Form Number 7 </h4>
                <h2>Fire And Other Particulars</h2>
            </Row>
            <form onSubmit={formik.handleSubmit} >
            <div className="card review-card">
                <h2>Particulars of Fire Appliances</h2>
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
                <h2>No. of Portable Fire Extinguisher with Particulars and name of Manufactures </h2>
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
                    <h2>Particulars of Communication Equipment</h2>
                    <Row className="justify-content-md">
                        <Col md={4}>
                            <label>Equipment Details</label>
                            <p>xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx</p>
                        </Col>                        
                    </Row>
                </section>
                <section>
                    <h2>Particulars of Navigation Equipment</h2>
                    <Row className="justify-content-md">
                        <Col md={4}>
                            <label>Equipment Details</label>
                            <p>xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxx xxxxxx xxxxxx xxxxxxxxxxxxxxx xxxx</p>
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

}

export default RegisterFormFour;
