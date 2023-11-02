import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import SelectBox from "../../../../../components/Selectbox";
import { statusOptions } from "../../../../../utils/constants";
import Buttons from "../../../../../components/button";
import TextBox from "../../../../../components/textBox";
import TextArea from "../../../../../components/textArea";
import "../../style.scss"

const Index = ({
  handleShowForm1,
  handleClose,
}) => {
  const initialValues = {
    inlandWater: "",
    maxPossibleCargo: "",
    tonnes:"",
    passengers: "",
    date:"",
    year: "",
    sign: "",
  };
  const requiredField = Yup.string().required("Field required!");

  const validationSchema = Yup.object({
    inlandWater: requiredField,
    maxPossibleCargo: requiredField,
    tonnes: requiredField,
    passengers: requiredField,
    date: requiredField,
    year: requiredField,
    sign: requiredField,
  
    });
  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const onSubmit = (values) => {
    console.log("??????????????????????", formik.values);
   };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    
  });
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Container className="master-class-form">
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <b>
              <p className="mb-0 pad">PLYING LIMITS (As applicable) </p>
            </b>

            <div className="row ">
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox
                  label="Within inland water limits of"
                  id="inlandWater "
                  name="inlandWater"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.inlandWater}
                  touched={isTouched("inlandWater", formik)}
                  error={formik.errors.inlandWater}
                  required={true}
                />
              </Col>
            </div>
          </div>
        </div>
        <div className="row mt-5 bot">
          <b>
            <p className="mb-0 pad" >CARGO / PASSENGER CAPACITY </p>
          </b>

          <div className="row">
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Maximum permissible cargo carriage capacity"
                id="maxPossibleCargo "
                name="maxPossibleCargo"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.maxPossibleCargo}
                touched={isTouched("maxPossibleCargo", formik)}
                error={formik.errors.maxPossibleCargo}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="tonnes and / or"
                id="tonnes"
                name="tonnes"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.tonnes}
                touched={isTouched("tonnes", formik)}
                error={formik.errors.tonnes}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Passengers with crew"
                id="passengers"
                name="passengers"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.passengers}
                touched={isTouched("passengers", formik)}
                error={formik.errors.passengers}
                required={true}
              />
            </Col>
          </div>
        </div>
        <p className="pad" >Safety equipment carried on the vessel:</p>
          
        <div className="row  ">
          <table className="table table-striped table-hover test">
            <thead>
              <tr className="text-center">
                <th>No. of boats size and cubic capacity</th>
                <th >No. of buoyant apparatus or Life rafts</th>
                <th colspan="2">No. of lifebuoys and lifejackets</th>
                <th colspan="3" className="text-center">Fire extinguishers</th>
                <th >No. of anchors with their weight</th>
                <th colspan="2">Fire extinguishers</th>
               
               
              
              </tr>
              <tr className="text-center"> 
     
     <th></th> 
     <th></th> 
     <th>Lifebuoy</th> 
     <th>Lifejacket</th> 
     <th>Foam Type</th> 
     <th>Soda acid</th> 
     <th>Dry Cargo Powder</th> 
     <th></th> 
     <th>Anchor cable</th> 
     <th>Hose</th> 
    
    </tr> 
   
            </thead>
            <tbody>
              <tr>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
               
                </tr>
              <tr>
              <td>Enter</td>
              <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                
               
               </tr>
               <tr>
              <td>Enter</td>
              <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                
               
               </tr>
               <tr>
              <td>Enter</td>
              <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                
               
               </tr>
               <tr>
              <td>Enter</td>
              <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                <td>Enter</td>
                
               
               </tr>
            
            </tbody>
          </table>
        </div>
        <div className="row mt-5 pad">
            <h6>THIS CERTIFICATE, unless previously cancelled or revoked, to be in force only until the</h6>
        

          <div className="row">
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Date"
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                touched={isTouched("date", formik)}
                error={formik.errors.date}
                required={true}
              />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <TextBox
                label="Year"
                id="year"
                name="year"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.year}
                touched={isTouched("year", formik)}
                error={formik.errors.year}
                required={true}
              />
            </Col>

            </div>
            <div className="row mt-5">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
          <p className="sign pad">  Examined and Registered</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <TextBox
                label="Signature of Chief Surveyor"
                id="sign"
                name="sign"
                type="file"
                onChange={formik.handleChange}
                value={formik.values.sign}
                touched={isTouched("sign", formik)}
                error={formik.errors.sign}
                required={true}
              />
            
           
            </Col>
       
       </div>
        </div>
       
        <div className="row btn-container">
          <div className="modal-buttons">
            <Buttons
              onClick={handleShowForm1}
              label={"Back"}
              className="btn-outline"
            ></Buttons>
            <Buttons
              type="submit"
              label={"Submit "}
              className="button-submit"
            ></Buttons>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Index;
