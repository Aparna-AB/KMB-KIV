import { useEffect } from "react";
import { useFormik } from "formik";
import { Container } from "react-bootstrap";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
// import SelectBox from "../../../components/Selectbox";
// import CheckBox from "../../../components/checkbox";
// import RadioButton from "../../../components/radioButton";

import "./style.css";


const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;

function ExistingVesselOwnerRegistration({ changeTab, handleUpdateForm, ActionType, state, show, handleClose }) {
//   const options = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     { value: "option3", label: "Option 3" },
//   ];
//   const options1 = [
//     { value: "v1", label: "" },
//     { value: "v2", label: "" },
//     ];

    const initialValues = {
        Name: "",
        mobileNo: "",
        State: "",
        Address: "",
        Occupation: "",
        identityCard: "",
        panCardNo: "",
        uploadPanCard: "",
        uploadSign: "",
        DOB: "",
        emailId: "",
        District: "",
        companyAddress: "",
        idNo: "",
        uploadIdCard: "",
        uploadPhoto: "",
        enterTextasBelow: "",
       
      };
    
      const requiredField = (name) => Yup.string().required(`${name} is required!`);
    
      const validationSchema = Yup.object({
        Name: requiredField("Name"),
        State: requiredField("State"),
        Address: requiredField("Address"),
        Occupation: requiredField("Occupation"),
        mobileNo: Yup.string()
         .matches(phoneRegExp, "Phone Number is not valid")
         .required("Phone Number is required!"),
         identityCard: requiredField("Identity Card is required!"),
         panCardNo: requiredField("Pan Card Number is required!"),
         uploadPanCard: requiredField("Upload Pan Card is required!"),
         uploadSign: requiredField("Upload Sign is required!"),
         DOB: requiredField("Date of Birth is required!"),
         emailId: requiredField("Email Id is required!"),
         District: requiredField("District is required!"),
         companyAddress: requiredField("Company Address is required!"),
         idNo: requiredField("ID Number is required!"),
         uploadIdCard: requiredField("Upload Id Card is required!"),
         uploadPhoto: requiredField("Upload Photograph is required!"),
         enterTextasBelow: requiredField("Enter Text as below is required!"),
         
          
      
      });
    
      const onSubmit = (values) => {
        //TODO:API Service call
      };
    
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });
    
      const isTouched = (fieldName, formik) => {
        const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
        return isCondition ? true : false;
      };
    
    //    const handleRadioButton = (label, value) => {
    //     const otherLabel = label === "approve" ? "reject" : "approve";
    
        
    //     formik.setValues((prevValues) => ({
    //         ...prevValues,
    //         [otherLabel]: false,
    //         [label]: value,
    //       }));
    //     };

        return (
            <div className="">
                
                <Container>
                <div style={{textAlign:"right"}}>
                <a href="customer">Back</a>
            </div>
                <div>
                  <h5 className="address-name">Existing Vessel Owner Registration</h5>
                </div><br></br>

                    <form className="" onSubmit={formik.handleSubmit} style={{margin:"10px 10px"}}>
                   {/* <Col className="justify-content-md-center addresrow"> */}
                  


<Row>
<Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
<TextBox
                        label="Name"
                        id="Name"
                        name="Name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Name}
                        touched={isTouched("Name", formik)}
                        error={formik.errors.Name}
                      />
                      <TextBox
                        label="Mobile Number"
                        id="mobileNo"
                        name="mobileNo"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.mobileNo}
                        touched={isTouched("mobileNo", formik)}
                        error={formik.errors.mobileNo}
                      />
                      <TextBox
                        label="State"
                        id="State"
                        name="State"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.State}
                        touched={isTouched("State", formik)}
                        error={formik.errors.State}
                      />
                      

                      <TextBox
                        label="Address"
                        id="Address"
                        name="Address"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Address}
                        touched={isTouched("Address", formik)}
                        error={formik.errors.Address}
                      />
                      

                    <TextBox
                        label="Occupation"
                        id="Occupation"
                        name="Occupation"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Occupation}
                        touched={isTouched("Occupation", formik)}
                        error={formik.errors.Occupation}
                      />
                      

<TextBox
                        label="Identity Card"
                        id="identityCard"
                        name="identityCard"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.identityCard}
                        touched={isTouched("identityCard", formik)}
                        error={formik.errors.identityCard}
                      />
                      
<TextBox
                        label="Pan Card Number"
                        id="panCardNo"
                        name="panCardNo"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.panCardNo}
                        touched={isTouched("panCardNo", formik)}
                        error={formik.errors.panCardNo}
                      />
                     

<TextBox
                        label="Upload Pan Card"
                        id="uploadPanCard"
                        name="uploadPanCard"
                        type="file"
                        onChange={formik.handleChange}
                        value={formik.values.uploadPanCard}
                        touched={isTouched("uploadPanCard", formik)}
                        error={formik.errors.uploadPanCard}
                      />
                      

                      <TextBox
                        label="Upload Sign"
                        id="uploadSign"
                        name="uploadSign"
                        type="file"
                        onChange={formik.handleChange}
                        value={formik.values.uploadSign}
                        touched={isTouched("uploadSign", formik)}
                        error={formik.errors.uploadSign}
                      />
    </Col>

    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{lineHeight:"33px"}}>


    <TextBox
                        label="Date of Birth"
                        id="DOB"
                        name="DOB"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.DOB}
                        touched={isTouched("DOB", formik)}
                        error={formik.errors.DOB}
                      />
                   

<TextBox
                        label="Email Id"
                        id="emailId"
                        name="emailId"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.emailId}
                        touched={isTouched("emailId", formik)}
                        error={formik.errors.emailId}
                      />
                     

<TextBox
                        label="District"
                        id="District"
                        name="District"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.District}
                        touched={isTouched("District", formik)}
                        error={formik.errors.District}
                      />
                       

<TextBox
                        label="Company Address"
                        id="companyAddress"
                        name="companyAddress"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyAddress}
                        touched={isTouched("companyAddress", formik)}
                        error={formik.errors.companyAddress}
                      />
                       

<TextBox
                        label="ID Number"
                        id="idNo"
                        name="idNo"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.idNo}
                        touched={isTouched("idNo", formik)}
                        error={formik.errors.idNo}
                      />
                    

<TextBox
                        label="Upload ID Card"
                        id="uploadIdCard"
                        name="uploadIdCard"
                        type="file"
                        onChange={formik.handleChange}
                        value={formik.values.uploadIdCard}
                        touched={isTouched("uploadIdCard", formik)}
                        error={formik.errors.uploadIdCard}
                      />
                      

<TextBox
                        label="Upload Photograph"
                        id="uploadPhoto"
                        name="uploadPhoto"
                        type="file"
                        onChange={formik.handleChange}
                        value={formik.values.uploadPhoto}
                        touched={isTouched("uploadPhoto", formik)}
                        error={formik.errors.uploadPhoto}
                      />
                      

<TextBox
                        label="Enter text as below "
                        id="enterTextasBelow"
                        name="enterTextasBelow"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.enterTextasBelow}
                        touched={isTouched("enterTextasBelow", formik)}
                        error={formik.errors.enterTextasBelow}
                      />


    </Col>
</Row>
                  

                    <div style={{justifyContent: "center", display: "flex", marginTop: "20px"}}>
              <Button onClick={handleClose} label={"Close"}></Button>
            <Button type="submit" label={"Submit"}></Button>
            </div>
                    </form>
                </Container>
            </div>
        );
}

export default ExistingVesselOwnerRegistration;