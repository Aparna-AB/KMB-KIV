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
    vessalName: "",
    officialNo: "",
    applicationDate: "",
    signature: "",
    certificate: "",
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
    vessalName: requiredField("Vessal Name"),
    officialNo: requiredField("Official Number"),
    applicationDate: requiredField("Application Date"),
    signature: requiredField("Signature"),
    certificate: requiredField("Original Certificate of Registration"),
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
      label: "Vessel Name",
      id: "vessalName",
      name: "vessalName",
      type: "text",
      required: true,
    },
    {
      label: "Vessel Official Number",
      id: "officialNo",
      name: "officialNo",
      type: "text",
      required: true,
    },
    {
      label: "Application Date",
      id: "applicationDate",
      name: "applicationDate",
      type: "text",
      required: true,
    },
    {
      label: "Original Certificate of Registration",
      id: "certificate",
      name: "certificate",
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
              <h4>Form Number 6 </h4>
              <h2>Request / Application for registration of alteration</h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-5">
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
            <Row className="add-alteration">
              <p>Alterations have been carried out on the Vessel</p>
              <div className="content-box">
                <Row className="mb-2">
                  {inputBoxes.map((value, index) => (
                    <Col md={12} className="aleration-textbox">
                      <span>{index + 1}. </span>
                      <TextBox
                        placeholder="Enter Alteration"
                        name="alteration"
                        type="textbox"
                        value={value}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                      />
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col md={12}>
                    <button
                      onClick={handleAddBox}
                      type="button"
                      className="add-aleration-btn"
                    >
                      Add a Line
                    </button>
                  </Col>
                </Row>
              </div>
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
