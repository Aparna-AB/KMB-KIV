import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";

const ApplicationForm = ({ show, handleClose }) => {
  const [dataTable, setDataTable] = useState([]);

  const displayFields = [
    {
      label: "Issued By (details of Registering Authority) ",
      value: "Display Field",
    },
  ];
  const particularVessalData = [
    {
      label: "Name of the Vessel",
      value: "Display Field",
    },
    {
      label: "Where Built",
      value: "Display Field",
    },
    {
      label: "No. Date and Port of Previous Registry (If any)",
      value: "Display Field",
    },
    {
      label: "Whether Self Propelled / Propulsion Type",
      value: "Display Field",
    },
    {
      label: "Name and address of Builders",
      value: "Display Field",
    },
    {
      label: "Numbers of Decks",
      value: "Display Field",
    },
    {
      label: "Stem",
      value: "Display Field",
    },
    {
      label: "Stern",
      value: "Display Field",
    },
    {
      label: "Material Description",
      value: "Display Field",
    },
    {
      label: "Numbers of Bulkheads",
      value: "Display Field",
    },
    {
      label: "Length of engine - room (If any)",
      value: "Display Field",
    },
    {
      label: "Metres",
      value: "Display Field",
    },
  ];
  const particularPropellingData = [
    {
      label: "No. of Engines",
      value: "Display Field",
    },
    {
      label: "Combined Power",
      value: "Display Field",
    },
    {
      label: "Name and address of the Engine Maker",
      value: "Display Field",
    },
  ];
  const particularTonnageData = [
    {
      label: "Gross Tonnage",
      value: "Display Field",
    },
    {
      label: "Net Tonnage",
      value: "Display Field",
    },
    {
      label: "The Number of crew for whom accommodation is certified",
      value: "Display Field",
    },
    {
      label:
        "A detailed summary of the tonnages for this vessel is shown on the Certificate of Survey",
      value: "Display Field",
    },
  ];
  const ownerData = [
    {
      label: "Name, Residence and Occupation of the Owner",
      value: "Display Field",
    },
    {
      label: "Number of Tenth Shares",
      value: "Display Field",
    },
    {
      label: "Date",
      value: "Display Field",
    },
    {
      label: "Registering Authority",
      value: "Display Field",
    },
  ];
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        className="regprovisional-certificate-view"
      >
        <Modal.Header closeButton>
          <Row className="col-md-12">
            <Col md={6}>
              <p className="aproval-form-name">Form Number 4 </p>
              <h2>Provisional Certificate of Registration</h2>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <Button className="btn-outline btn-download">Download</Button>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <div className="review-card">
            <Row className="mb-4">
              {displayFields.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>

            <Row className="mb-4">
              <h4>Particulars of Vessel</h4>
              {particularVessalData.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>
            <Row className="Plying-limits mb-4">
              <h4>
                Particulars of Propelling Engins & Machinery{" "}
                <span>as supplied by Builders, Owners or Engine Makers</span>
              </h4>
              {particularPropellingData.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>
            <Row>
              <h4>Particulars of Tonnage</h4>
              <p>
                The tonnages of this vessel in accordance with India Tonnage
                Certificate are:
              </p>
              {particularTonnageData.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>

            <Row>
              <p className="declaration-text">
                I, the Undersigned, Registering Authority at the Port of
                <b> Display Field</b> in State here by certify that the Vessel
                the Description of which is prefixed to this Provisional
                certificate, has been duly surveyed, and that the above
                Description is true that <b>Display Field</b> whose Certificate
                of Competency of Service is No <b>Display Field</b> , is the
                Master of the said Vessel, and that the Name{" "}
                <b>Display Field</b> , Residence and Description of the Owner{" "}
                <b>Display Field</b> , and number of Tenth Shares Held by are as
                follows:
              </p>
            </Row>
            <Row>
              {ownerData.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApplicationForm;
