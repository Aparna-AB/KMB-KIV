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
import "./style.scss";
const ApprovalForm = ({
  show,
  handleClose,
  handleUpdateData,
  selectedItem,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const initialValues = {
    ref_No: "",
    v_name: "",
    v_no: "",
    applicantName: "",
    applying_to: "",
    ro: "",
    v_name_changed_as: "",
    application_date: "",
    signature: "",
    certificate_survey_no: "",
    certificte_servey_date: "",
    certificate_reg: "",
  };

  const [inputBoxes, setInputBoxes] = useState(["", "", ""]);
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

  const handleAddBox = () => {
    setInputBoxes([...inputBoxes, ""]);
    setShowAdditionalInputs(true);
  };

  const handleInputChange = (index, value) => {
    const newInputBoxes = [...inputBoxes];
    newInputBoxes[index] = value;
    setInputBoxes(newInputBoxes);
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    ref_No: requiredField("Reference Number"),
    v_name: requiredField("Vessal Name"),
    v_no: requiredField("Official Number"),
    applicantName: requiredField("Applicant Name"),
    application_date: requiredField("Applicantion Date"),
    applying_to: requiredField("Applying To"),
    ro: requiredField("R/O"),
    v_name_changed_as: requiredField("Vessel Name to be Changed as"),
    certificate_survey_no: requiredField("Certificate of Survey Number"),
    certificte_servey_date: requiredField("Certificate of survey Date"),
    signature: requiredField("Signature of Owner or Master of the Vessel"),
    certificate_reg: requiredField("Certificate of Registration"),
  });

  const onSubmit = (values) => {
    handleUpdateData(values);
    handleClose();
    setShowSuccessModal(true);
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

  const inputFields1 = [
    {
      label: "Reference Number",
      id: "ref_No",
      name: "ref_No",
      type: "text",
      required: true,
    },
    {
      label: "Applicant Name",
      id: "applicantName",
      name: "applicantName",
      type: "text",
      required: true,
    },
    {
      label: "Application Date",
      id: "application_date",
      name: "application_date",
      type: "date",
      required: true,
    },
    {
      label: "Applying To",
      id: "applying_to",
      name: "applying_to",
      type: "text",
      required: true,
    },
    {
      label: "R/O",
      id: "ro",
      name: "ro",
      type: "text",
      required: true,
    },
    {
      label: "Vessel Name",
      id: "v_name",
      name: "v_name",
      type: "text",
      required: true,
    },
    {
      label: "Vessel Official Number",
      id: "v_no",
      name: "v_no",
      type: "text",
      required: true,
    },

    {
      label: "Vessel Name to be Changed as",
      id: "v_name_changed_as",
      name: "v_name_changed_as",
      type: "text",
      required: true,
    },
    {
      label: "Certificate of Survey Number",
      id: "certificate_survey_no",
      name: "certificate_survey_no",
      type: "text",
      required: true,
    },
    {
      label: "Certificate of survey Date",
      id: "certificte_servey_date",
      name: "certificte_servey_date",
      type: "date",
      required: true,
    },
    {
      label: "Certificate of Registration",
      id: "certificate_reg",
      name: "certificate_reg",
      type: "file",
      required: true,
    },

    {
      label: "Signature of Owner or Master of the Vessel",
      id: "signature",
      name: "signature",
      type: "file",
      required: true,
    },
  ];

  return (
    <div>
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
        className="certificate-alteration"
      >
        <form
          className="form-control application-form"
          onSubmit={formik.handleSubmit}
        >
          <Modal.Header closeButton>
            <div>
              <h4>Form Number 9 </h4>
              <h2>
                Application for Change of Name of the Vessel on Certificate of
                Survey
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-4">
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
          </Modal.Body>

          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Buttons
              onClick={handleClose}
              label={"Cancel"}
              className={"btn-outline"}
            ></Buttons>
            <Buttons
              type="submit"
              label={"Apply"}
              className={"btn-default"}
            ></Buttons>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
