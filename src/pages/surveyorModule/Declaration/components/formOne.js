import { useEffect } from "react";
import { Field, useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import SelectBox from "../../../../components/Selectbox";
import Button from "../../../../components/button";
import * as Yup from "yup";

import "./style.scss";

function RegisterFormOne({changeTab, handleUpdateForm, ActionType, state, handleClose,
    handleUpdateData,}){

   

    const initialValues = {
       
        referenceNo: "",
       Dated: "",
       inlandVesselNamed: "",
        officialNo: "",
       
      };
      const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
   
    referenceNo: requiredField("Reference Number"),
    Dated: requiredField("Dated"),
    inlandVesselNamed: requiredField("Inland Vessel Named"),
    officialNo: requiredField("Official Number"),
   
    
  });

    const onSubmit = (values) => {
        changeTab("form2");
        handleUpdateForm(values, ActionType.FORM_ONE);
        handleUpdateData(values);
        handleClose();
        // setShowSuccessModal(true);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
     });
     useEffect(() => {
      const{
        referenceNo,
        Dated,
        inlandVesselNamed,
        officialNo,
       }=state;

       const fieldValues = {
        referenceNo,
        Dated,
        inlandVesselNamed,
        officialNo,
       };
       Object.keys(fieldValues).forEach((field) => {
        formik.setFieldValue(field, fieldValues[field] ?? "");
      });
    }, []);

     const isTouched = (fieldName, formik) => {
        const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
        return isCondition ? true : false;
      };

      const inputFields1 = [
       
        {
          label: "Reference Number",
          id: "referenceNo",
          name: "referenceNo",
          type: "text",
          required: true,
        },
        {
            label: "Dated",
            id: "Dated",
            name: "Dated",
            type: "text",
            required: true,
          },
        {
            label: "Inland Vessel Named",
            id: "inlandVesselNamed",
            name: "inlandVesselNamed",
            type: "text",
            required: true,
          },
        {
          label: "Official Number",
          id: "officialNo",
          name: "officialNo",
          type: "text",
          required: true,
        },
      
       
      ];
    

   
    return (
        <div>
            <div className="row">
            <h5 style={{color: "rgba(127, 128, 135, 1)"
}}>
                Form Number 2</h5>
              <h2>Form of declaration to be issued by the Surveyor</h2>
            </div>
            <hr/>
            <form onSubmit={formik.handleSubmit} >
                <h4>Declaration of Survey</h4>
                <Row>
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
