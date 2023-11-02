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
  handleShowForm2,
  handleShowForm4,
  handleUpdateForm,
  ActionType,
  state,
}) => {
  const initialValues = {
    noofcertificates: "",
    horsepower: "",
    employedvessalname: "",
    portofregistry: "",
    capacity: "",
    dateofappoinment: "",
    state1: "",
    periodyear: "",
    periodmonth: "",
    periodday: "",
    totalservice: "",
    totalserviceonshore: "",
    dateoftermination: "",
    periodnowproduced: "",
    noofcertificatenowproduced: "",
  };
  const boardvesselinputFields = [
    {
      label: "i) No. of testimonials or certificates (if any)",
      id: "noofcertificates",
      name: "noofcertificates",
      type: "text",
      required: true,
    },
    {
      label: "ii) Name of vessel where employed",
      id: "employedvessalname",
      name: "employedvessalname",
      type: "text",
      required: true,
    },
    {
      label: "iiii) Horse power of the engine on which worked",
      id: "horsepower",
      name: "horsepower",
      type: "text",
      required: true,
    },
    {
      label: "iv) Port of registry and official no. of the vessel",
      id: "portofregistry",
      name: "portofregistry",
      type: "text",
      required: true,
    },
  ];
  const serviceParticularinputfields = [
    {
      label: "i) Capacity",
      id: "capacity",
      name: "capacity",
      type: "text",
      required: true,
    },
    {
      label: "ii) Date of appointment",
      id: "dateofappoinment",
      name: "dateofappoinment",
      type: "date",
      required: true,
    },
    {
      label: "iii) Date of termination or leaving",
      id: "dateoftermination",
      name: "dateoftermination",
      type: "date",
      required: true,
    },
    {
      label: "iv) State, if continuing",
      id: "state1",
      name: "state1",
      type: "text",
      required: true,
    },
    {
      label: "v) Total period served - Year",
      id: "year",
      name: "periodyear",
      type: "text",
      required: true,
    },
    {
      label: "v) Total period served - Month",
      id: "month",
      name: "periodmonth",
      type: "text",
      required: true,
    },
    {
      label: "v) Total period served - Day",
      id: "periodday",
      name: "periodday",
      type: "text",
      required: true,
    },
    {
      label: "vi) Total service",
      id: "totalservice",
      name: "totalservice",
      type: "text",
      required: true,
    },
    {
      label: "vii) Total service on shore or river",
      id: "totalserviceonshore",
      name: "totalserviceonshore",
      type: "text",
      required: true,
    },
    {
      label: "viii) Period served for which certificates are now produced",
      id: "periodnowproduced",
      name: "periodnowproduced",
      type: "text",
      required: true,
    },
    {
      label: "ix) Period served for which no certificates are produced",
      id: "noofcertificatenowproduced",
      name: "noofcertificatenowproduced",
      type: "text",
      required: true,
    },
  ];
  const validationSchema = Yup.object({
    noofcertificates: Yup.string().required("Field required!"),
    employedvessalname: Yup.string().required("Field required!"),
    horsepower: Yup.string().required("Field required!"),
    portofregistry: Yup.string().required("Field required!"),
    capacity: Yup.string().required("Field required!"),
    dateofappoinment: Yup.string().required("Field required!"),
    dateoftermination: Yup.string().required("Field required!"),
    state1: Yup.string().required("Field required!"),
    periodyear: Yup.string().required("Field required!"),
    periodmonth: Yup.string().required("Field required!"),
    periodday: Yup.string().required("Field required!"),
    totalservice: Yup.string().required("Field required!"),
    totalserviceonshore: Yup.string().required("Field required!"),
    periodnowproduced: Yup.string().required("Field required!"),
    noofcertificatenowproduced: Yup.string().required("Field required!"),
  });

  const onSubmit = (values) => {
    handleShowForm4();
    handleUpdateForm(values, ActionType.UPDATE_FORM3_DETAILS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const {
      noofcertificates,
      employedvessalname,
      horsepower,
      portofregistry,
      capacity,
      dateofappoinment,
      state1,
      periodyear,
      periodmonth,
      periodday,
      totalservice,
      dateoftermination,
      totalserviceonshore,
      periodnowproduced,
      noofcertificatenowproduced,
    } = state;
    const fieldValues = {
      noofcertificates,
      horsepower,
      employedvessalname,
      portofregistry,
      capacity,
      dateofappoinment,
      dateoftermination,
      state1,
      periodyear,
      periodmonth,
      periodday,
      totalservice,
      totalserviceonshore,
      periodnowproduced,
      noofcertificatenowproduced,
    };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);
  return (
    <Container className="master-class-form">
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12"></div>
        </div>
        <h4 className="main-head">Part - G</h4>
        <p className="sub-head">
          List of testimonials and statement of service on rivers or shore or
          sea
        </p>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <b>
              <p className="mb-0">1. If served on board vessel</p>
            </b>

            <div className="row ">
              {boardvesselinputFields.map((input) => (
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
        </div>
        <div className="row mt-5">
          <b>
            <p className="mb-0">2. Service particulars of the Applicant</p>
          </b>

          <div className="row">
            {serviceParticularinputfields.map((input) => (
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

        <div className="row btn-container">
          <div className="modal-buttons">
            <Buttons
              onClick={handleShowForm2}
              label={"Back"}
              className="btn-outline"
            ></Buttons>
            <Buttons
              type="submit"
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
