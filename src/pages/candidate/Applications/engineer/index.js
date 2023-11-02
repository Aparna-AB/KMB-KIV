import React, { useState, useReducer, useCallback, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

import Button from "../../../../components/button";
import "./style.scss";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";

const ActionType = {
  UPDATE_FORM1_DETAILS: "UPDATE_FORM1_DETAILS",
  UPDATE_FORM2_DETAILS: "UPDATE_FORM2_DETAILS",
  UPDATE_FORM3_DETAILS: "UPDATE_FORM3_DETAILS",
  UPDATE_FORM4_DETAILS: "UPDATE_FORM4_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionType.UPDATE_FORM1_DETAILS: {
      return {
        ...state,
        form1Details: action.payload,
      };
    }
    case ActionType.UPDATE_FORM2_DETAILS: {
      return {
        ...state,
        form2Details: action.payload,
      };
    }
    case ActionType.UPDATE_FORM3_DETAILS: {
      return {
        ...state,
        form3Details: action.payload,
      };
    }
    case ActionType.UPDATE_FORM4_DETAILS: {
      return {
        ...state,
        form4Details: action.payload,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}
const Index = () => {
  const [imageInfo, setImageInfo] = useState({
    selectedImage: null,
    selectedFileName: "",
    selectedFile: null,
  });
  const initialState = {
    form1Details: {},
    form2Details: {},
    form3Details: {},
    form4Details: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form1, getForm1] = useState(false);
  const [form2, getForm2] = useState(false);
  const [form3, getForm3] = useState(false);
  const [form4, getForm4] = useState(false);

  useEffect(() => {
    handleShowForm1();
  }, []);
  const handleShowForm1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getForm1(true);
    getForm2(false);
    getForm3(false);
    getForm4(false);
  };
  const handleShowForm2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getForm2(true);
    getForm1(false);
    getForm3(false);
    getForm4(false);
  };
  const handleShowForm3 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getForm2(false);
    getForm1(false);
    getForm3(true);
    getForm4(false);
  };
  const handleShowForm4 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getForm2(false);
    getForm1(false);
    getForm3(false);
    getForm4(true);
  };
  const handleUpdateForm = (data, type) => {
    dispatch({ type: type, payload: data });
  };
  const handleSubmit = (values) => {
    const { form1Details, form2Details } = state;
  };
  const uploadFile = (file, type) => {
    // setFileType(type);
    // let bodyFormData = new FormData();
    // bodyFormData.append("file", file.target.files[0]);
    // bodyFormData.append("filename", file.target.value);
    // fileUpload(bodyFormData);
  };
  return (
    <Container>
      <Row>
        <h2 className="mb-4 ">Engineer</h2>
      </Row>
      <div className="card">
        <div className="container card-container">
          <div className="row headrow">
            <div className="col-md-12">
              <p className="form-name">Form Number 3 </p>
              <h4>
                Application for Certificate of Competency to act as Engineer of
                an Inland Vessel
              </h4>
            </div>
          </div>
          {form1 && (
            <Form1
              handleShowForm2={handleShowForm2}
              handleUpdateForm={handleUpdateForm}
              ActionType={ActionType}
              state={state.form1Details}
              imageInfo={imageInfo}
              setImageInfo={setImageInfo}
            />
          )}
          {form2 && (
            <Form2
              handleShowForm1={handleShowForm1}
              handleShowForm3={handleShowForm3}
              handleUpdateForm={handleUpdateForm}
              ActionType={ActionType}
              state={state.form2Details}
              uploadFile={uploadFile}
            />
          )}
          {form3 && (
            <Form3
              handleShowForm2={handleShowForm2}
              handleShowForm4={handleShowForm4}
              handleUpdateForm={handleUpdateForm}
              ActionType={ActionType}
              state={state.form3Details}
            />
          )}
          {form4 && (
            <Form4
              handleShowForm3={handleShowForm3}
              handleSubmit={handleSubmit}
              ActionType={ActionType}
              state={state.form4Details}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Index;
