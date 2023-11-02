import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReCAPTCHA from "react-google-recaptcha";
import SimpleCaptcha from "../../../components/simpleCaptcha";
import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import SelectBox from "../../../components/Selectbox";
import CheckBox from "../../../components/checkbox";
import "../../../styles.scss";
import "./style.scss";

function RegisterForm({ changeTab, handleUpdateForm, ActionType }) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isFocused, setFocused] = useState(true);

  const [selectedOption, setSelectedOption] = useState("Do you have any Representative?"); // Set default value to "No"

  const options = [
  
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];

  const options2 = [
    { value: "option1", label: "option 1" },
    { value: "option2", label: "option 2" },
  ];

  const initialValues = {
    haveAnyRepresentative: "", // Set default value to "No"
    representativeHouseName: "",
    postOffice: "",
    district: "", // Changed "District" to "district"
    representativeName: "",
    houseNo: "",
    pinCode: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    houseNo: requiredField("House Number"),
    haveAnyRepresentative: requiredField("Field is Required!"),
    postOffice: requiredField("Post Office"),
    district: requiredField("District"), // Changed "District" to "district"
    representativeHouseName: requiredField("Representative House Name"),
    representativeName: requiredField("Representative Name"),
    // pinCode: requiredField("Pin Code").matches(
    //   pinRegularExp,
    //   "Pin Code is not valid"
    // ),
  });

  const onSubmit = (values) => {
    changeTab("aadharAuthentication");
    handleUpdateForm(values, ActionType.UPDATE_ADDITIONAL_DETAILS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isTouched = (fieldName) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const handleSiteAddress = (isSelected) => {
    const { houseNo, haveAnyRepresentative, district, postOffice, pinCode, representativeHouseName } =
      formik.values;
    const siteFields = {
      siteHouseName: houseNo,
      sitePlace: haveAnyRepresentative,
      siteDistrict: district,
      sitePostOffice: postOffice,
      sitePinCode: pinCode,
      sitePostOffice: representativeHouseName,
    };

    formik.setFieldValue("isPresentAddress", isSelected);
    if (isSelected) {
      formik.setValues((values) => ({ ...values, ...siteFields }));
    }
  };

  return (
    <div className="address-container maindetails">
      <form className="" onSubmit={formik.handleSubmit}>
        <Row className="justify-content-md-center addresrow">
          <Col md={6} style={{justifyContent: "left"}}>

            <SelectBox
              id="haveAnyRepresentative"
              options={options}
              label="Do you have any Representative?"
              name="haveAnyRepresentative"
              value={selectedOption} // Use the selectedOption state instead of formik.selectedOption
              onChange={(event) => {
                setSelectedOption(event.target.value); // Update selectedOption state on change
                formik.handleChange(event); // Handle formik changes as well
              }}
              isRequired={true}
              isTouched={isTouched("haveAnyRepresentative")}
              error={formik.errors.haveAnyRepresentative}
              className="select"
            />

            {selectedOption === "No" && (
              <div className="recaptcha">
                <SimpleCaptcha
                  handlechange={(el) => {
                    setCaptchaValue(el.target.value);
                    setFocused(false);
                  }}
                  error={captchaError}
                  isFocused={isFocused}
                />
              </div>
            )}
          </Col>

          {selectedOption === "Yes" && (
            <div className="maindetails">
        <Row className="justify-content-md-center addresrow">

            <Col md={6}>
            
            
                       <TextBox
                          label="Representative House Name"
                          id="representativeHouseName"
                          name="representativeHouseName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.representativeHouseName}
                          touched={isTouched("representativeHouseName", formik)}
                          error={formik.errors.representativeHouseName}
                          required={true}
                        />
            
                        <TextBox
                          label="House Number"
                          id="houseNo"
                          name="houseNo"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.houseNo}
                          touched={isTouched("houseNo", formik)}
                          error={formik.errors.houseNo}
                          required={true}
                        />
            
            <SelectBox
                          id="postOffice"
                          options={options2}
                          label="Post Office"
                          name="postOffice"
                          value={formik.values.postOffice}
                          onChange={formik.handleChange}
                          isRequired={true}
                          isTouched={isTouched("postOffice", formik)}
                          error={formik.errors.postOffice}
                          className="select"
                        />
            
                        <SelectBox
                          id="district"
                          options={options2}
                          label="District"
                          name="district"
                          value={formik.values.district}
                          onChange={formik.handleChange}
                          isRequired={true}
                          isTouched={isTouched("district", formik)}
                          error={formik.errors.district}
                          className="select"
                        />
            <div className="recaptcha">
                              <SimpleCaptcha
                                handlehange={(el) => {
                                  setCaptchaValue(el.target.value);
                                  setFocused(false);
                                }}
                                error={captchaError}
                                isFocused={isFocused}
                              />
                            </div>
                       
                     
                      </Col>
          
           
                      <Col md={6}>
                       
                        <TextBox
                          label="Representative Name"
                          id="representativeName"
                          name="representativeName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.representativeName}
                          touched={isTouched("representativeName", formik)}
                          error={formik.errors.representativeName}
                          required={true}
                        />
                         <TextBox
                          label="House Number"
                          id="houseNo"
                          name="houseNo"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.sitePlace}
                          touched={isTouched("houseNo", formik)}
                          error={formik.errors.houseNo}
                          required={true}
                        />
            
                       <TextBox
                          label="Pin Code"
                          id="pinCode"
                          name="pinCode"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.pinCode}
                          touched={isTouched("pinCode", formik)}
                          error={formik.errors.pinCode}
                          required={true}
                        />
                        
                      </Col>
                     
                      </Row>
            </div>
             )
             }
             </Row>
               
             <Row className="button-container">
          <Col className="btn-col address-button">
            <a className="btn-outline " onClick={() => changeTab("primary")}>
              Previous
            </a>
          </Col>

          <Col className="address-button btn-col2">
            <Button
              label="Next"
              type="submit"
              className="btn-sucess float-right  btn-default"
            />
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default RegisterForm;
