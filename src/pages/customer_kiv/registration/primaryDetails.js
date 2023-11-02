import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../../styles.scss";
import "./style.scss";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import SelectBox from "../../../components/Selectbox";

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;
// const pinRegularExp = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";

function RegisterForm({ changeTab, handleUpdateForm, ActionType, state }) {

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const initialValues = {
    nameOfOwner: "",
    Email: "",
    District: "",
    userName: "",
    Password: "",
    Mobile: "",
    houseName_No: "",
    postOffice: "",
    pinCode: "",
    confirmPw: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    nameOfOwner: requiredField("Name is required!"),
    Email: requiredField("Email is required!"),
    District: requiredField("District is required!"),
    userName: requiredField("User Name is required!"),
    Password: requiredField("Password is required!"),
    houseName_No: requiredField("House Name/No is required!"),
    postOffice: requiredField("Post Office is required!"),
    // pinCode: requiredField("Pin Code").matches(
    //   pinRegularExp,
    //   "Pin Code is not valid"),
    confirmPw: requiredField("Password is required!"),
    Mobile: Yup.string()
      .matches(phoneRegExp, "Mobile Number is not valid")
      .required("Mobile Number is required!"),
  });

  const onSubmit = (values) => {
    changeTab("additional");
    handleUpdateForm(values, ActionType.UPDATE_PRIMARY_DETAILS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // useEffect(() => {
  //   const { aadharNo, name, email, mobile } = state;
  //   const fieldValues = { aadharNo, name, email, mobile };
  //   Object.keys(fieldValues).forEach((field) => {
  //     formik.setFieldValue(field, fieldValues[field] ?? "");
  //   });
  // }, []);
  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };


  return (
    <div className="maindetails">
      <form className="details-form" onSubmit={formik.handleSubmit}>
        <Row className="justify-content-md">
          <Col md={6} >
           
            <TextBox
              label="Name Of Owner"
              id="nameOfOwner"
              name="nameOfOwner"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nameOfOwner}
              touched={isTouched("nameOfOwner", formik)}
              error={formik.errors.nameOfOwner}
              required={true}
             
            />
             <TextBox
              label="Email"
              id="Email"
              name="Email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Email}
              touched={isTouched("Email", formik)}
              error={formik.errors.Email}
              required={true}
            />
             <SelectBox
              id="District"
              options={options}
              label="District"
              name="District"
              value={formik.values.District}
              onChange={formik.handleChange}
              isRequired={true}
              isTouched={isTouched("District", formik)}
              error={formik.errors.District}
              className="select"
              required={true}
            />
             <TextBox
              label="User Name"
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              touched={isTouched("userName", formik)}
              error={formik.errors.userName}
              required={true}
            />
            <TextBox
              label="Password"
              id="Password"
              name="Password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Password}
              touched={isTouched("Password", formik)}
              error={formik.errors.Password}
              required={true}
            />

          </Col>
          <Col md={6}>
          <TextBox
              label="Mobile Number"
              id="Mobile"
              name="Mobile"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Mobile}
              touched={isTouched("Mobile", formik)}
              error={formik.errors.Mobile}
              required={true}
            />
            <TextBox
              label="House Name/Number"
              id="houseName_No"
              name="houseName_No"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.houseName_No}
              touched={isTouched("houseName_No", formik)}
              error={formik.errors.houseName_No}
              required={true}
            />
            <TextBox
              label="Post Office"
              id="postOffice"
              name="postOffice"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.postOffice}
              touched={isTouched("postOffice", formik)}
              error={formik.errors.postOffice}
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
            <TextBox
              label="Confirm Password"
              id="confirmPw"
              name="confirmPw"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.confirmPw}
              touched={isTouched("confirmPw", formik)}
              error={formik.errors.confirmPw}
              required={true}
            />
          </Col>
          <Row className="button-container">
            <Col className="btn-col address-button">
              <a className="btn-outline " href="/">
                Previous
              </a>
            </Col>

            <Col className="address-button btn-col2">
              <Button
                label="Next"
                type="submit"
                className="btn-sucess float-right btn-default"
              />
            </Col>
          </Row>
        </Row>
      </form>
    </div>
  );
}

export default RegisterForm;


