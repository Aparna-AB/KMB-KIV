import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import SuccessModal from "../../../../components/successModal";

import Buttons from "../../../../components/button";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import RadioButton from "../../../../components/radioButton";
import { Messages } from "../../../../utils/constants";
import CertificateOfSurvey from "../components/certificateOfSurvey";
import "./style.scss";
const ApprovalForm = ({
  show,
  handleClose,
  handleUpdateData,
  selectedItem,
  // handleOnClick,
  openModal3,
  ActionType,
  state,
  handleUpdateForm,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [Show, setShow] = useState(false);
  const handleViewClick = () => {
    setShow(!Show);
  };

  const initialValues = {
    vesselCategory: "",
    expiryOnorBefore: "",
    dayOf: "",
    provCertificateOfSurveyNo: "",
    zoneOperation: "",
    issuedDate: "",
    expiredDate: "",

    vesselName: "",
    officialNo: "",
    portOfRegistry: "",
    certificateOfRegistryNo: "",
    grossTonnage: "",
    regTonnage: "",
    freeboardassigned: "",
    loadingMarksOnVesselSide: "",
    masterName: "",
    masterCOCgrade: "",
    Number: "",
    placeOfIssue: "",
    nameOfEngineerOrDriver: "",
    masterCOCsgrade: "",
    Numbers: "",
    placeOfIssues: "",
    nameAndAddressOfOwnerOrAgent: "",
    dateOfSurveyCarriedOut: "",
    placeOfSurveyCarriedOut: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    vesselCategory: requiredField("Vessel Category"),
    expiryOnorBefore: requiredField("Expiry On or Before the"),
    dayOf: requiredField("Day Of"),
    provCertificateOfSurveyNo: requiredField(
      "Provision Certificate of survey No:"
    ),
    zoneOperation: requiredField("Zone of operation"),
    issuedDate: requiredField("Issed Date"),
    expiredDate: requiredField(" Date of Expiry"),
    vesselName: requiredField("Name of the Vessel"),
    officialNo: requiredField("Official Number"),
    portOfRegistry: requiredField("Port of Registry"),
    certificateOfRegistryNo: requiredField("Certificate of Registry No"),
    grossTonnage: requiredField("Gross Tonnage"),
    regTonnage: requiredField("Registered Tonnage"),
    freeboardassigned: requiredField("Freeboard Assigned"),
    loadingMarksOnVesselSide: requiredField(
      "Loading Marks Placed on the vessel's side"
    ),
    masterName: requiredField("Name of the Master"),
    masterCOCgrade: requiredField("Master's COC Grade"),
    Number: requiredField("Number"),
    placeOfIssue: requiredField("Place of Issue"),
    nameOfEngineerOrDriver: requiredField(
      "Name of Engineer or Engineer Driver"
    ),
    masterCOCsgrade: requiredField("Master's COC Grade"),
    Numbers: requiredField("Number"),
    placeOfIssues: requiredField("Place of Issue"),
    nameAndAddressOfOwnerOrAgent: requiredField(
      "Name & Address of Owner or Agent"
    ),
    dateOfSurveyCarriedOut: requiredField("Date of Survey Carried out"),
    placeOfSurveyCarriedOut: requiredField("Place of Survey Carried out"),
  });

  const onSubmit = (values) => {
    console.log("hiiiiii", values);
    // handleOnClick();
    openModal3();
    handleUpdateForm(values, ActionType.UPDATE_FORM1_DETAILS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  useEffect(() => {
    const {
      vesselCategory,
      expiryOnorBefore,
      dayOf,
      provCertificateOfSurveyNo,
      zoneOperation,
      issuedDate,
      expiredDate,
      vesselName,
      officialNo,
      portOfRegistry,
      certificateOfRegistryNo,
      grossTonnage,
      regTonnage,
      freeboardassigned,
      loadingMarksOnVesselSide,
      masterName,
      masterCOCgrade,
      Number,
      placeOfIssue,
      nameOfEngineerOrDriver,
      masterCOCsgrade,
      Numbers,
      placeOfIssues,
      nameAndAddressOfOwnerOrAgent,
      dateOfSurveyCarriedOut,
      placeOfSurveyCarriedOut,
    } = state;
    
    const fieldValues = {
      vesselCategory,
      expiryOnorBefore,
      dayOf,
      provCertificateOfSurveyNo,
      zoneOperation,
      issuedDate,
      expiredDate,
      vesselName,
      officialNo,
      portOfRegistry,
      certificateOfRegistryNo,
      grossTonnage,
      regTonnage,
      freeboardassigned,
      loadingMarksOnVesselSide,
      masterName,
      masterCOCgrade,
      Number,
      placeOfIssue,
      nameOfEngineerOrDriver,
      masterCOCsgrade,
      Numbers,
      placeOfIssues,
      nameAndAddressOfOwnerOrAgent,
      dateOfSurveyCarriedOut,
      placeOfSurveyCarriedOut,
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
      label: "Vessel Category",
      id: "vesselCategory",
      name: "vesselCategory",
      type: "text",
      required: true,
    },
    {
      label: "Expiry On or Before the",
      id: "expiryOnorBefore",
      name: "expiryOnorBefore",
      type: "text",
      required: true,
    },
    {
      label: "Day Of",
      id: "dayOf",
      name: "dayOf",
      type: "text",
      required: true,
    },
    {
      label: "Provisional Certificate of survey No:",
      id: "provCertificateOfSurveyNo",
      name: "provCertificateOfSurveyNo",
      type: "text",
      required: true,
    },
    {
      label: "Zone Of Operation",
      id: "zoneOperation",
      name: "zoneOperation",
      type: "text",
      required: true,
    },
    {
      label: "Issued Date of Declaration Form",
      id: "issuedDate",
      name: "issuedDate",
      type: "date",
      required: true,
    },
    {
      label: "Date of expiry",
      id: "expiredDate",
      name: "expiredDate",
      type: "date",
      required: true,
    },
  ];

  const inputFields2 = [
    {
      label: "Name of the Vessel",
      id: "vesselName",
      name: "vesselName",
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
    {
      label: "Port of Registry",
      id: "portOfRegistry",
      name: "portOfRegistry",
      type: "text",
      required: true,
    },
    {
      label: "Certificate of Registry No",
      id: "certificateOfRegistryNo",
      name: "certificateOfRegistryNo",
      type: "text",
      required: true,
    },
    {
      label: "Gross Tonnage",
      id: "grossTonnage",
      name: "grossTonnage",
      type: "text",
      required: true,
    },
    {
      label: "Registered Tonnage",
      id: "regTonnage",
      name: "regTonnage",
      type: "text",
      required: true,
    },
    {
      label: "Freeboard Assigned(mm)",
      id: "freeboardassigned",
      name: "freeboardassigned",
      type: "text",
      required: true,
    },
    {
      label: "Loading Marks On Vessel's Side",
      id: "loadingMarksOnVesselSide",
      name: "loadingMarksOnVesselSide",
      type: "text",
      required: true,
    },
    {
      label: "Name of the Master",
      id: "masterName",
      name: "masterName",
      type: "text",
      required: true,
    },
    {
      label: "Master's COC Grade",
      id: "masterCOCgrade",
      name: "masterCOCgrade",
      type: "text",
      required: true,
    },
    {
      label: "Number",
      id: "Number",
      name: "Number",
      type: "text",
      required: true,
    },
    {
      label: "Place of Issue",
      id: "placeOfIssue",
      name: "placeOfIssue",
      type: "text",
      required: true,
    },
    {
      label: "Name of Engineer or Engineer Driver",
      id: "nameOfEngineerOrDriver",
      name: "nameOfEngineerOrDriver",
      type: "text",
      required: true,
    },
    {
      label: "Master's COC Grade",
      id: "masterCOCsgrade",
      name: "masterCOCsgrade",
      type: "text",
      required: true,
    },
    {
      label: "Number",
      id: "Numbers",
      name: "Numbers",
      type: "text",
      required: true,
    },
    {
      label: "Place of Issue",
      id: "placeOfIssues",
      name: "placeOfIssues",
      type: "text",
      required: true,
    },
    {
      label: "Name & Address of Owner or Agent",
      id: "nameAndAddressOfOwnerOrAgent",
      name: "nameAndAddressOfOwnerOrAgent",
      type: "text",
      required: true,
    },
    {
      label: "Date of Survey Carried out",
      id: "dateOfSurveyCarriedOut",
      name: "dateOfSurveyCarriedOut",
      type: "date",
      required: true,
    },
    {
      label: "Place of Survey Carried out",
      id: "placeOfSurveyCarriedOut",
      name: "placeOfSurveyCarriedOut",
      type: "text",
      required: true,
    },
  ];

  return (
    <div>
      {/* {Show && <CertificateOfSurvey show={show} handleClose={handleClose} />} */}

      {showSuccessModal && (
        <SuccessModal
          showSuccessModal={showSuccessModal}
          handleClose={() => setShowSuccessModal(false)}
          message={Messages.monthlypermitapprovemsg}
        />
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="certificate-application"
      >
        <form
          className="form-control application-form"
          onSubmit={formik.handleSubmit}
        >
          <Modal.Header closeButton>
            <div>
              <h4>Form Number 3</h4>
              <h2>Provisional Certificate of Survey </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h4 className="text-center color-gray">Form Number 4 </h4>
              <h2 className="text-center">
                Provisional Certificate of Survey{" "}
              </h2>
              <h6 className="text-center">
                <strong>Category A Vessel </strong>
              </h6>
            </div>
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
            <br />

            <Row>
              <h6>
                <strong>
                  This Provisional Certificate of Survey has been issued
                  subsequent to Survey carried out of the below detailed inland
                  vessel:
                </strong>
              </h6>

              {inputFields2.map((input) => (
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
          </Modal.Body>

          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Buttons
              onClick={handleClose}
              label={"Cancel"}
              className={"btn-outline"}
            ></Buttons>
            <Buttons
              type="submit"
              label={"Next"}
              className={"btn-default"}
                onClick={openModal3}
            ></Buttons>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
