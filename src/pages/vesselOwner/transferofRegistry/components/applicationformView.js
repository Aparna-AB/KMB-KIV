import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";
import TextBox from "../../../../components/textBox";

const AnnexureForm = ({ show, handleClose }) => {
  const [dataTable, setDataTable] = useState([]);

  const [inputBoxes, setInputBoxes] = useState(["", "", ""]);
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
        className="transfer-registry-view"
      >
        <Modal.Header closeButton>
          <Row className="col-md-12">
            <Col md={7}>
              <p className="aproval-form-name">Form Number 7 </p>
              <h2>Request / Application for registration of alteration</h2>
            </Col>
            <Col md={5} className="d-flex justify-content-end">
              <Button className="btn-outline btn-download">Download</Button>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <div className="review-card">
            <Row>
              <Col md={12}>
                <h6>To</h6>
                <h6>The Registering Authority</h6>
                <p style={{ marginBottom: "35px" }}>Name Displayed</p>
                <p className="lnh30">
                  I, <b> Display Name</b> Resident of <b> Display Address</b>{" "}
                  being the Owner or Master of an Inland Vessel{" "}
                  <b> Display Vessel Name</b>. Official Number{" "}
                  <b> Display Official Number</b> hereby request that the
                  registry of the said vessel may kindly be transferred to your
                  register from the register of the Registering Authority of
                  <b> Display Details</b> in the state of{" "}
                  <b> Display Details</b> The certificate of registration is
                  enclosed herewith. Online receipt for Rs.{" "}
                  <b> Display Amount</b> is also enclosed.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={12} sm={12} lg={12}>
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
                  <p className="mb-2">
                    <b>Place:</b>
                    <span> Display Place</span>
                  </p>
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
              <Col md={4}>
                <label className="mb-2">Registering Authority Remarks</label>
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

export default AnnexureForm;
