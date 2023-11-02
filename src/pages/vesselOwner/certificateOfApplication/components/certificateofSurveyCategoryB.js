import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";

const AnnexureForm = ({ show, handleClose }) => {
  const [dataTable, setDataTable] = useState([]);

  const displayFields = [
    {
      label: "Category of Vessel",
      value: "Display Field",
    },
    {
      label: "Certificate of Survey No.",
      value: "Display Field",
    },
    {
      label: "Zone of Operation",
      value: "Display Field",
    },
    {
      label: "Date of Issue",
      value: "Display Field",
    },
    {
      label: "Date of Expiry",
      value: "Display Field",
    },
  ];
  const detailedInlandVessalData = [
    {
      label: "Name of the Vessel",
      value: "Display Field",
    },
    {
      label: "Official Number",
      value: "Display Field",
    },
    {
      label: "Port of Registry",
      value: "Display Field",
    },
    {
      label: "Certificate of Registry No.",
      value: "Display Field",
    },
    {
      label: "Gross Tonnage",
      value: "Display Field",
    },
    {
      label: "Registered Tonnage",
      value: "Display Field",
    },
    {
      label: "Freeboard Assigned (mm)",
      value: "Display Field",
    },
    {
      label: "Loading marks placed on the vessel's side",
      value: "Display Field",
    },
    {
      label: "Name of the Master",
      value: "Display Field",
    },
    {
      label: "Master's COC Grade",
      value: "Display Field",
    },
    {
      label: "Number",
      value: "Display Field",
    },
    {
      label: "Place of Issue",
      value: "Display Field",
    },
    {
      label: "Name of the Engineer or Engine Driver",
      value: "Display Field",
    },
    {
      label: "Master's COC Grade",
      value: "Display Field",
    },
    {
      label: "Number",
      value: "Display Field",
    },
    {
      label: "Place of Issue",
      value: "Display Field",
    },
    {
      label: "Date of Survey Carried out",
      value: "Display Field",
    },
    {
      label: "Place of Survey Carried out",
      value: "Display Field",
    },
    {
      label: "Name & Address of Owner or Agent",
      value: "Display Field",
    },
  ];
  const tableColumns = [
    { heading: "Fire Fighting Item", value: "item", type: "row" },
    { heading: "FNumber/Type", value: "type", type: "row" },
    { heading: "Condition", value: "condition", type: "row" },
    { heading: "Location", value: "location", type: "row" },
  ];

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
        className="provisional-certificate-view"
      >
        <Modal.Header closeButton>
          <Row className="col-md-12">
            <Col md={6}>
              <p className="aproval-form-name">Form Number 6 </p>
              <h2>Certificate of Survey </h2>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <Button className="btn-outline btn-download">Download</Button>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="text-center color-gray">Form Number 6 </h4>
            <h2 className="text-center">Certificate of Survey</h2>
            <h4 className="text-center">Category B/ Category C Vessel </h4>
          </div>
          <div className="review-card">
            <Row>
              {displayFields.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>
            <Row>
              <b>
                <p className="mt-4">
                  This Certificate of Survey has been issued subsequent to
                  Survey carried out of the below detailed inland vessel:
                </p>
              </b>
            </Row>
            <Row>
              {detailedInlandVessalData.map((input) => (
                <Col md={4}>
                  <label>{input.label}</label>
                  <p className="display_value">{input.value}</p>
                  <hr />
                </Col>
              ))}
            </Row>
            <Row className="Plying-limits mb-4">
              <h4>Plying Limits (As applicable)</h4>
              <p>
                Within inland water limits of <b>Display Field</b>
              </p>
            </Row>
            <Row className="cargo-details">
              <h4>Cargo / Passenger Capacity</h4>
              <p>
                Maximum permissible cargo carriage capacity <b>Display Field</b>{" "}
                tonnes and / or <b>Display Field</b> Passengers with{" "}
                <b>Display Field</b> Crew
              </p>
            </Row>
            <Row>
              <b className="mb-2">Safety Equipment carried on the vessel:</b>

              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th rowspan="2">No. of boats size and cubic capacity</th>
                      <th rowspan="2">
                        No. of buoyant apparatus or Life rafts
                      </th>
                      <th colspan="2" className="text-center">
                        No. of lifebuoys and lifejackets
                      </th>
                      <th colspan="3" className="text-center">
                        Fire extinguishers
                      </th>
                      <th rowspan="2">No. of anchors with their weight</th>
                      <th colspan="2" className="text-center">
                        Length Size
                      </th>
                    </tr>
                    <tr className="collaspsed-thead">
                      <th>Lifebuoy</th>
                      <th>Lifejacket</th>
                      <th>Foam Type</th>
                      <th>Soda acid</th>
                      <th>Dry Cargo Powder</th>
                      <th>Anchor cable</th>
                      <th>Hose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                    </tr>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
            <Row>
              <p>
                This is to certify that the provisions of the rules with respect
                to the survey of the above mentioned Inland Vessel and the
                Transmission of declaration in respect thereof, have been
                complied with.
              </p>
              <p>
                This Certificate, unless previously cancelled or revoked, to be
                in force only until the <b>Display Field</b> Day of{" "}
                <b>Display Field</b>
              </p>
            </Row>

            <div className="d_signature">
              <div class="d-flex justify-content-between">
                <div>
                  <p>Examined and Registered</p>
                </div>
                <div className="">
                  <p>Signed by Chief Surveyor</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AnnexureForm;
