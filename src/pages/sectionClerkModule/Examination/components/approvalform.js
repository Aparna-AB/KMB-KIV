import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Buttons from "../../../../components/button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextArea from "../../../../components/textArea";


const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;

const ApprovalForm = ({ show, handleClose }) => {
  const [showToast, setToast] = useState(false);
  const [currentTab, setCurrentTab] = useState("maindetails");
  const survey_textarea = [
    {
        label: "Section clerk Remarks*",
        id: "section_clerk_remarks",
        name:  "section_clerk_remarks",
        type: "text"
    },
    {
        label: "Port Conservator Remarks",
        id: "pc_remarks",
        name: "pc_remarks",
        type: "text"
    },
    {
        label: "Examiner Remarks",
        id: "examiner_remarks",
        name: "examiner_remarks",
        type: "text"
    },
   
];

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
        <div className="col-md-12 col-sm-12 col-lg-12">
        <span className="sub-head">Form Number 3<br/></span>
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
                    onHide={handleClose}
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
              <h4>Part C</h4>
              <p className="sub-head">Certificate now required</p>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>Grade</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>Competency</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
               </div>

               <h4>Part D</h4>
              <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>Have you appeared for this examination earlier?</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>If yes mention year and month</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                  </div>

<h4>Part E</h4>
<h5>Declaration to be made by applicant:</h5>
<div className="row">
<div className="col-md-12 col-sm-12 col-lg-12">
                 
                  <p className="content">
                  Note: Any person who makes, procures to be made or assists in making any false representation for the purpose of obtaining for himself, or any other person,<br/> a certificate either of 
                  competency or service, is for each offense liable to be punished for cheating under section 420 of the Indian Penal Code and also for knowingly giving false information to the
                  public servant under section 182 of the Indian Penal Code, 1860.
                  </p>
                 
                </div>
              
                  </div>

                 
<div className="row">
<h4>Declaration</h4>
<div className="col-md-12 col-sm-12 col-lg-12">
                
                  <p className="content">
                  I do hereby declare that the particulars contained in Part A, B, C, D and E of this form 
                  are correct and true to the best of my knowledge and belief, and that the papers enumerated 
                  in Part - G and sent with this form are true and genuine documents, given and signed by the 
                  persons whose name appear on them, I further declare that the statement in Part - G contains
                   true and correct account of the whole of my services without exception.
                  </p>
                 
                </div>
               </div>
<br/>
               <div className="row">
<div className="col-md-2 col-sm-2 col-lg-2">
  <h6> Date</h6>
  </div>
  <div className="col-md-6 col-sm-6 col-lg-6">
<p>Display Date</p>
  </div>
  <div className="col-md-4 col-sm-4 col-lg-4">
<p style={{float: "right"}}>Signature of  the Applicant</p>
  </div>
       </div>

               <div className="row">
<div className="col-md-2 col-sm-2 col-lg-2">
  <h6> Present Address</h6>
  </div>
  <div className="col-md-8 col-sm-8 col-lg-8">
<p>Lorem ipsum dolor sit amet consectetur. Sit
  <br/> vehicula felis vulputate vel. Pellentesque<br/> ultrices lacus quis auctor ligula semper 
  <br/>dictumst arcu proin.</p>
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
              <h4>Part G</h4>
              <h5>List of testimonials and statement of service on rivers shore or sea</h5>
              <p className="sub-head">1. If served on board vessel.</p>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>i) No. of testimonials or certificates (if any)</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>ii) Name of vessel where employed</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>iiii) Horse power of the engine on which worked</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>iv) Port of registry and official no. of the vessel</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <p className="sub-head">2. Service particulars of the Applicant</p>
<div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>i) Capacity</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>ii) Date of appointment</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>iii) Date of termination or leaving</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>iv) State, if continuing</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>v) Total period served - Year</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>v) Total period served - Month</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>v) Total period served - Day</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>vi) Total service</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>vii) Total service on shore or river</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>viii) Period served for which certificates are now produced</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h5>ix) Period served for which no certificates are produced</h5>
                  <p>Display Field</p>
                  <hr />
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
                    type="submit"
                    label={"Next "}
                    className="button-submit"
                    onClick={() => setCurrentTab("surveydetails")}
                  ></Buttons>
                </div>
              </div>
            </Tab>

            <Tab eventKey="surveydetails" title="Survey Details">
              <h4>Part C</h4>
           <h5>Certificate of the examiner</h5>
          <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
             <p>The declaration under Part - E above was signed in my presence and the fee of Rs.<b>Display Data</b> received.</p>
              </div> </div>

              <form>
            <div className="row">
              
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <Row className="justify-content-md">
                  <h4 className="main-head">
                Remarks
                  </h4>
                  <Row>
                        {survey_textarea.map((input) => (
                            <Col md={4}>
                                <TextArea
                                label={input.label}
                                id = {input.id}
                                name={input.name}
                                type={input.type}    
                                placeholder="Enter Remarks "   
                                style={{
                                  width: "374px",
height:" 178px",
top:" 21px",
borderRadius:" 4px",
// border: "1px",
border: "1px solid rgba(203, 201, 201, 1)",

                                }}                        
                            />
                          </Col>                          
                        ) )}
                        
                    </Row>
                    </Row>
                  </div>
                  </div>
              
             
               <div className="row" style={{marginTop: "50px"}}>
<div className="col-md-2 col-sm-2 col-lg-2">
  <h6> Date</h6>
  </div>
  <div className="col-md-6 col-sm-6 col-lg-6">
<p style={{float: "left"}}>Display Date</p>
  </div>
  <div className="col-md-4 col-sm-4 col-lg-4">
<p style={{float: "right"}}>Signature of  the Applicant</p>
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
                    label={"Approve "}
                    className="button-submit"
                   
                  ></Buttons>
                </div>
              </div>
              </form>
            </Tab>


            
          </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
