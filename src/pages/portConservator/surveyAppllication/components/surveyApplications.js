import React, { useState, useEffect,useCallback,useReducer, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { Stepper } from "react-form-stepper";

import FormOne from "./formOne";
import FormTwo from "./formTwo";
import FormThree from "./formThree";
import FormFour from "./formFour";
import FormFive from "./formFive";
import FormSix from "./formSix";

import "../styles.scss";

const ActionType = {
    FORM_ONE  : "FORM_ONE",
    FORM_TWO  : "FORM_TWO",
    FORM_THREE: "FORM_THREE",
    FORM_FOUR : "FORM_FOUR",
    FORM_FIVE : "FORM_FIVE",
    FORM_SIX  : "FORM_SIX"
};

function reducer(state, action) {
    switch (action.type) {
      case ActionType.FORM_ONE: {
        return {
          ...state,
          form1  : action.payload,
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
      case ActionType.FORM_SIX: {
        return {
          ...state,
          form6: action.payload,
        };
      }
      default:
        throw Error("Unknown action: " + action.type);
    }
  }
const ApprovalForm = ({
    show,
    handleClose,
    selectedItem,
    handleUpdateData
}) => {
    const initialState = {
        form1: {},
        form2: {},  
        form3: {},  
        form4: {},
        form5: {},
        form6: {}
    };
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [tabIndex, setTabIndex] = useState("form1");
    const [activeStep, setActiveStep] = useState(0);
    //const [show, setShow] = useState(false);
    const [showToast, setToast] = useState(false);
    const [message, setMessage] = useState("");
    
  
    const changeTab = (name) => {
        setTabIndex(name);    
        // Update active step based on tab name
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
            case "form6":
                setActiveStep(5);
            break;
            default:
            setActiveStep(0);
        }
      };
      
    const onSubmit = (values) => {
       // const userId = getUserInfo()?.customerDetail?._id;
        //const portId = getUserInfo()?.customerDetail?.port?._id;        
    }
    const changeTabHandlerWrapper = useCallback((el) => changeTab(el), []);   
    const handleUpdateForm = (data, type) => {
        dispatch({ type: type, payload: data });
    };
    const formik = useFormik({
        onSubmit,
    });

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                {/* <form className="form-control" onSubmit={formik.handleSubmit}> */}
                    <Modal.Header closeButton className="pc-survey-close-button">
                    </Modal.Header>            
                    <Modal.Body>
                        <div className="row rectagle">
                            <Stepper 
                            activeStep={activeStep}
                            activeColor="#3D5CB8"
                            titleFontSize={14}
                            steps={[
                                { title: "Survey Application" },
                                { title: "Particular To Be Furnished" },
                                { title: "Propulsion And Equipment" },
                                { title: "Fire And Other Particulars" },
                                { title: "Final Particulars" },
                                { title: "Remarks" }
                            ]}
                            onSelect={(el) => setTabIndex(el)}
                           // onSelect={(el) => setTabIndex(el)}
                            />
                        </div>
                        <div>
                            {tabIndex === "form1" && (
                                <FormOne
                                activeKey="form1"
                                changeTab={changeTabHandlerWrapper}
                                handleUpdateForm={handleUpdateForm}
                                ActionType={ActionType}
                                state={state.form2}
                                />                                
                            )}
                            {tabIndex === "form2" && (
                                <FormTwo
                                activeKey="form2"
                                changeTab={changeTabHandlerWrapper}
                                handleUpdateForm={handleUpdateForm}
                                ActionType={ActionType}
                                state={state.mainDetails}
                                />                                
                            )}
                            {tabIndex === "form3" && (
                                <FormThree
                                activeKey="form3"
                                changeTab={changeTabHandlerWrapper}
                                handleUpdateForm={handleUpdateForm}
                                ActionType={ActionType}
                                state={state.mainDetails}
                                />                                
                            )}
                            {tabIndex === "form4" && (
                                <FormFour
                                activeKey="form4"
                                changeTab={changeTabHandlerWrapper}
                                handleUpdateForm={handleUpdateForm}
                                ActionType={ActionType}
                                state={state.mainDetails}
                                />                                
                            )}
                            {tabIndex === "form5" && (
                                <FormFive
                                activeKey="form5"
                                changeTab={changeTabHandlerWrapper}
                                handleUpdateForm={handleUpdateForm}
                                ActionType={ActionType}
                                state={state.mainDetails}
                                />                                
                            )}
                            {tabIndex === "form6" && (
                                <FormSix
                                activeKey="form6"
                                changeTab={changeTabHandlerWrapper}
                                handleUpdateForm={handleUpdateForm}
                                ActionType={ActionType}
                                state={state.mainDetails}
                                />                                
                            )}
                        </div>
                    </Modal.Body>          
                {/* </form>         */}
            </Modal>
        </div>
    )
};
export default ApprovalForm;
