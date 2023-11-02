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
    regauthority: "",
    applicationName: "",
    applicantAddress: "",
    issuedAt: "",
    reasons: "",
    applicationDate: "",
    signature: "",
    place: "",
    ownerName: "",
    nameofMaster: "",
    occupation: "",
    nameofRegistry: "",
    whenvesselsecured: "",
    kindofVessel: "",
    nameofBuilders: "",
    detailsofinsurance: "",
  };

  const requiredField = (name) => Yup.string().required(`Required!`);

  const validationSchema = Yup.object({
    regauthority: requiredField(),
    applicationName: requiredField("Application Name"),
    applicantAddress: requiredField("Application Address"),
    issuedAt: requiredField("Issued At"),
    reasons: requiredField("Reasons"),
    applicationDate: requiredField("Application Date"),
    signature: requiredField("Signature"),
    place: requiredField("Required"),
    ownerName: requiredField("Required"),
    nameofMaster: requiredField("Required"),
    occupation: requiredField("Required"),
    nameofRegistry: requiredField("Required"),
    whenvesselsecured: requiredField(),
    kindofVessel: requiredField(),
    nameofBuilders: requiredField(),
    detailsofinsurance: requiredField(),
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
      id: "regauthority",
      name: "regauthority",
      type: "text",
      required: true,
      inputType: "textBox",
    },
    {
      label: "Applicant Name",
      id: "applicationName",
      name: "applicationName",
      type: "text",
      required: true,
      inputType: "textBox",
    },
    {
      label: "Applicant Address",
      id: "applicantAddress",
      name: "applicantAddress",
      type: "text",
      inputType: "textarea",
      required: true,
    },
    {
      label: "Issued At",
      id: "issuedAt",
      name: "issuedAt",
      type: "text",
      required: true,
      inputType: "textBox",
    },
    {
      label: "Reasons",
      id: "reasons",
      name: "reasons",
      type: "text",
      required: true,
      inputType: "textarea",
    },
    {
      label: "Application Date",
      id: "applicationDate",
      name: "applicationDate",
      type: "date",
      required: true,
      inputType: "text",
    },
    {
      label: "Signature of Owner or Master of the Vessel",
      id: "signature",
      name: "signature",
      type: "file",
      required: true,
    },
    {
      label: "Place",
      id: "place",
      name: "place",
      type: "text",
      required: true,
      inputType: "textBox",
    },
  ];

  const inputFields2 = [
    {
      label: "Owner's name and address in full",
      id: "ownerName",
      name: "ownerName",
      type: "text",
      required: true,
      inputType: "textarea",
    },
    {
      label: "Name of Master and his Certificate No.(if applicable)",
      id: "nameofMaster",
      name: "nameofMaster",
      type: "text",
      required: true,
      inputType: "textarea",
    },
    {
      label: "Occupation",
      id: "occupation",
      name: "occupation",
      type: "text",
      required: true,
      inputType: "textBox",
    },
    {
      label: "Name of Registry and No. if previously registered",
      id: "nameofRegistry",
      name: "nameofRegistry",
      type: "text",
      inputType: "textarea",
      required: true,
    },
    {
      label: "When and how the vessel was secured",
      id: "whenvesselsecured",
      name: "whenvesselsecured",
      type: "text",
      required: true,
      inputType: "textarea",
    },
    {
      label:
        "Kind of vessel viz. motor, name and address of engine makers with horsepower, speed and year of make",
      id: "kindofVessel",
      name: "kindofVessel",
      type: "text",
      required: true,
      inputType: "textarea",
    },
    {
      label: "Name and address of builders with place and year of built",
      id: "nameofBuilders",
      name: "nameofBuilders",
      type: "text",
      required: true,
      inputType: "textarea",
    },
    {
      label: "Details of Insurance Certificate",
      id: "detailsofinsurance",
      name: "detailsofinsurance",
      type: "text",
      required: true,
      inputType: "textarea",
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
              <h2>
                Application for issuance of provisional certificate of
                registration
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-5">
              {inputFields1.map(({ id, label, name, inputType, type }) => (
                <Col md={4} sm={12} lg={4} key={id}>
                  {inputType === "textarea" ? (
                    <TextArea
                      label={label}
                      id={id}
                      name={name}
                      type={type}
                      onChange={formik.handleChange}
                      value={formik.values[name]}
                      error={formik.errors[name]}
                      required={true}
                      touched={formik.touched[name]}
                    />
                  ) : (
                    <TextBox
                      label={label}
                      id={id}
                      name={name}
                      type={type}
                      onChange={formik.handleChange}
                      value={formik.values[name]}
                      error={formik.errors[name]}
                      required={true}
                      touched={formik.touched[name]}
                    />
                  )}
                </Col>
              ))}
            </Row>
            <Row className="mb-5">
              <p>
                <b>
                  I agree to pay such fees as may be payable under the rules.
                  Particulars in respect of the said Vessel are as under :
                </b>
              </p>
              {inputFields2.map(({ id, label, name, inputType, type }) => (
                <Col md={4} sm={12} lg={4} key={id}>
                  {inputType === "textarea" ? (
                    <TextArea
                      label={label}
                      id={id}
                      name={name}
                      type={type}
                      onChange={formik.handleChange}
                      value={formik.values[name]}
                      error={formik.errors[name]}
                      required={true}
                      touched={formik.touched[name]}
                    />
                  ) : (
                    <TextBox
                      label={label}
                      id={id}
                      name={name}
                      type={type}
                      onChange={formik.handleChange}
                      value={formik.values[name]}
                      error={formik.errors[name]}
                      required={true}
                      touched={formik.touched[name]}
                    />
                  )}
                </Col>
              ))}
            </Row>

            <Row className="mb-4 align-items-center ml-20">
              <h5>Enclosures:</h5>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">
                  a)A statement by the Owner that the provisions of the Act and
                  these rules have been complied with; A duplicate of the
                  Certificate of Survey
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center ml-20">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">
                  b) Copy of the 3rd party insurance certificate of the vessel
                  duly attested
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center ml-20">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">
                  c) Builder's certificate for new vessels
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center ml-20">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">
                  d) Instrument of sale (for second hand vessels)
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center ml-20">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">e) Mortgage details and</p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center ml-20">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">f) Declaration of Ownership</p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center ml-20">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <p className="file-upload-tag">
                  g) Online receipt evidencing payment of fees as specified in
                  the schedule for the registration of{" "}
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox type="file"></TextBox>
              </Col>
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
