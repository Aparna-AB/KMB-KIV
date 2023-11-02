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
        Every candidate for certification as Master Class 1 shall:
      </p>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            1) Hold a valid Certificate of Competency as Master Class 2 of an
            inland vessel issued under these rules
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            2) Have a minimum onboard service of 3 years after 2nd Class Master,
            out of which one year as 2nd Class Master (in-charge of the vessel)
            of inland vessels for minimum 12 months in vessels not less than 500
            GT
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
            4) Have successfully attended approved Preparatory Course for Master
            Class 1, which shall be an approved course by the competent
            authority and the minimum course duration, contents and the
            structure of the Preparatory Course for Master Class 1 shall be as
            per the training programmes approved by the competent authority and
            notified form of guidelines or circulars; from time to time
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <p className="file-upload-tag">
            5) Have completed the four basic safety courses for inland vessels
            approved by competent authority, namely: -
          </p>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center ml-20">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">a) Elementary First Aid (EFA)</p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center ml-20">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            b) Proficiency in survival techniques (PST)
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center ml-20">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            c) Personal safety and social responsibility (PSSR)
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center ml-20">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            d) Fire Prevention and Fire Fighting (FPFF)
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
          <TextBox type="file"></TextBox>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center ml-20">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <p className="file-upload-tag">
            e) Security Training for Seafarers With Designated Security Duties
            (STSDSD)
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
