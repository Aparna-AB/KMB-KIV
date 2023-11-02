

import React from "react";
import Modal from "react-bootstrap/Modal";
import TextArea from "../../../../components/textArea";
import "../style.scss";
import Container from "react-bootstrap/Container";
import * as Yup from "yup";
import { useFormik } from "formik";

  
const ApprovalForm = ({ show, handleClose }) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="carving"
      >
        <Modal.Header closeButton>
          <div>
            <p className="form-name">Form Number 5 </p>
            <h4>Carving and Marking Note</h4>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container className="master-class-form">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                  <h6 className="main-head">Date</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12">
                  <h6 className="main-head">12/21/2023</h6>
                </div>
              </div>
              <div className="row">
                   <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Reference Number</h6>
                    <p>Display field</p>
                    <hr />
                 
                </div>
              </div>
              <div className="row toadress">
                <h6>To</h6>
                <h6>The Owner or Master on the Inland Vessel</h6>
                <p>Name Displayed</p>
              </div>

              <div className="row toadress">
                <p>
                  Sir/Madam,
                  <br />
                  This has reference to your application for registration of the
                  above named vessel and subsequent enquiry of the vessel
                  conducted under rule 6 of these rules, you are advised to have
                  the below enumerated marks carved on the vessel's hull under
                  rule 9 of these rules:
                </p>
              </div>
              <div className="row  textrow">
              <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Name of the Vessel</h6>
                    <p>Display field</p>
                    <hr />
                 
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Official Number</h6>
                    <p>Display field</p>
                    <hr />
                 
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Port of Registry</h6>
                    <p>Display field</p>
                    <hr />
                 
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Year of Registry</h6>
                    <p>Display field</p>
                    <hr />
                 
                </div>
              
                </div>
              <div className="row toadress">
                <p>
                  You are further advised to contact this office after the
                  completion of requisite carving (which in no case shall be
                  greater than fifteen days from the date of issue of this
                  letter) for final inspection for the purpose of registering
                  this vessel. Please also be advised that you shall be required
                  to surrender this carving note in original at the time of
                  issuance of Certificate of Registration.
                </p>
              </div>

              <div className="row namerow">
                <h6>Yours faithfully</h6>
                <h6>Registering Authority</h6>
                <p>Inland Vessels</p>
              </div>
              <hr/>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <TextArea
                    label="Surveyor / Chief Surveyor"
                    rows={4}
                    name="surveyor"
                      />
                </div>
              </div>

            </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
