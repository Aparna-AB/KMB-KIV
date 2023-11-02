import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Buttons from "../../../../components/button";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import Stepper from 'react-stepper-horizontal';
import { Tabs, Tab } from 'react-bootstrap';
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
// import SuccessMessage from './successMessage';


const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;


  // const RegisterForm = ({ show, handleClose }) => {
  //   const [showToast, setToast] = useState(false);
  //   const [currentTab, setCurrentTab] = useState("maindetails");
  //   const [currentStep, setCurrentStep] = useState(1); 
  const RegisterForm = ({ show, handleClose }) => {
    const [currentTab, setCurrentTab] = useState("Form1");

    const navigate = useNavigate();
    const handleNavigation = (route) => navigate(`/${route}`);
    const [showSuccess, setShowSuccess] = useState(false);

  // const handleButtonClick = () => {
  //   setShowSuccess(true);
  //   setTimeout(() => {
  //     setShowSuccess(false);
  //   }, ); 
  // };

    const steps = [
      { title: '', id: 'Form1' },
      { title: '', id: 'Form2' },
      { title: '', id: 'Form3' },
      { title: '', id: 'Form4' },
      { title: '', id: 'Form5' },
      { title: '', id: 'Form6' },
    ];

    const initialValues = {
      sectionClerkRemarks: "",
    };

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
        label: "Surveyor",
        id: "Surveyor",
        name: "Surveyor",
        type: "text"
    },
   
];
const validationSchema = Yup.object({
  sectionClerkRemarks: Yup.string().required("Remarks is required!"),
});

const onSubmit = (values) => {
  
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
        className="customer-approval-reg"
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <Stepper steps={steps} activeStep={steps.findIndex(step => step.id === currentTab)} />

        <Tabs
        defaultActiveKey="maindetails"
        activeKey={currentTab}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
            <Tab eventKey="Form1" title="Form1">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <h5>Form Number 1</h5>
                  <h4 className="main-head">Application For Conducting Survey of Inland Vessels</h4>
                </div>
              </div><br/>
              <div className="row1">
               <div className="col-md-12 col-lg-12 col-sm-12">
                  <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h5>Date</h5>
                      <p>24-05-2023</p>
                      <hr />
                    </div>

                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h5>Survey Type</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h5>Applying to Chief Surveyor at</h5>
                      <p>Swathi Gangatharan AP</p>
                      <hr />
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h5>Name of Vessel</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                    <h5>Official Number of Vessel</h5>
                      <p>Display field</p>
                      <hr />
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h5>Place</h5>
                      <p>Display field</p>
                      <hr />
                    </div>

                    <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Port of Registry of Vessel</h5>
                  <p>Display field</p>
                  <hr />
                </div>

                
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Registered Tonnage</h5>
                  <p>Display field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Vessel Type</h5>
                  <p>Display Selection</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Category of Vessel</h5>
                  <p>Display Selection</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Name of Builder</h5>
                  <p>Display Selection</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Address of Builder</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit 
                    vehicula felis vulputate vel. Pellentesque ultrices 
                    lacus quis auctor ligula semper dictumst arcu 
                    proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Year of Build</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>
                   Hull Dimension</h5>
                  <p>
                 Display Selection </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>
                   Place of Last Survey</h5>
                  <p>
                 Display Selection </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Date of Last Survey</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5> Owners Name</h5>
                  <p> Display Selection </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Owners Mobile Number</h5>
                  <p>Display Selection</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>
                   Address of Owner</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit 
                    vehicula felis vulputate vel. Pellentesque ultrices 
                    lacus quis auctor ligula semper dictumst arcu 
                    proin.
                 </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12" style={{marginTop: "70px"}}>
                  <h5>Name of Agent</h5>
                  <p> Display Field </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12" style={{marginTop: "70px"}}>
                  <h5>Agent Number</h5>
                  <p>Display Selection</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5> Address of Agent</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit 
                    vehicula felis vulputate vel. Pellentesque ultrices 
                    lacus quis auctor ligula semper dictumst arcu 
                    proin.
                 </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Type And BHP of Main Propulsion Machinery</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit 
                    vehicula felis vulputate vel. Pellentesque ultrices 
                    lacus quis auctor ligula semper dictumst arcu 
                    proin.
                 </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Details of Other Machinery</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit 
                    vehicula felis vulputate vel. Pellentesque ultrices 
                    lacus quis auctor ligula semper dictumst arcu 
                    proin.
                 </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Date of Purposed Survey</h5>
                  <p> Display Field </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Time of Purposed Survey</h5>
                  <p>Display Selection</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Place of Purposed Survey</h5>
                  <p> Display Field </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Signature of Owner/Master/Authorized Person</h5>
                  <p>Display File Name</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Proof of Payment of survey fee and other charges</h5>
                  <p>Display File Name </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Copy of Certificate of Registration</h5>
                  <p>Display File Name</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Copy of last certificate of survey*</h5>
                  <p> Display File Name </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Document establishing the Authority of 
                    Authorized Person (if making request)</h5>
                  <p>Display File Name</p>
                  <hr />
                </div>
                  </div>       
                </div>
                </div>
              <div className="row btn-container">
                <div className="modal-buttons">
                  <Buttons
                    label={"Cancel"}
                    className="button-close"
                    onHide={handleClose}
                  ></Buttons>
                  {/* <Buttons
                    type="submit"
                    label={"Next "}
                    className="button-submit"
                    onClick={() => setCurrentTab("address")}
                  ></Buttons> */}
                  <Buttons
  label={"Next "}
  className="button-submit"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex + 1].id);
  }}
