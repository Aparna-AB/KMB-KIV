import React, { useState, useReducer, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Stepper from "react-stepper-horizontal";

import MainDetails from "./mainDetails";
import AddressForm from "./addressDetails";
import AdditionalDetails from "./additionalDetails";
import "./style.scss";
import "../../../styles.scss";
import {
  useAddUserRegistrationMutation,
  useFileUploadMutation,
} from "../../../services/modules/portConservator/customerRegistration";
import SuccessModal from "../../../components/successModal";
import { Messages } from "../../../utils/constants";
// import Toaster from "../../../components/toaster";
import Loader from "../../../components/loader";
import WarningModal from "../../../components/commonSuccessModal";
const ActionType = {
  UPDATE_MAIN_DETAILS: "UPDATE_MAIN_DETAILS",
  UPDATE_ADDRESS_DETAILS: "UPDATE_ADDRESS_DETAILS",
  UPDATE_ADDITIONAL_DETAILS: "UPDATE_ADDITIONAL_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionType.UPDATE_MAIN_DETAILS: {
      return {
        ...state,
        mainDetails: action.payload,
      };
    }
    case ActionType.UPDATE_ADDRESS_DETAILS: {
      return {
        ...state,
        addressDetails: action.payload,
      };
    }
    case ActionType.UPDATE_ADDITIONAL_DETAILS: {
      return {
        ...state,
        additionalDetails: action.payload,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function Index() {
  const initialState = {
    mainDetails: {},
    addressDetails: {},
    additionalDetails: {},
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tabIndex, setTabIndex] = useState("main");
  const [activeStep, setActiveStep] = useState(0);
  const [imgUrls, setImgUrls] = useState({ aadhar: "", building: "" });
  const [fileType, setFileType] = useState("");
  const [show, setShow] = useState(false);
  const [showToast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  const [fileUpload, { data: fileUploadData }] = useFileUploadMutation();
  const [addUserRegistration, { data: addUserData, isLoading, error }] =
    useAddUserRegistrationMutation();

  const changeTab = (name) => {
    setTabIndex(name);

    // Update active step based on tab name
    switch (name) {
      case "main":
        setActiveStep(0);

        break;
      case "address":
        setActiveStep(1);
        break;
      case "additional":
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

  const uploadFile = (file, type) => {
    setFileType(type);
    let bodyFormData = new FormData();
    bodyFormData.append("file", file.target.files[0]);
    bodyFormData.append("filename", file.target.value);
    fileUpload(bodyFormData);
  };

  const handleSubmit = (values) => {
    setToast(false);
    const { mainDetails, addressDetails } = state;
    const postDate = {
      username: mainDetails.name,
      email: mainDetails.email,
      firstname: mainDetails.name,
      lastname: mainDetails.name,
      full_name: mainDetails.name,
      mobile_number: mainDetails.mobile,
      permant_house_num: addressDetails.houseNo,
      permant_house_name: addressDetails.houseName,
      permant_place: addressDetails.place,
      permant_district: {
        _id: addressDetails.district || "",
        name: addressDetails.siteDistrictName || "",
      },
      permant_local_body: {
        _id: addressDetails.localBody,
        name: addressDetails.localBodyName,
      },

      permant_local_body: addressDetails.localBody,

      permant_post_ofc: addressDetails.postOffice,
      permant_pin_code: addressDetails.pinCode,
      work_house_name: addressDetails.siteHouseName,
      work_place: addressDetails.sitePlace,
      work_district: {
        _id: addressDetails.siteDistrict,
        name: addressDetails.siteDistrictName,
      },
      work_local_body: {
        _id: addressDetails.siteLocalBody,
        name: addressDetails.siteLocalBodyName,
      },

      work_local_body: addressDetails.siteLocalBody,
      work_post_ofc: addressDetails.sitePostOffice,
      work_pin_code: addressDetails.sitePinCode,
      purpose: values.purpose,
      distance_to_ws: values.workSiteDistance,
      unload_place: values.unloadingPlace,
      max_reqired: values.maxRequiredTon,
      permit_num: values.permitNo,
      selected_port: values.desiredPort,
      port: {
        _id: values.desiredPort,
        name: values.portName,
      },
      zone: values.zone,
      permit_date: values.permitDate,
      req_status: values.purpose,
      permit_authority: values.permitAuthority,
      rout_to_ws: values.workSiteRoute,
      w_pin_code: addressDetails.sitePinCode,
      aadhar_number: mainDetails.aadharNo,
      aadhaar_file: imgUrls.aadhar ? imgUrls.aadhar : "",
      build_per_file: imgUrls.building ? imgUrls.building : "",
    };

    addUserRegistration(postDate);
  };
  useEffect(() => {
    console.log("file", fileUploadData);
    switch (fileType) {
      case "aadhaar":
        imgUrls.aadhar = (fileUploadData && fileUploadData.data) || "";
        break;
      case "buildingPermit":
        imgUrls.building = (fileUploadData && fileUploadData.data) || "";
        break;
      default:
        break;
    }
  }, [fileUploadData]);

  useEffect(() => {
    if (error?.data?.success === false) {
      setToast(true);
      setMessage(error?.data?.message);
    }
    if (addUserData?.success) {
      handleOnclick(true);
    }
  }, [error, addUserData]);
  const handleOnclick = (item) => {
    setShow(true);
  };
  const handleClose = () => {
    //TODO navigation

    setShow(false);
    navigate("/login");
  };

  if (isLoading) return <Loader isRouterLoader={true} />;

  return (
    <>
      {show && (
        <SuccessModal
          show={setShow}
          handleClose={handleClose}
          message={Messages.normalBookingSuccess}
        />
      )}
      <WarningModal />

      {/* {showToast && <Toaster message={message} show={showToast} error={true} />} */}

      <div className=" main-div row-md-12 row-lg-12 row-xl-12 h-100">
        {console.log("inside values", state)}
        <div className="registartion">
          <div className="row d-flex  justify-content-end h-100">
            <div className="col-md-6 col-lg-6 col-xl-6 log-bg-img">
              <div className="log-welcome-msg">
                <h1 className="pt-3">Welcome Back</h1>
                <p>
                  Smooth seas never made a skilled sailor.
                  <br /> Welcome to Kerala Maritime Port Portal
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 content">
              <div className="logo-wraper mb-4">
                <img src="../../../assets/images/default-logo.jpg" alt="logo" />
              </div>
              <div>
                <h3>New Customer Registration</h3>
                <p className="sub">
                  If you already have an account? <Link to="/"> Login</Link>
                </p>
              </div>
              <div className="row rectagle">
                <Stepper
                  activeStep={activeStep}
                  activeColor="#3D5CB8"
                  titleFontSize={14}
                  steps={[
                    { title: "Main details" },
                    { title: "Address details" },
                    { title: "Additional Details" },
                  ]}
                  onSelect={(el) => setTabIndex(el)}
                />
              </div>
              <div>
                {tabIndex === "main" && (
                  <MainDetails
                    activeKey="main"
                    changeTab={changeTabHandlerWrapper}
                    handleUpdateForm={handleUpdateForm}
                    ActionType={ActionType}
                    state={state.mainDetails}
                  />
                )}
                {tabIndex === "address" && (
                  <AddressForm
                    activeKey="address"
                    changeTab={changeTabHandlerWrapper}
                    handleUpdateForm={handleUpdateForm}
                    ActionType={ActionType}
                    state={state.addressDetails}
                  />
                )}
                {tabIndex === "additional" && (
                  <AdditionalDetails
                    activeKey="additional"
                    changeTab={changeTabHandlerWrapper}
                    handleUpdateForm={handleUpdateForm}
                    ActionType={ActionType}
                    handleSubmit={handleSubmit}
                    state={state.additionalDetails}
                    uploadFile={uploadFile}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
