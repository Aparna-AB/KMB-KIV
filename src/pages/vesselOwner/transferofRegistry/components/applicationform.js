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
    reistoringAuthority: "",
    v_name: "",
    v_no: "",
    applicantName: "",
    address: "",
    tnsfr_reg: "",
    reg_state: "",
    signature: "",
    place: "",
    fee: "",
    applcnt_date: "",
    online_rcpt: "",
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
    reistoringAuthority: requiredField(" Registering Autority"),
    v_name: requiredField("Vessal Name"),
    v_no: requiredField("Official Number"),
    applicantName: requiredField("Applicant Name"),
    address: requiredField("Applicant Address"),
    tnsfr_reg: requiredField("Applicant Address"),
    reg_state: requiredField("Registration Authority State"),
    signature: requiredField("Signature"),
    place: requiredField("Place"),
    fee: requiredField("Place"),
    applcnt_date: requiredField("Application Date"),
    online_rcpt: requiredField("Online Receipt"),
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
      label: "Registering Authority",
      id: "reistoringAuthority",
      name: "reistoringAuthority",
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
      label: "Applicant Address",
      id: "address",
      name: "address",
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
      label: "Transfer to the Registering Authority",
      id: "tnsfr_reg",
      name: "tnsfr_reg",
      type: "text",
      required: true,
    },
    {
      label: "Registration Authority State",
      id: "reg_state",
      name: "reg_state",
      type: "text",
      required: true,
    },
    {
      label: "Fee Paid",
      id: "fee",
      name: "fee",
      type: "text",
      required: true,
    },
    {
      label: "Online receipt",
      id: "online_rcpt",
      name: "online_rcpt",
      type: "file",
      required: true,
    },
    {
      label: "Application Date",
      id: "applcnt_date",
      name: "applcnt_date",
      type: "date",
      required: true,
    },
    {
      label: "Place",
      id: "place",
      name: "place",
      type: "text",
      required: true,
    },
    {
      label: "Signature of Owner or Master of the Vessel*",
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
              <h4>Form Number 6 </h4>
              <h2>Request / Application for registration of alteration</h2>
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
