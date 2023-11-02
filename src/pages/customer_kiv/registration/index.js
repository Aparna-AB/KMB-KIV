import React, { useState, useReducer, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Stepper from "react-stepper-horizontal";
import SuccessModal from "../../../components/successModal";
import Toaster from "../../../components/toaster";
import { Messages } from "../../../utils/constants";

import PrimaryDetails from "./primaryDetails";
import AdditionalDetails from "./additionalDetails";
import AadharAuthentication from "./aadharAuthentication";
import "./style.scss";
import "../../../styles.scss";


const ActionType = {
  UPDATE_PRIMARY_DETAILS: "UPDATE_PRIMARY_DETAILS",
  UPDATE_ADDITIONAL_DETAILS: "UPDATE_ADDITIONAL_DETAILS",
  UPDATE_AADHAR_AUTHENTICATION_DETAILS: "UPDATE_AADHAR_AUTHENTICATION_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionType.UPDATE_PRIMARY_DETAILS: {
      return {
        ...state,
        primaryDetails: action.payload,
      };
    }
    case ActionType.UPDATE_ADDITIONAL_DETAILS: {
      return {
        ...state,
        additionalDetails: action.payload,
      };
    }
    case ActionType.UPDATE_AADHAR_AUTHENTICATION_DETAILS: {
      return {
        ...state,
        aadharAuthentication: action.payload,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function Index() {
  const initialState = {
    primaryDetails: {},
    additionalDetails: {},
    aadharAuthentication: {},
  };

  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tabIndex, setTabIndex] = useState("primary");
  const [activeStep, setActiveStep] = useState(0);
  const [imgUrls, setImgUrls] = useState({ aadhar: "", building: "" });
  const [fileType, setFileType] = useState("");
  const [show, setShow] = useState(false);
  const [showToast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  // const [fileUpload, { data: fileUploadData }] = useFileUploadMutation();
  const changeTab = (name) => {
    setTabIndex(name);
  
    // Update active step based on tab name
    switch (name) {
      case "primary":
        setActiveStep(0);
        break;
      case "additional":
        setActiveStep(1);
        break;
      case "aadharAuthentication":
        setActiveStep(2);
        break;
      default:
        setActiveStep(0);
    }
  };

 
  const changeTabHandlerWrapper = useCallback((el) => changeTab(el), []);

  const handleUpdateForm = (data, type) => {
    dispatch({ type: type, payload: data });
  };

  // const uploadFile = (file, type) => {
  //   setFileType(type);
  //   let bodyFormData = new FormData();
  //   bodyFormData.append("file", file.target.files[0]);
  //   bodyFormData.append("filename", file.target.value);
  //   fileUpload(bodyFormData);
  // };


  const handleSubmit = (values) => {
    // TODO: API Service call

    // setToast(false);
    // const { primaryDetails, additionalDetails } = state;
    // const postDate = {
    //   username: primaryDetails.name,
    //   email: primaryDetails.email,
    //   firstname: primaryDetails.name,
    //   lastname: primaryDetails.name,
    //   full_name: primaryDetails.name,
    //   mobile_number: primaryDetails.mobile,
    //   permant_house_num: additionalDetails.houseNo,
    //   permant_house_name: additionalDetails.houseName,
    //   permant_place: additionalDetails.place,
    //   permant_district: {
    //     _id: additionalDetails.district || "",
    //     name: additionalDetails.siteDistrictName || "",
    //   },
    //   permant_local_body: {
    //     _id: additionalDetails.localBody,
    //     name: additionalDetails.localBodyName,
    //   },

    //   permant_local_body: additionalDetails.localBody,

    //   permant_post_ofc: additionalDetails.postOffice,
    //   permant_pin_code: additionalDetails.pinCode,
    //   work_house_name: additionalDetails.siteHouseName,
    //   work_place: additionalDetails.sitePlace,
    //   work_district: {
    //     _id: additionalDetails.siteDistrict,
    //     name: additionalDetails.siteDistrictName,
    //   },
    //   work_local_body: {
    //     _id: additionalDetails.siteLocalBody,
    //     name: additionalDetails.siteLocalBodyName,
    //   },

    //   work_local_body: additionalDetails.siteLocalBody,
    //   work_post_ofc: additionalDetails.sitePostOffice,
    //   work_pin_code: additionalDetails.sitePinCode,
    //   purpose: values.purpose,
    //   distance_to_ws: values.workSiteDistance,
    //   unload_place: values.unloadingPlace,
    //   max_reqired: values.maxRequiredTon,
    //   permit_num: values.permitNo,
    //   selected_port: values.desiredPort,
    //   port: values.desiredPort,
    //   zone: values.zone,
    //   permit_date: values.permitDate,
    //   req_status: values.purpose,
    //   permit_authority: values.permitAuthority,
    //   rout_to_w: values.workSiteRoute,
    //   w_pin_code: additionalDetails.sitePinCode,
    //   aadhar_number: primaryDetails.aadharNo,
    //   aadhaar_file: imgUrls.aadhar ? imgUrls.aadhar : "",
    //   build_per_file: imgUrls.building ? imgUrls.building : "",
    // };
    
  };

  // useEffect(() => {
  //   console.log("file", fileUploadData);
  //   switch (fileType) {
  //     case "aadhaar":
  //       imgUrls.aadhar = (fileUploadData && fileUploadData.data) || "";
  //       break;
  //     case "buildingPermit":
  //       imgUrls.building = (fileUploadData && fileUploadData.data) || "";
  //       break;
  //     default:
  //       break;
  //   }
  // }, [fileUploadData]);

  // useEffect(() => {
  //   if (error?.data?.success === false) {
  //     setToast(true);
  //     setMessage(error?.data?.message);
  //   }
  //   if (addUserData?.success) {
  //     handleOnclick(true);
  //   }
  // }, [error, addUserData]);
  const handleOnclick = (item) => {
    setShow(true);
  };
  const handleClose = () => {
    //TODO navigation

    setShow(false);
    navigate("/");
  };




  return (
    <>
    {show && (
        <SuccessModal
          show={setShow}
          handleClose={handleClose}
          message={Messages.normalBookingSuccess}
        />
      )}

{showToast && <Toaster message={message} show={showToast} error={true} />}
      
        <div className=" main-div row-md-12 row-lg-12 row-xl-12 py-5 h-100">
        {console.log("inside values", state)}
          <div className="row d-flex  justify-content-end h-100">
          <div className="col-md-6 col-lg-6 col-xl-6 login-log-bg-img">
          <div className="log-welcome-msg" >
          <div className="LOGO-log-img">
        </div>  
            </div> 
          </div>
            <div className="col-md-6 col-lg-6 col-xl-6 content">
              {/* <div className="logo-wraper mb-4">
              <img src="http://kmb.kerala.gov.in/uploads/settings/1683701832kmb_new_logo.jpg" />
          </div> */}
              <div>
                <h3>Registration</h3>
                <p className="sub">Don't have an account? <Link to="/login" 
                style={{fontWeight: "600",
                color: "rgba(61, 92, 184, 1)",
                 fontSize: "16px",
                 lineHeight: "16px"
                 }}> Login</Link></p>
              </div>
              <div className="row rectagle">
                <Stepper
                  activeStep={activeStep}
                  // disabledColor="gray"
                  activeColor="#3D5CB8"
                  titleFontSize="14px"
                 
                  steps={[
                    { title: "Primary details" },
                    { title: "Additional details" },
                    { title: "Aadhar Authentication" },
                  ]}
                  onSelect={(el) => setTabIndex(el)}
                />
              </div>
              <div>
                {tabIndex === "primary" && (
                  <PrimaryDetails
                    activeKey="primary"
                    changeTab={changeTabHandlerWrapper}
                    handleUpdateForm={handleUpdateForm}
                    ActionType={ActionType}
                  />
                )}

{tabIndex === "additional" && (
                  <AdditionalDetails
                    activeKey="additional"
                    changeTab={changeTabHandlerWrapper}
                    handleUpdateForm={handleUpdateForm}
                    ActionType={ActionType}
                    handleSubmit={handleSubmit}
                  />
                )}
                {tabIndex === "aadharAuthentication" && (
                  <AadharAuthentication
                    activeKey="aadharAuthentication"
                    changeTab={changeTabHandlerWrapper}
                    handleUpdateForm={handleUpdateForm}
                    ActionType={ActionType}
                  />
                )}
              
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Index;