></Buttons>
                </div>
              </div>
            </Tab>


            <Tab eventKey="Form2" title="Form2">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                 
                  <h5>Form Number 7</h5>
                  <h4 className="main-head">
                  Particular To Be Furnished For Survey Of New Vessel Or Vessels Which Are To Be <br/>
                  Surveyed For The First Time
                  </h4>
                  </div></div>
                 <br/>
              <div className="row1">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Name of Vessel (if already named)/Yard Number*</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Length of Vessel</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Breadth of Vessel</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Depth of Vessel</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Vessel Type</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Owner Name</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Owner Address</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit
                     vehicula felis vulputate vel. Pellentesque ultrices
                      lacus quis auctor ligula semper dictumst arcu
                       proin.</p> 
                </div> </div>
              <br/>
                <h4>Particulars of Hull</h4>
            <div className="row">
 
             <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Material of Hull</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Year of Build</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Builders Name</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Builders Address</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>No. of Bulk Heads ,their Placement and Thickness</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Hull Plaiting Materials and Thickness</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Frames(Material and thickness)</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Floors(Material and thickness)</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Builders Certificates</h5>
                  <p>Display File Name</p>
                  <hr />
                </div>
</div>
 </div>
              </div>
              <div className="row btn-container">
                <div className="modal-buttons">
                
                  <Buttons
  label={"Back"}
  className="button-close"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex - 1].id);
  }}
></Buttons>
 <Buttons
  label={"Next "}
  className="button-submit"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex + 1].id);
  }}
></Buttons>

                </div>
              </div>
            </Tab>

            <Tab eventKey="Form3" title="Form3">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                 
                  <h5>Form Number 7</h5>
                  <h4 className="main-head">
                  Propulsion And Equipment
                  </h4>
                  </div></div>

                  <div className="row1">
              <div className="col-md-12 col-sm-12 col-lg-12">
              <h4>Particulars of Propulsion of Engines</h4>
                <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>No of sets fitted and Sr. Number</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Manufacture's Name and Brand</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Mobile Number</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Type of Engine with Horse Power of each</h5>
                  <p>Lorem ipsum dolor sit amet 
                    consectetur. Sit <br/>vehicula felis vulputate
                    vel. Pellentesque ultrices <br/>lacus quis 
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Stroke and Cylinder Diameter</h5>
                  <p>Lorem ipsum dolor sit amet 
                    consectetur. Sit <br/>vehicula felis vulputate
                    vel. Pellentesque ultrices <br/>lacus quis 
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Owner Name</h5>
                  <p>Lorem ipsum dolor sit amet 
                    consectetur. Sit <br/>vehicula felis vulputate
                    vel. Pellentesque ultrices <br/>lacus quis 
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Diameter of propulsion shaft and material</h5>
                  <p>Lorem ipsum dolor sit amet 
                    consectetur. Sit <br/>vehicula felis vulputate
                    vel. Pellentesque ultrices <br/>lacus quis 
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                       <hr/>
                </div> 
                
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Years of Build</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Test Certificate</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Types and Number of gears</h5>
                  <p>Lorem ipsum dolor sit amet 
                    consectetur. Sit <br/>vehicula felis vulputate
                    vel. Pellentesque ultrices <br/>lacus quis 
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                </div>
              <br/>
                <h4>Particulars of Equipment</h4>
            <div className="row">
 
             <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Anchor-Spare (Weight and Material of each <br/>equipment)</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Anchor-Port, Starboard(Weight and Material of <br/>each)</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Chain: Size Type and length and test certificate <br/>(Port)</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Chain: Size Type and length and test certificate <br/>(Starboard)</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Ropes-Size, material and no of ropes</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Search Lights, number, size and power</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Lifebuoys, Buoyant apparatus with Self Ignited <br/>Lights, No. with buoyant lanyard</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Navigation Lights giving particulars and certificate,<br/>
                   main mast, auxiliary mast, port, Starboard, Stem, <br/>
                   Anchor not under command</h5>
                   <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Shapes for anchor not under command</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Sound signals: Mechanical or Electrical</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                </div>
                </div>
                </div>
              </div>
