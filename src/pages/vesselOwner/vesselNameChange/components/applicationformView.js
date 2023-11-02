import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";
import TextBox from "../../../../components/textBox";

const ApplicationForm = ({ show, handleClose }) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        className="transfer-registry-view"
      >
        <Modal.Header closeButton>
          <Row className="col-md-12">
            <Col md={7}>
              <p className="aproval-form-name">Form Number 9 </p>
              <h2>
                Application for Change of Name of the Vessel on Certificate of
                Survey
              </h2>
            </Col>
            <Col md={5} className="d-flex justify-content-end">
              <Button className="btn-outline btn-download">Download</Button>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <div className="review-card">
            <Row className="mb-4">
              <Col md={2}>
                <h6>Date:</h6>
                <h6>Reference Number:</h6>
              </Col>
              <Col md={2}>
                <p className="mb-0">12/03/22</p>
                <p>Reference Number</p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={4}>
                <h6>From</h6>
                <h6>Name of Owner</h6>
                <p>Name Displayed</p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={4}>
                <h6>To</h6>
                <h6>The Chief Survey or of Inland Vessel</h6>
                <p>Name Displayed</p>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} lg={12}>
                <p>Sir/Madam,</p>
                <p>
                  <b>
                    {" "}
                    Subject: Change of name of the vessel on Certificate of
                    Survey No 73472983
                  </b>
                </p>
                <p className="lnh30">
                  I <b>Display Name</b> R/O <b>Display Details</b> being the
                  owner / master of Inland Vessel <b>Display Details</b>(name)
                  bearing Official No. <b>Display Details</b> hereby request
                  that the name of the vessel may be changed as{" "}
                  <b>Display Details</b>
                  (here enter the new name). The Certificate of Survey No.
                  <b>Display Details</b> dated in original and copy of
                  Certificate of Registration are enclosed herewith for making
                  the change of name
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} lg={12}>
                <p>
                  <b>
                    {" "}
                    Enclosures: as stated above{" "}
                    <img
                      src="../../../assets/icons/attachment_icon.svg"
                      className="attachment--icon"
                      style={{
                        marginRight: "2px",
                      }}
                    />
                    Display File Name
                  </b>
                </p>
              </Col>
            </Row>
            <div className="d_signature">
              <Row className="text-end">
                <Col md={12} sm={12} lg={12}>
                  <h6>Signature of the Owner</h6>
                  <h6>Name of Vessel Owner</h6>
                </Col>
              </Row>
            </div>
            <hr />
            <Row>
              <Col md={4}>
                <label className="mb-2">Surveyor Remark</label>
                <p className="display_value">
                  Lorem ipsum dolor sit amet consectetur. Sit vehicula felis
                  vulputate vel. Pellentesque ultrices lacus quis{" "}
                </p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApplicationForm;
