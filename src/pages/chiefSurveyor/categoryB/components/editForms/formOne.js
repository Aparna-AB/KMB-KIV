import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import SelectBox from "../../../../../components/Selectbox";
import { statusOptions } from "../../../../../utils/constants";
import Buttons from "../../../../../components/button";
import TextBox from "../../../../../components/textBox";
import TextArea from "../../../../../components/textArea";
// import "./style.scss";

const Index = ({ handleUpdateForm, ActionType, state, handleShowForm2,handleClose}) => {
  const initialValues = {
    cetificateOfSurveyNo: "",
    zoneOfOperation: "",
    expiryDate: "",
    dateOfEx: "",
    vesselName: "",
    officialNo: "",
    portOfRegsitry: "",
    certificateOfRegistryNo: "",
    grossTonnage: "",
    registeredTon: "",
    freeboardAssigned: "",
    LoadingMarks: "",
    nameOfTheMaster: "",
    masterCOC: "",
    number: "",
    placeOfIssue: "",
    nameOfEngineer: "",
    masterCOCgrade: "",
    numbers: "",
    placeOfIssued: "",
    address: "",
    dateOfSurvey: "",
    placeOfSurvey: "",
  };
  const boardvesselinputFields = [
    {
      label: "Certificate of Survey No.",
      id: "cetificateOfSurveyNo",
      name: "cetificateOfSurveyNo",
      type: "text",
      required: true,
    },
    {
      label: "Zone of Operation",
      id: "zoneOfOperation",
      name: "zoneOfOperation",
      type: "text",
      required: true,
    },
    {
      label: "Date of Expiry",
      id: "expiryDate",
      name: "expiryDate",
      type: "date",
      required: true,
    },
    {
      label: "Date of Expiry",
      id: "dateOfEx",
      name: "dateOfEx",
      type: "",
      required: true,
    },
  ];
  const requiredField = Yup.string().required("Field required!");

  const validationSchema = Yup.object({
    // cetificateOfSurveyNo: requiredField,
    // zoneOfOperation: requiredField,
    // expiryDate: requiredField,
    // dateOfEx: requiredField,
    // vesselName: requiredField,
    // officialNo: requiredField,
    // portOfRegsitry: requiredField,
    // certificateOfRegistryNo: requiredField,
    // grossTonnage: requiredField,
    // registeredTon: requiredField,
    // freeboardAssigned: requiredField,
    // LoadingMarks: requiredField,
    // nameOfTheMaster: requiredField,
    // masterCOC: requiredField,
    // number: requiredField,
    // placeOfIssue: requiredField,
    // nameOfEngineer: requiredField,
    // masterCOCgrade: requiredField,
    // numbers: requiredField,
    // placeOfIssued: requiredField,
    // address: requiredField,
    // dateOfSurvey: requiredField,
    // placeOfSurvey: requiredField,
  });
  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const onSubmit = (values) => {
    console.log("??????????????????????",formik.errors);
    handleShowForm2();
    handleUpdateForm(values, ActionType.UPDATE_FORM1_DETAILS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];


  useEffect(() => {
    const {
      cetificateOfSurveyNo,
      zoneOfOperation,
      expiryDate,
      dateOfEx,
      vesselName,
      officialNo,
      portOfRegsitry,
      certificateOfRegistryNo,
      grossTonnage,
      registeredTon,
      freeboardAssigned,
      LoadingMarks,
      nameOfTheMaster,
      masterCOC,
      number,
      placeOfIssue,
      nameOfEngineer,
      masterCOCgrade,
      numbers,
      placeOfIssued,
      address,
      dateOfSurvey,
      placeOfSurvey,
    } = state;
    const fieldValues = {
      cetificateOfSurveyNo,
      zoneOfOperation,
      expiryDate,
      dateOfEx,
      vesselName,
      officialNo,
      portOfRegsitry,
      certificateOfRegistryNo,
      grossTonnage,
      registeredTon,
      freeboardAssigned,
      LoadingMarks,
      nameOfTheMaster,
      masterCOC,
      number,
      placeOfIssue,
      nameOfEngineer,
      masterCOCgrade,
      numbers,
      placeOfIssued,
      address,
      dateOfSurvey,
      placeOfSurvey,
    };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);
  return (
    <Container className="master-class-form">
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
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
            <p className="mb-0 pad">
              This Certificate of Survey has been issued subsequent to Survey
              carried out of the below detailed inland vessel
            </p>
          </b>

          <div className="row">
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Name of the Vessel"
                id="vesselName "
                name="vesselName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.vesselName}
                touched={isTouched("vesselName", formik)}
                error={formik.errors.vesselName}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Official Number"
                id="officialNo "
                name="officialNo"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.officialNo}
                touched={isTouched("officialNo", formik)}
                error={formik.errors.officialNo}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Port of Registry"
                id="portOfRegsitry "
                name="portOfRegsitry"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.portOfRegsitry}
                touched={isTouched("portOfRegsitry", formik)}
                error={formik.errors.portOfRegsitry}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Certificate of Registry No."
                id="certificateOfRegistryNo "
                name="certificateOfRegistryNo"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.certificateOfRegistryNo}
                touched={isTouched("certificateOfRegistryNo", formik)}
                error={formik.errors.certificateOfRegistryNo}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Gross Tonnage"
                id="grossTonnage "
                name="grossTonnage"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.grossTonnage}
                touched={isTouched("grossTonnage", formik)}
                error={formik.errors.grossTonnage}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Registered Tonnage"
                id="registeredTon "
                name="registeredTon"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.registeredTon}
                touched={isTouched("registeredTon", formik)}
                error={formik.errors.registeredTon}
                required={true}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Freeboard Assigned (mm)"
                id="freeboardAssigned "
                name="freeboardAssigned"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.freeboardAssigned}
                touched={isTouched("freeboardAssigned", formik)}
                error={formik.errors.freeboardAssigned}
                required={true}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <SelectBox
                label="Loading marks placed on the vessel's side"
                id="LoadingMarks"
                options={options}
                isTouched={formik.touched.LoadingMarks}
                error={formik.errors.LoadingMarks}
                onChange={formik.handleChange}
                value={formik.values.LoadingMarks}
                required={true}
                 isIdSelect={true}          
                className="select"
                name="LoadingMarks"
                isRequired={true}
                       
               />
                      
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Name of the Master"
                id="nameOfTheMaster"
                name="nameOfTheMaster"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nameOfTheMaster}
                touched={isTouched("nameOfTheMaster", formik)}
                error={formik.errors.nameOfTheMaster}
                required={true}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Master's COC Grade"
                id="masterCOC "
                name="masterCOC"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.masterCOC}
                touched={isTouched("masterCOC", formik)}
                error={formik.errors.masterCOC}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Number"
                id="number "
                name="number"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.number}
                touched={isTouched("number", formik)}
                error={formik.errors.number}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Place of Issue"
                id="placeOfIssue"
                name="placeOfIssue"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.placeOfIssue}
                touched={isTouched("placeOfIssue", formik)}
                error={formik.errors.placeOfIssue}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Name of the Engineer or Engine Driver"
                id="nameOfEngineer "
                name="nameOfEngineer"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nameOfEngineer}
                touched={isTouched("nameOfEngineer", formik)}
                error={formik.errors.nameOfEngineer}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Master's COC Grade"
                id="masterCOCgrade "
                name="masterCOCgrade"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.masterCOCgrade}
                touched={isTouched("masterCOCgrade", formik)}
                error={formik.errors.masterCOCgrade}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Number"
                id="numbers "
                name="numbers"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.numbers}
                touched={isTouched("numbers", formik)}
                error={formik.errors.numbers}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Place of Issue"
                id="placeOfIssued"
                name="placeOfIssued"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.placeOfIssued}
                touched={isTouched("placeOfIssued", formik)}
                error={formik.errors.placeOfIssued}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Name & Address of Owner or Agent"
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
                touched={isTouched("address", formik)}
                error={formik.errors.address}
                required={true}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Date of Survey Carried out"
                id="dateOfSurvey"
                name="dateOfSurvey"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dateOfSurvey}
                touched={isTouched("dateOfSurvey", formik)}
                error={formik.errors.dateOfSurvey}
                required={true}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label=" Place of Survey Carried out"
                id="placeOfSurvey"
                name="placeOfSurvey"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.placeOfSurvey}
                touched={isTouched("placeOfSurvey", formik)}
                error={formik.errors.placeOfSurvey}
                required={true}
              />
            </Col>
          </div>
        </div>

        <div className="row btn-container">
          <div className="modal-buttons">
            <Buttons
                onClick={handleClose}
              label={"Cancel"}
              className="btn-outline"
              type="button"
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
