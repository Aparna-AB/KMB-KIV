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
    applicationName: "",
    applyingTo: "",
    referenceNo: "",
    officialNo: "",
    issuedDate: "",
    signature: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    applicationName: requiredField("Application Name"),
    applyingTo: requiredField("Appliying To"),
    referenceNo: requiredField("Reference Number"),
    officialNo: requiredField("Official Number"),
    issuedDate: requiredField("Issed Date"),
    signature: requiredField("Signature"),
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
      label: "Applicant Name",
      id: "applicationName",
      name: "applicationName",
      type: "text",
      required: true,
    },
    {
      label: "Applying To",
      id: "applyingTo",
      name: "applyingTo",
      type: "text",
      required: true,
    },
    {
      label: "Reference Number",
      id: "referenceNo",
      name: "referenceNo",
      type: "text",
      required: true,
    },
    {
      label: "Official Number of vessel",
      id: "officialNo",
      name: "officialNo",
      type: "text",
      required: true,
    },
    {
      label: "Issued Date of Declaration Form",
      id: "issuedDate",
      name: "issuedDate",
      type: "text",
      required: true,
    },
    {
      label: "Signature of Applicant",
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
        className="certificate-application"
      >
        <form
          className="form-control application-form"
          onSubmit={formik.handleSubmit}
        >
          <Modal.Header closeButton>
            <div>
              <h4>Form Number 3</h4>
              <h2>Application For Certificate of Survey </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
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
