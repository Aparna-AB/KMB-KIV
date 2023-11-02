import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextBox from "../../../../components/textBox";
import Buttons from "../../../../components/button";



const AnnexureForm = ({ show, handleClose,backToSecond,handleUpdateForm,ActionType,state }) => {
  const [dataTable, setDataTable,  handleUpdateData,] = useState([]);

  const initialValues = {
   withinInlandWaterLimitsOf: "",
   notExtendingBeyond: "",
   maxPermissibleCargoCarriageCapacity: "",
   tonnesAndOr: "",
   passengersWithCrew: "",
  //  chiefSurveyorSign: "",
   dayOf: "",
   Year: "",

  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    withinInlandWaterLimitsOf: requiredField("Within inland Water limits Of"),
    notExtendingBeyond: requiredField("Not extending beyond"),
    maxPermissibleCargoCarriageCapacity: requiredField("Maximum permissible cargo carriage capacity"),
    tonnesAndOr: requiredField("tonnes and / or"),
    passengersWithCrew: requiredField("tonnes and / or"),
    // chiefSurveyorSign: requiredField("Signed by Chief Surveyor"),
    dayOf: requiredField("Day of"),
    Year: requiredField("Year"),
    // chiefSurveyorSign: requiredField("Signed by Chief Surveyor"),
  });

  const onSubmit = (values) => {
    console.log("helloo",values);
    handleClose();
    handleUpdateForm(values, ActionType.UPDATE_FORM2_DETAILS);
    
    };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  useEffect(() => {
    const {
   withinInlandWaterLimitsOf,
   notExtendingBeyond,
   maxPermissibleCargoCarriageCapacity,
   tonnesAndOr,
   passengersWithCrew,
  //  chiefSurveyorSign,
   dayOf,
   Year,

  } = state;
    const fieldValues = {
      withinInlandWaterLimitsOf,
      notExtendingBeyond,
      maxPermissibleCargoCarriageCapacity,
      tonnesAndOr,
      passengersWithCrew,
      // chiefSurveyorSign,
      dayOf,
      Year,
      };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);

  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const inputFields1 = [
    {
        label: "Within inland Water limits of",
        id: "withinInlandWaterLimitsOf",
        name: "withinInlandWaterLimitsOf",
        type: "text",
        required: true,
      },
      {
        label: "Not entending beyond",
        id: "notExtendingBeyond",
        name: "notExtendingBeyond",
        type: "text",
        required: true,
      },
     
  ];

  const inputFields2 = [
    {
        label: "Maximum Permissible cargo carriage capacity",
        id: "maxPermissibleCargoCarriageCapacity",
        name: "maxPermissibleCargoCarriageCapacity",
        type: "text",
        required: true,
      },
      {
        label: "Tonnes and / or",
        id: "tonnesAndOr",
        name: "tonnesAndOr",
        type: "text",
        required: true,
      },
      {
        label: "Passengers with Crew",
        id: "passengersWithCrew",
        name: "passengersWithCrew",
        type: "text",
        required: true,
      },
     
  ];

  const inputFields3 = [
    {
        label: "Day of",
        id: "dayOf",
        name: "dayOf",
        type: "date",
        required: true,
      },
      {
        label: "Year",
        id: "Year",
        name: "Year",
        type: "date",
        required: true,
      },
  ];

  const inputFields4 = [
{
    label: "Signed by Chief Surveyor",
    id: "chiefSurveyorSign",
    name: "chiefSurveyorSign",
    type: "file",
    required: true,
}
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
              <p className="aproval-form-name">Form Number 4 </p>
              <h2>Provisional Certificate of Survey </h2>
            </Col>
            {/* <Col md={6} className="d-flex justify-content-end">
              <Button className="btn-outline btn-download">Download</Button>
            </Col> */}
          </Row>
         
        </Modal.Header>
        <form
          className="form-control application-form"
          onSubmit={formik.handleSubmit}
        >
       
        <Modal.Body>
          <div>
            <h4 className="text-center color-gray">Form Number 4 </h4>
            <h2 className="text-center">Provisional Certificate of Survey </h2>
            <h4 className="text-center">Category A Vessel </h4>
          </div><br/>
          <Row>
          <h6><strong>Plying limits (As applicable) </strong></h6>

              {inputFields1.map((input) => (
                <Col md={4}>
                  <TextBox
                    label={input.label}
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                    required={input.required}
                    key={input.id}
                  />
                </Col>
              ))}
            </Row><br/>

            <Row>
          <h6><strong>Cargo / Passenger Capacity</strong></h6>

              {inputFields2.map((input) => (
                <Col md={4}>
                  <TextBox
                    label={input.label}
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                    required={input.required}
                    key={input.id}
                  />
                </Col>
              ))}
            </Row>
          <div className="review-card">
           
            
            <Row>
              <b className="mb-2">Safety Equipment carried on the vessel:</b>
              {/* <div className="fire_fitings">
                <Table data={dataTable} column={tableColumns} />
              </div> */}
              {/* <div class="">
                <table class="table-container kmb-table table table-striped table-bordered table-hover">
                  <tr>
                    <th rowspan="2">Merged Heading</th>
                    <th colspan="2" class="merged-heading">
                      Subheading 1
                    </th>
                    <th colspan="2" class="merged-heading">
                      Subheading 2
                    </th>
                  </tr>
                  <tr>
                    <th>Subheading A</th>
                    <th>Subheading B</th>
                    <th>Subheading A</th>
                    <th>Subheading B</th>
                  </tr>
                  <tr>
                    <td>Merged Cell</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                  <tr>
                    <td>Merged Cell</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                </table>
              </div> */}
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
              This Provisional Certificate of Survey, issued under the provisions of section 13 (1) 
              of the Inland Vessels Act, 2021 continues to be in force only until the{" "}
            </p>
             
            </Row>

            <Row>

              {inputFields3.map((input) => (
                <Col md={4}>
                  <TextBox
                    label={input.label}
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                    required={input.required}
                    key={input.id}
                  />
                </Col>
              ))}
            </Row><br/>
            <div className="d_signature">
              <div class="d-flex justify-content-between">
                <div>
                  <p><strong>Examined and Registered</strong></p>
                </div>
                <div className="">
                  <p>Signed by Chief Surveyor</p>
                  {/* {inputFields4.map((input) => (
                <Col md={4}>
                  <TextBox
                    label={input.label}
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                    required={input.required}
                    key={input.id}
                  />
                </Col>
              ))} */}
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Buttons
               label={"Back"}
              className={"btn-outline"}
              onClick={backToSecond}
            ></Buttons>
            <Buttons
              type="submit"
              label={"Submit"}
              className={"btn-default"}
            //   onClick={handleViewClick}

            ></Buttons>
          </div>
        
        </Modal.Body>
        </form>
        {/* <Modal.Footer >
           
          </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default AnnexureForm;
