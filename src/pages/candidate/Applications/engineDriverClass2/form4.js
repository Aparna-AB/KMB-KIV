import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Buttons from "../../../../components/button";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import "./style.scss";

const Index = ({ handleShowForm3 }) => {
  return (
    <Container className="master-class-form">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12"></div>
      </div>
      <h4 className="main-head">Minimum requirements for certification</h4>
      <p className="sub-head">
        Every candidate for certification as Engine Driver Class 2 shall:
      </p>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            1) Age should not be less than 21 years
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            2) Shall have completed preparatory course of 1 month duration and
            possess a valid Course Completion Certificate
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            3) Produce a medical certificate as to his physical fitness in Form
            No. 1 appended to these rules from an Inland Waterways Authority of
            India or Designated Authority empanelled MBBS Medical Practitioner
            or medical officer of district government health centre or
            municipality approved doctor
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            4) Shall have minimum service of 36 months on Inland Vessels
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            5) Existing Engine Driver Class 2 serving on Inland Vessels shall be
            allowed to serve as Engine Driver Class 2 and given maximum of 2
            years time to undergo new training program
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>

      <div className="row btn-container">
        <div className="modal-buttons">
          <Buttons
            onClick={handleShowForm3}
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
    </Container>
  );
};

export default Index;
