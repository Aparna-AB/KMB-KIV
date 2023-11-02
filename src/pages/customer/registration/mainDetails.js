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

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;
const aadharRegExp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;

function RegisterForm({ changeTab, handleUpdateForm, ActionType, state }) {
  const initialValues = {
    aadharNo: "",
    name: "",
    mobile: "",
    email: "",
  };

  const inputFields = [
    {
      label: "Aadhaar Number",
      id: "aadharNo",
      name: "aadharNo",
      type: "text",
      required: true,
    },
    {
      label: "Name",
      id: "name",
      name: "name",
      type: "text",
      required: true,
    },
  ];
  const inputFields2 = [
    {
      label: "Mobile Number",
      id: "mobile",
      name: "mobile",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "text",
      required: true,
    },
  ];

  const validationSchema = Yup.object({
    aadharNo: Yup.string()
      .matches(aadharRegExp, "Aadhaar Number is not valid")
      .required("Aadhaar Number is required!"),
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Mobile Number is not valid")
      .required("Mobile Number is required!"),
  });

  const onSubmit = (values) => {
    changeTab("address");
    handleUpdateForm(values, ActionType.UPDATE_MAIN_DETAILS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const { aadharNo, name, email, mobile } = state;
    const fieldValues = { aadharNo, name, email, mobile };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);

  return (
    <div className="maindetails">
      <form className="" onSubmit={formik.handleSubmit}>
        <Row className="justify-content-md">
          <Col md={6}>
            {inputFields.map((input) => (
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
            ))}
          </Col>
          <Col md={6}>
            {inputFields2.map((input) => (
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
            ))}
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
