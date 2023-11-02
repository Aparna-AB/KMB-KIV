import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Buttons from "../../../../components/button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TextArea from "../../../../components/textArea";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;

const ApprovalForm = ({ show, handleClose }) => {
  const [showToast, setToast] = useState(false);
  const [currentTab, setCurrentTab] = useState("maindetails");
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="customer-approval-reg"
      >
        <Modal.Header closeButton>
          <div>
            <p className="aproval-form-name">Form Number 3 </p>
            <h4>Application for Certificate of Competency</h4>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="maindetails"
            activeKey={currentTab}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="maindetails" title="Main Details">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <div className="note">
                    <p>
                      Note: The applicant shall submit this form duly filled in
                      along with the necessary certificates to the examination
                      centre for permission to appear in the examination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="main-head">PART A</h4>
                <p className="sub-head">Personal Particulars</p>
                <div className="col-md-8 col-lg-8 col-sm-12">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Name in Full</h5>
                      <p>Display field</p>
                      <hr />
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Surname</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Nationality</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Place of Birth</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Permanent address</h5>
                      <p>
                        Lorem ipsum text Lorem ipsum textLorem ipsum text Lorem
                        ipsum text
                      </p>
                      <hr />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Date of Birth</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-md-4  col-lg-4 col-sm-12">
                  <div className="profile-img">
                    <img
                      src="../../../assets/images/profile.png"
                      alt="profile-img"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="main-head">PART B</h4>
                <p className="sub-head">
                  Particulars of all previous certificates (If any)
                </p>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Number</h5>
                  <p>Display field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Competency of Service</h5>
                  <p>Display field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Grade</h5>
                  <p>Display field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Where Issued</h5>
                  <p>Display field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Date of Issue</h5>
                  <p>Display field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>
                    Is the certificate any time suspended or cancelled by court
                    or authority (if yes, provide details)
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sit vehicula felis
                    vulputate vel. Pellentesque ultrices lacus quis auctor
                    ligula semper dictumst arcu proin.
                  </p>
                  <hr />
                </div>
              </div>
              <div className="row btn-container">
                <div className="modal-buttons">
                  <Buttons
                    label={"Cancel"}
                    className="button-close"
                    onClick={handleClose}
                  ></Buttons>
                  <Buttons
                    type="submit"
                    label={"Next "}
                    className="button-submit"
                    onClick={() => setCurrentTab("address")}
                  ></Buttons>
                </div>
              </div>
            </Tab>
            <Tab eventKey="address" title="Address Details">
              <div className="row">
                <h4 className="main-head">PART C</h4>
                <p className="sub-head">Certificate now required</p>
                <div className="col-md-8 col-lg-8 col-sm-12">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Grade</h5>
                      <p>Display field</p>
                      <hr />
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Competency</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="main-head">PART D</h4>
                <p className="sub-head">Certificate now required</p>
                <div className="col-md-8 col-lg-8 col-sm-12">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>Have you appeared for this examination earlier?</h5>
                      <p>Display field</p>
                      <hr />
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h5>If yes mention year and month</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="main-head">PART E</h4>
                <p className="sub-head">Declaration to be made by applicant:</p>
                <p className="note-text">
                  Note: Any person who makes, procures to be made or assists in
                  making any false representation for the purpose of obtaining
                  for himself, or any other person, a certificate either of
                  competency or service, is for each offense liable to be
                  punished for cheating under section 420 of the Indian Penal
                  Code and also for knowingly giving false information to the
                  public servant under section 182 of the Indian Penal Code,
                  1860.
                </p>
                <h4 className="main-head">Declaration</h4>
                <p className="note-text">
                  I do hereby declare that the particulars contained in Part A,
                  B, C, D and E of this form are correct and true to the best of
                  my knowledge and belief, and that the papers enumerated in
                  Part - G and sent with this form are true and genuine
                  documents, given and signed by the persons whose name appear
                  on them, I further declare that the statement in Part - G
                  contains true and correct account of the whole of my services
                  without exception.
                </p>
              </div>
              <div className="signature-wrapper">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="d-flex">
                      <span className="datetxt">Date</span> display date
                    </div>
                    <div className="d-flex">
                      <span className="addrestxt">Present Address</span> Lorem
                      ipsum dolor sit amet consectetur. Sit vehicula felis
                      vulputate vel. Pellentesque ultrices lacus quis auctor
                      ligula semper dictumst arcu proin.
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-12 text-end">
                    Signature of Applicant
                  </div>
                </div>
              </div>
              <div className="row btn-container">
                <div className="modal-buttons">
                  <Buttons
                    label={"Back"}
                    className="button-close"
                    onClick={() => setCurrentTab("maindetails")}
                  ></Buttons>
                  <Buttons
                    type="submit"
                    label={"Next "}
                    className="button-submit"
                    onClick={() => setCurrentTab("additionaldetails")}
                  ></Buttons>
                </div>
              </div>
            </Tab>
            <Tab eventKey="additionaldetails" title="Additional Details">
              <div className="row">
                <h4 className="main-head">PART G</h4>
                <p className="sub-head">
                  List of testimonials and statement of service on rivers or
                  shore or sea
                </p>
                <h6> 1. If served on board vessel.</h6>
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>i) No. of testimonials or certificates (if any)</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>ii) Name of vessel where employed</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>iiii) Horse power of the engine on which worked</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>iv) Port of registry and official no. of the vessel</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                </div>
                <h6> 2. Service particulars of the Applicant</h6>
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>i) Capacity</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>ii) Date of appointment</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>iii) Date of termination or leaving</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>iv) State, if continuing</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>v) Total period served - Year</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>v) Total period served - Month</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>v) Total period served - Day</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5> vi) Total service</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5> vii) Total service on shore or river</h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>
                      viii) Period served for which certificates are now
                      produced
                    </h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h5>
                      ix) Period served for which no certificates are produced
                    </h5>
                    <p>Display field</p>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="row btn-container">
                <div className="modal-buttons">
                  <Buttons
                    label={"Back"}
                    className="button-close"
                    onClick={() => setCurrentTab("address")}
                  ></Buttons>
                  <Buttons
                    type="button"
                    label={"Next"}
                    className="button-submit"
                    onClick={() => setCurrentTab("examinorCertificate")}
                  ></Buttons>
                </div>
              </div>
            </Tab>
            <Tab eventKey="examinorCertificate" title="Examinor Certificate">
              <div className="row">
                <h4 className="main-head">PART F</h4>
                <p className="sub-head">Personal Particulars</p>
                <p className="note-para">
                  The declaration under Part - E above was signed in my presence
                  and the fee of Rs. Display Data received.
                </p>
              </div>
              <h4>Remarks</h4>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Section clerk Remarks</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sit vehicula felis
                    vulputate vel. Pellentesque ultrices lacus quis auctor
                    ligula semper dictumst arcu proin.
                  </p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Port Conservator Remarks</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sit vehicula felis
                    vulputate vel. Pellentesque ultrices lacus quis auctor
                    ligula semper dictumst arcu proin.
                  </p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Examiner Remarks</h5>
                  <TextArea
                    placeholder="Enter Remarks"
                    id="address"
                    name="address"
                    type="text"
                    row={6}
                    className="examinor-remarks"
                  />
                </div>
              </div>
              <div className="signature-wrapper">
                <div className="row mt-40">
                  <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="d-flex">
                      <span className="datetxt">Date</span> display date
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-12 text-end">
                    Signature of Applicant
                  </div>
                </div>
              </div>
              <div className="row btn-container">
                <div className="modal-buttons">
                  <Buttons
                    label={"Back"}
                    className="button-close"
                    onClick={() => setCurrentTab("additionaldetails")}
                  ></Buttons>
                  <Buttons
                    type="submit"
                    label={"Approve"}
                    className="button-submit"
                  ></Buttons>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
