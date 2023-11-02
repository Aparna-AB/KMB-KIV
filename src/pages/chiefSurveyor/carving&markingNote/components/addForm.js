import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Buttons from "../../../../components/button";
import TextArea from "../../../../components/textArea";
import "../style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextBox from "../../../../components/textBox";
import * as Yup from "yup";
import { useFormik } from "formik";

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;
  
const ApprovalForm = ({ show, handleClose }) => {
  const partCinputFields = [
    {
      label: "Name of the Vessel",
      id: "nameofVessel",
      name: "nameofVessel",
      type: "text",
      required: true,
    },
    {
      label: "Official Number",
      id: "official_no",
      name: "official_no",
      type: "text",
      required: true,
    },
    {
      label: "Port of Registry",
      id: "port_of_reg",
      name: "port_of_reg",
      type: "text",
      required: true,
    },
    {
      label: "Year of Registry",
      id: "year_reg",
      name: "year_reg",
      type: "date",
      required: true,
    },
    {
      label: "Official Number",
      id: "officialNo",
      name: "officialNo",
      type: "text",
      required: true,
    },
    {
      label: "Port of Registry",
      id: "port",
      name: "port",
      type: "text",
      required: true,
    },
  ];
  const initialValues = {
      reference_no : "",
      nameofVessel: "",
      official_no: "",
      year_reg: "",
      presentaddress: "",
      officialNo: "",
      port: "",
      port_of_reg:"",
      registerAuthority:"",
      surveyor:""
    };
    const requiredField = Yup.string().required("Field required!");
  
    const validationSchema = Yup.object({
      reference_no: requiredField,
      nameofVessel: requiredField,
      official_no: requiredField,
      year_reg: requiredField,
      presentaddress: requiredField,
      officialNo: requiredField,
      port: requiredField,
      port_of_reg:requiredField,
      registerAuthority:requiredField,
      surveyor:requiredField
    
      });
      const onSubmit = (values) => {
          console.log("??????????????????????", formik.values);
         };
      
      const formik = useFormik({
          initialValues,
          validationSchema,
          onSubmit,
          
        });
  
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="carving"
      >
        <Modal.Header closeButton>
          <div>
            <p className="form-name">Form Number 5 </p>
            <h4>Carving and Marking Note</h4>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container className="master-class-form">
            <form className=""  onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                  <h6 className="main-head">Date</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12">
                  <h6 className="main-head">12/21/2023</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <TextBox
                    label="Reference Number*"
                    id="reference_no"
                    name="reference_no"
                    type="text"
                      onChange={formik.handleChange}
                      value={formik.values.reference_no}
                      touched={formik.touched.reference_no}
                      error={formik.errors.reference_no}
                      required={true}
                  />
                </div>
              </div>
              <div className="row toadress">
                <h6>To</h6>
                <h6>The Owner or Master on the Inland Vessel</h6>
                <p>Name Displayed</p>
              </div>

              <div className="row toadress">
                <p>
                  Sir/Madam,
                  <br />
                  This has reference to your application for registration of the
                  above named vessel and subsequent enquiry of the vessel
                  conducted under rule 6 of these rules, you are advised to have
                  the below enumerated marks carved on the vessel's hull under
                  rule 9 of these rules:
                </p>
              </div>
              <div className="row  textrow">
                {partCinputFields.map((input) => (
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
              <div className="row toadress">
                <p>
                  You are further advised to contact this office after the
                  completion of requisite carving (which in no case shall be
                  greater than fifteen days from the date of issue of this
                  letter) for final inspection for the purpose of registering
                  this vessel. Please also be advised that you shall be required
                  to surrender this carving note in original at the time of
                  issuance of Certificate of Registration.
                </p>
              </div>

              <div className="row namerow">
                <h6>Yours faithfully</h6>
                <h6>Registering Authority</h6>
                <p>Inland Vessels</p>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <TextArea
                    label="Surveyor / Chief Surveyor"
                    rows={4}
                    name="surveyor"
                      onChange={formik.handleChange}
                      value={formik.values.surveyor}
                      touched={formik.touched.surveyor}
                      error={formik.errors.surveyor}
                      required={true}
                  />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <TextArea
                    label="Registering Authority Remarks "
                    rows={4}
                    name="registerAuthority"
                      onChange={formik.handleChange}
                      value={formik.values.registerAuthority}
                      touched={formik.touched.registerAuthority}
                      error={formik.errors.registerAuthority}
                      required={true}
                  />
                </div>
              </div>

              <div className="row btn-container">
                <div className="modal-buttons">
                  <Buttons
                    //   onClick={handleShowForm1}
                    label={"Back"}
                    className="btn-outline"
                  ></Buttons>
                  <Buttons
                    type="Submit"
                    label={"Submit"}
                    className="button-submit"
                  ></Buttons>
                </div>
              </div>
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ApprovalForm;