<div className="row btn-container">
                <div className="modal-buttons">
                <Buttons
  label={"Back"}
  className="button-close"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex - 1].id);
  }}
></Buttons>
 <Buttons
  label={"Next "}
  className="button-submit"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex + 1].id);
  }}
></Buttons>
                </div>
              </div>
            </Tab>


            <Tab eventKey="Form4" title="Form4">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                 
                  <h5>Form Number 7</h5>
                  <h4 className="main-head">
                  Fire And Other Particulars
                  </h4>
                  </div></div>

                  <div className="row1">
              <div className="col-md-12 col-sm-12 col-lg-12">
              <h4>Particulars of Fire Appliances</h4>
                <div className="row">

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Number ,size and Capacity of fire pumps</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Fire mains, diameter, material and no. of Hydrants</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Any other equipment</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Type of Engine with Horse Power of each</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Nozzles</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Number of hoses</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
                </div>
              <br/>

                <h4>No. of Portable Fire Extinguisher with Particulars and name of Manufactures </h4>
            <div className="row">
 
             <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Soda Acid</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Foam</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Dry Powder</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Any other types</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

               
              <div className="col-md-12 col-sm-12 col-lg-12">
              <h4>Particulars of Communication Equipment</h4>
                <div className="row">

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Equipment Details</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                </div></div>

               
              <div className="col-md-12 col-sm-12 col-lg-12">
              <h4>Particulars of Navigation Equipment</h4>
                <div className="row">

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Equipment Details</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                </div></div>

                
                </div>
                </div>
              </div>
<div className="row btn-container">
                <div className="modal-buttons">
                <Buttons
  label={"Back"}
  className="button-close"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex - 1].id);
  }}
></Buttons>
 <Buttons
  label={"Next "}
  className="button-submit"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex + 1].id);
  }}
></Buttons>
                </div>
              </div>
            </Tab>

            <Tab eventKey="Form5" title="Form5">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                 
                  <h5>Form Number 7</h5>
                  <h4 className="main-head">
                  Final Particulars
                  </h4>
                  </div></div>

                  <div className="row1">
              <div className="col-md-12 col-sm-12 col-lg-12">
              <h4>Particulars of Pollution Control Devices</h4>
                <div className="row">

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Sewage treatment and disposal</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Solid waste processing and disposal</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Sound Pollution Control</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Water Consumption/Day</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Source of Water</h5>
                  <p>Display Field</p>
                  <hr />
                </div>
               
                </div>
              <br/>

                <h4>No. of Deck Crew and Management Crew  </h4>
            <div className="row">
 
             <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Number of Deck Crew</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Number of Engine Crew</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                <h4>Number of Passengers</h4>
                <div className="row">

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Plans and Drawings</h5>
                  <p>Display Field</p>
                  <hr />
                </div>

                </div>

 
              <h4>Plans and Drawings</h4>
                <div className="row">

                <div className="col-md-4 col-lg-4 col-sm-12">
                  <h5>Plans and Drawings</h5>
                  <p>Lorem ipsum dolor sit amet <br/>
                    consectetur. Sit vehicula felis vulputate <br/>
                    vel. Pellentesque ultrices lacus quis <br/>
                    auctor ligula semper dictumst arcu <br/>
                proin.</p>
                  <hr />
                </div>

                </div>
                </div>
                </div>
              </div>

          
<div className="row btn-container">
                <div className="modal-buttons">
                <Buttons
  label={"Back"}
  className="button-close"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex - 1].id);
  }}
></Buttons>
 <Buttons
  label={"Next "}
  className="button-submit"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex + 1].id);
  }}
></Buttons>
                </div>
              </div>
            </Tab>

            <Tab eventKey="Form6" title="Form6">
            <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <h4 className="main-head">
                Remarks
                  </h4>
                 

                <Row className="justify-content-md">
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

<div className="row btn-container">
                <div className="modal-buttons">
                <Buttons
  label={"Back"}
  className="button-close"
  onClick={() => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    setCurrentTab(steps[currentIndex - 1].id);
  }}
></Buttons>
 
                  <Buttons
                    type="submit"
                    label={"Approve"}
                    className="button-submit"
                    
                  ></Buttons>
                   {/* <button onClick={handleButtonClick}>Approve</button>
      <SuccessMessage show={showSuccess} /> */}
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

export default RegisterForm;
