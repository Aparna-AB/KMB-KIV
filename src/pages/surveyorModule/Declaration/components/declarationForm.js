import React, { useState, useEffect, useCallback, useReducer } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";

import FormOne from "./formOne";
import FormTwo from "./formTwo";
import FormThree from "./formThree";
import FormFour from "./formFour";
import FormFive from "./formFive";

import "../styles.scss";

const ActionType = {
  FORM_ONE: "FORM_ONE",
  FORM_TWO: "FORM_TWO",
  FORM_THREE: "FORM_THREE",
  FORM_FOUR: "FORM_FOUR",
  FORM_FIVE: "FORM_FIVE",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionType.FORM_ONE: {
      return {
        ...state,
        form1: action.payload,
      };
    }
    case ActionType.FORM_TWO: {
      return {
        ...state,
        form2: action.payload,
      };
    }
    case ActionType.FORM_THREE: {
      return {
        ...state,
        form3: action.payload,
      };
    }
    case ActionType.FORM_FOUR: {
      return {
        ...state,
        form4: action.payload,
      };
    }
    case ActionType.FORM_FIVE: {
      return {
        ...state,
        form5: action.payload,
      };
    }
    default:
      return state;
  }
}

const ApprovalForm = ({
  show,
  handleClose,
  selectedItem,
  handleUpdateData,
}) => {
  const initialState = {
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tabIndex, setTabIndex] = useState("form1");
  const [activeStep, setActiveStep] = useState(0);

  const changeTab = (name) => {
    setTabIndex(name);
    switch (name) {
      case "form1":
        setActiveStep(0);
        break;
      case "form2":
        setActiveStep(1);
        break;
      case "form3":
        setActiveStep(2);
        break;
      case "form4":
        setActiveStep(3);
        break;
      case "form5":
        setActiveStep(4);
        break;
      default:
        setActiveStep(0);
    }
  };

  const changeTabHandlerWrapper = useCallback((el) => changeTab(el), []);

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
        size="xl"
      >
        <Modal.Header closeButton className="pc-survey-close-button">
          {/* Add your header content here */}
        </Modal.Header>
        <Modal.Body>
          <div>
            {tabIndex === "form1" && (
              <FormOne
                activeKey="form1"
                changeTab={changeTabHandlerWrapper}
                handleUpdateForm={handleUpdateForm}
                ActionType={ActionType}
                state={state.form1} // Pass the state for form1
              />
            )}
            {tabIndex === "form2" && (
              <FormTwo
                activeKey="form2"
                changeTab={changeTabHandlerWrapper}
                handleUpdateForm={handleUpdateForm}
                ActionType={ActionType}
                state={state.form2} // Pass the state for form2
              />
            )}
            {tabIndex === "form3" && (
              <FormThree
                activeKey="form3"
                changeTab={changeTabHandlerWrapper}
                handleUpdateForm={handleUpdateForm}
                ActionType={ActionType}
                state={state.form3} // Pass the state for form3
              />
            )}
            {tabIndex === "form4" && (
              <FormFour
                activeKey="form4"
                changeTab={changeTabHandlerWrapper}
                handleUpdateForm={handleUpdateForm}
                ActionType={ActionType}
                state={state.form4} // Pass the state for form4
              />
            )}
            {tabIndex === "form5" && (
              <FormFive
                activeKey="form5"
                changeTab={changeTabHandlerWrapper}
                handleUpdateForm={handleUpdateForm}
                ActionType={ActionType}
                state={state.form5} // Pass the state for form5
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
