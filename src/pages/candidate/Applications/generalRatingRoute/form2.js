import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";

import Buttons from "../../../../components/button";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import "./style.scss";

const Index = ({
  handleShowForm1,
  handleShowForm3,
  handleUpdateForm,
  uploadFile,
  ActionType,
  state,
}) => {
  const initialValues = {
    grade: "",
    competency: "",
    checkearlier: "",
    declarationdate: "",
    presentaddress: "",
    yearmonth: "",
    signature: "",
  };
  const partCinputFields = [
    {
      label: "Grade",
      id: "grade",
      name: "grade",
      type: "text",
      required: true,
    },
    {
      label: "Competency",
      id: "competency",
      name: "competency",
      type: "text",
      required: true,
    },
  ];
  const partDinputfields = [
    {
      label: "Have you appeared for this exmination earlier",
      id: "number",
      name: "checkearlier",
      type: "text",
      required: true,
    },
    {
      label: "If yes Mention year and month",
      id: "yearmonth",
      name: "yearmonth",
      type: "date",
    },
  ];
  const validationSchema = Yup.object({
    grade: Yup.string().required("Grade is required!"),
    competency: Yup.string().required("Competency is required!"),
    checkearlier: Yup.string().required(
      "Have you appeared for this exmination earlier is required!"
    ),
    declarationdate: Yup.string().required("Declaration Date is required!"),
    presentaddress: Yup.string().required("Present Address is required!"),
    signature: Yup.mixed().required("Signature of applicant is required!"),
  });

  const onSubmit = (values) => {
    handleShowForm3();
    handleUpdateForm(values, ActionType.UPDATE_FORM2_DETAILS);
  };
  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const {
      grade,
      competency,
      checkearlier,
      declarationdate,
      presentaddress,
      yearmonth,
      signature,
    } = state;
    const fieldValues = {
      grade,
      competency,
      checkearlier,
      declarationdate,
      presentaddress,
      yearmonth,
      signature,
    };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);
  return (
    <Container className="master-class-form">
      <form className="" onSubmit={formik.handleSubmit}>
        <h4 className="main-head">Part - C</h4>
        <p className="sub-head">Certificate now required</p>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12">
            <div className="row ">
              {partCinputFields.map((input) => (
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <TextBox
                    label={input.label}
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    required={input.required}
                    key={input.id}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                  />
                </Col>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="main-head">PART D</h4>
          <p className="sub-head">Certificate now required</p>

          <div className="row">
            {partDinputfields.map((input) => (
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox
                  label={input.label}
                  id={input.id}
                  name={input.name}
                  type={input.type}
                  required={input.required}
                  key={input.id}
                  onChange={formik.handleChange}
                  value={formik.values[input.name]}
                  touched={formik.touched[input.name]}
                  error={formik.errors[input.name]}
                />
              </Col>
            ))}
          </div>
        </div>
        <div className="row mt-5">
          <h4 className="main-head">PART E</h4>
          <p className="sub-head">Declaration to be made by applicant:</p>
          <p className="note-text">
            Note: Any person who makes, procures to be made or assists in making
            any false representation for the purpose of obtaining for himself,
            or any other person, a certificate either of competency or service,
            is for each offense liable to be punished for cheating under section
            420 of the Indian Penal Code and also for knowingly giving false
            information to the public servant under section 182 of the Indian
            Penal Code, 1860.
          </p>
          <h4 className="main-head">Declaration</h4>
          <p className="note-text">
            I do hereby declare that the particulars contained in Part A, B, C,
            D and E of this form are correct and true to the best of my
            knowledge and belief, and that the papers enumerated in Part - G and
            sent with this form are true and genuine documents, given and signed
            by the persons whose name appear on them, I further declare that the
            statement in Part - G contains true and correct account of the whole
            of my services without exception.
          </p>
        </div>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <TextBox
              label="Date"
              id="date"
              name="declarationdate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.declarationdate}
              touched={formik.touched.declarationdate}
              error={formik.errors.declarationdate}
              required={true}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <TextBox
              label="Signature of Applicant"
              id="signature"
              name="signature"
              type="file"
              onChange={(file) => {
                formik.setFieldValue("signature", file);
                uploadFile(file, "signature");
              }}
              touched={isTouched("signature", formik)}
              error={formik.errors.signature}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            {/* <TextArea
              label="Present Address"
              name="presentaddress"
              type="text"
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.presentAddess}
              touched={formik.touched.presentAddess}
              error={formik.errors.presentAddess}
              required={true}
            /> */}
            <TextArea
              label="Permanent Address"
              rows={4}
              name="presentaddress"
              onChange={formik.handleChange}
              value={formik.values.presentaddress}
              touched={formik.touched.presentaddress}
              error={formik.errors.presentaddress}
              required={true}
            />
          </Col>
        </Row>
        <div className="row btn-container">
          <div className="modal-buttons">
            <Buttons
              onClick={handleShowForm1}
              label={"Back"}
              className="btn-outline"
            ></Buttons>
            <Buttons
              type="Submit"
              label={"Next "}
              className="button-submit"
            ></Buttons>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Index;
