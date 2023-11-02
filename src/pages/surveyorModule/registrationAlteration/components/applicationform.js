import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../../../../components/button";
import "./style.scss";

const AnnexureForm = ({ show, handleClose }) => {
  const [dataTable, setDataTable] = useState([]);

  const [inputBoxes, setInputBoxes] = useState(["", "", ""]);
  const tableColumns = [
    { heading: "Fire Fighting Item", value: "item", type: "row" },
    { heading: "FNumber/Type", value: "type", type: "row" },
    { heading: "Condition", value: "condition", type: "row" },
    { heading: "Location", value: "location", type: "row" },
  ];

  const initialValues = {
    surveyor:"",
    registerAuthority:"",
   
  };

  const requiredField = Yup.string().required("Field required!");
  
  const validationSchema = Yup.object({
    registerAuthority:requiredField,
    surveyor:requiredField
   });

    const onSubmit = (values) => {
        console.log("??????????????????????", formik.values);
       };
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        
      });
  useEffect(() => {
    newFunction();
  }, []);

  function newFunction() {
    let data = [
      {
        item: "Fire Fighting Plan",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Fire Fighting Plan",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Fire Pumps (Mech)",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Fire Pumps (Hand)",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Portable Extinguishers",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Fixed Extinguishing System",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Fire Buckets",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Sand Boxes",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Hydrants",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
      {
        item: "Hoses, Fittings and Nozzles",
        type: "Display Field",
        condition: "Display Field",
        location: "Display Field",
      },
    ];

    setDataTable(data);
  }

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        className="registrtion-alteration-view"
      >
        <Modal.Header closeButton>
          <Row className="col-md-12">
            <Col md={7}>
              <p className="aproval-form-name">Form Number 6 </p>
              <h2>Request / Application for registration of alteration</h2>
            </Col>
            <Col md={5} className="d-flex justify-content-end">
              <Button className="btn-outline btn-download">Download</Button>
            </Col>
          </Row>
        </Modal.Header>
        <form className=""  onSubmit={formik.handleSubmit}>

        <Modal.Body>
          <div className="review-card">
            <Row>
              <Col md={12}>
                <h6>To</h6>
                <h6>The Registering Authority</h6>
                <p style={{ marginBottom: "35px" }}>Name Displayed</p>
                <p className="lnh30">
                  I, being the owner of inland vessel named{" "}
                  <b>Display Vessel Name </b>
                  Official Number <b>Display Official Number</b> hereby, report
                  that the following alterations have been carried out on the
                  Vessel:
                </p>
              </Col>
            </Row>
            <Row className="add-alteration mb-3">
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
                        value="Dispaly Details"
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <p className="lnh30">
                  I, therefore, apply for registering the alterations or the
                  issue of a fresh Registration Certificate. I enclose herewith
                  a duplicate copy of online receipt showing the deposit of the
                  necessary fees.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={5} sm={12} lg={5}>
                <p>
                  I also enclose herewith the original certificate of
                  Registration No.
                </p>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <p>
                  {" "}
                  <img
                    src="../../../assets/icons/attachment_icon.svg"
                    className="attachment--icon"
                    style={{
                      marginRight: "2px",
                    }}
                  />
                  <b>Display File Name</b>
                </p>
              </Col>
            </Row>
            <div className="d_signature">
              <div class="d-flex justify-content-between">
                <div>
                  <p>
                    <b>Date:</b>
                    <span> Display Date</span>
                  </p>
                </div>
                <div className="">
                  <p>Signature of the Owner</p>
                </div>
              </div>
            </div>
            <hr />

            <Row>
             
               
                <div className="col-md-4 col-lg-4 col-sm-12">
                <label>Surveyor Remark</label>
                <TextArea
                    rows={4}
                    name="surveyor"
                      onChange={formik.handleChange}
                      value={formik.values.surveyor}
                      touched={formik.touched.surveyor}
                      error={formik.errors.surveyor}
                      required={true}
                  />
                </div>
             
               
                <div className="col-md-4 col-lg-4 col-sm-12">
                <label>Registering Authority Remarks</label>
                <TextArea
                
                    rows={4}
                    name="registerAuthority"
                      onChange={formik.handleChange}
                      value={formik.values.registerAuthority}
                      touched={formik.touched.registerAuthority}
                      error={formik.errors.registerAuthority}
                      required={true}
                  />
                </div>
             
            </Row>
            <br/>
            <div className="d_signature">
              <div class="d-flex justify-content-between">
                <div>
                  <p>
                    <b>Date:</b>
                    <span> Display Date</span>
                  </p>
                </div>
                <div className="">
                  <h6><strong>Alterations Verified by</strong></h6>
                  <h6><strong>Name of Surveyor</strong></h6>
                  <p>Signature</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Buttons
              onClick={handleClose}
              label={"Cancel"}
              className={"btn-outline"}
            ></Buttons>
            <Buttons
              type="submit"
              label={"Approve"}
              className={"btn-default"}
            ></Buttons>
          </Modal.Footer>


</form>
      </Modal>
    </div>
  );
};

export default AnnexureForm;
