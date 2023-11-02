import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "../../../../components/button";
import "./styles.scss";

const Index = () => {
  return (
    <Container>
      <div className="card">
        <div className="container card-container">
          <div className="row headrow">
            <div className="col-md-6">
              <h4>Viva Exam Schedule</h4>
            </div>
            </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="qstnrow">
                <div className="row">
                  <div className="col-md-8">
                    <p className="questn">
                      1) Engineering (Engineer, Engine Driver Class 1 and Engine
                      Driver Class 2)
                    </p>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end dnld-btn">
                    <Button
                      label={"Download"}
                      className="btn-outline btn-download"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="qstnrow">
                <div className="row">
                  <div className="col-md-8">
                    <p className="questn">
                      1) Engineering (Engineer, Engine Driver Class 1 and Engine
                      Driver Class 2)
                    </p>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end dnld-btn">
                    <Button
                      label={"Download"}
                      className="btn-outline btn-download"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="qstnrow">
                <div className="row">
                  <div className="col-md-8">
                    <p className="questn">
                      1) Engineering (Engineer, Engine Driver Class 1 and Engine
                      Driver Class 2)
                    </p>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end dnld-btn">
                    <Button
                      label={"Download"}
                      className="btn-outline btn-download"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
