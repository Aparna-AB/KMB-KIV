import React, { useState, useReducer, useCallback, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../../style.scss"
import Form1 from "./formOne";
import Form2 from "./formTwo";

const ActionType = {
  UPDATE_FORM1_DETAILS: "UPDATE_FORM1_DETAILS",
  UPDATE_FORM2_DETAILS: "UPDATE_FORM2_DETAILS",
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
    
    default:
      throw Error("Unknown action: " + action.type);
  }
}
const Index = (show,handleClose) => {
  const initialState = {
    form1Details: {},
    form2Details: {},
    };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form1, getForm1] = useState(false);
  const [form2, getForm2] = useState(false);
  
  useEffect(() => {
    handleShowForm1();
  }, []);
  const handleShowForm1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getForm1(true);
    getForm2(false);
   };
  const handleShowForm2 = () => {
    getForm2(true);
    getForm1(false);
    };
    
   const handleUpdateForm = (data, type) => {
    dispatch({ type: type, payload: data });
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="category-a"
      >
        <Modal.Header closeButton>
          <div>
          <p className="form-name">Form Number 3 </p>
          {form1 && (
             <h4>Certificate of Survey</h4>
          )}
             {form2 && (
             <h4>Provisional Certificate of Survey </h4>
             )}
          </div>
         
         </Modal.Header>
        <Modal.Body>
        <div className="row head-row">
          <p className="form-name">Form Number 3 </p>
          <h2>Certificate of Survey</h2>
          <h4>Category A Vessel </h4>
          </div>
        
          {form1 && (
            <Form1
              handleShowForm2={handleShowForm2}
              handleUpdateForm={handleUpdateForm}
              ActionType={ActionType}
              state={state.form1Details}
            />
          )}
          {form2 && (
            <Form2
              handleShowForm1={handleShowForm1}
              handleUpdateForm={handleUpdateForm}
              ActionType={ActionType}
              state={state.form2Details}
              />
          )}
          </Modal.Body>
      </Modal>
    </div>
         );
};

export default Index;
