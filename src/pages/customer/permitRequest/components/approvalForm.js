import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Buttons from "../../../../components/button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextBox from "../../../../components/textBox";
import { dateTime } from "../../../../utils/moment";
import { statusOptions } from "../../../../utils/constants";
import SelectBox from "../../../../components/Selectbox";
import TextArea from "../../../../components/textArea";
const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;

const ApprovalForm = ({
  show,
  handleClose,
  selectedItem,
  handleUpdateData,
}) => {
  const [showToast, setToast] = useState(false);
  const [currentTab, setCurrentTab] = useState("maindetails");

  const initialValues = {
    permitNo: "",
    permitDate: "",
    permitAuthority: "",
    workSiteRoute: "",
    workSiteDistance: "",
    unloadingPlace: "",
    aadhaar: "",
    buildingPermit: "",
    desiredPort: "",
    siteHouseName: "",
    sitePlace: "",
    siteDistrict: "",
    siteLocalBody: "",
    sitePostOffice: "",
    sitePinCode: "",
   
   
   };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    permitNo: requiredField("Permit Number"),
    permitDate: requiredField("Permit Date"),
    permitAuthority: requiredField("Permit Authority"),
    workSiteRoute: requiredField("Route to Worksite"),
    workSiteDistance: requiredField("Distance to Worksite"),
    unloadingPlace: requiredField("Unloading Place"),
    aadhaar: Yup.mixed().required("Aadhaar is required"),
    buildingPermit: Yup.mixed().required("Building Permit is required"),
    siteHouseName: requiredField("Site Address/House Name"),
    sitePlace: requiredField("Place"),
    siteDistrict: requiredField("District"),
    siteLocalBody: requiredField("Local Body"),
    sitePostOffice: requiredField("Post Office"),
    sitePinCode: requiredField("Pin Code"),
  
   });

  const onSubmit = (values) => {
    handleUpdateData({ ...values, status: "approved" });
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="customer-approval-reg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="maindetails"
            activeKey={currentTab}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab
              eventKey="maindetails"
              title="Main Details"
              disabled={currentTab !== "maindetails"}
            >
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Aadhaar Number</h5>
                  {/* <p>{selectedItem.aadhar_number || ""}</p> */}
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Name</h5>
                  {/* <p>{selectedItem.full_name || ""}</p> */}
                </div>

                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Mobile Number</h5>
                  {/* <p>{selectedItem.mobile_number || ""}</p> */}
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Email</h5>
                  {/* <p>{selectedItem.email || ""}</p> */}
                </div>
              </div>
              <div className="row">
                <div className="modal-buttons">
                  <Buttons
                    type="button"
                    label={"Close"}
                    className="button-close"
                    onClick={handleClose}
                  ></Buttons>
                  <Buttons
                    type="button"
                    label={"Next"}
                    className="button-submit"
                    onClick={() => setCurrentTab("address")}
                  ></Buttons>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="address"
              title="Address Details"
              disabled={currentTab !== "address"}
            >
              <h4>Present Address Details</h4>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>House Number</h5>
                  {/* <p>{selectedItem.permant_house_num || ""}</p> */}
                  <hr />
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>House Name</h5>
                  {/* <p>{selectedItem.permant_house_name || ""}</p> */}
                  <hr />
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Place</h5>
                  {/* <p>{selectedItem.permant_place || ""}</p> */}
                  <hr />
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>District</h5>
                  {/* <p>{selectedItem?.permant_district?.name || "Nil"}</p> */}
                  <hr />
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Local Body</h5>
                  {/* <p>{selectedItem?.permant_local_body || "Nil"}</p> */}
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Post Office</h5>
                  {/* <p>{selectedItem.permant_post_ofc || ""}</p> */}
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h5>Pin Code</h5>
                  {/* <p>{selectedItem.permant_pin_code || ""}</p> */}
                </div>
              </div>

              <div>
                
                <h4 className="mgt-32">Worksite Address Details</h4>
                <div className="row-md-12">
                  <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <TextBox
                        label="Site Address/House Name"
                        id="siteHouseName"
                        name="siteHouseName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.siteHouseName}
                        touched={formik.touched.siteHouseName}
                        error={formik.errors.siteHouseName}
                        required={true}
                      />
                    </div>
                    <div className="col-md-4">
                    <TextBox
              label="Place"
              id="sitePlace"
              name="sitePlace"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.sitePlace}
              touched={isTouched("sitePlace", formik)}
              error={formik.errors.sitePlace}
              required={true}
            />
</div>
                    <div className="col-md-4">
                    <SelectBox
              id="siteDistrict"
              options={statusOptions}
              label="District"
              name="siteDistrict"
              value={formik.values.siteDistrict}
              isTouched={isTouched("siteDistrict", formik)}
              error={formik.errors.siteDistrict}
              className="select"
              isIdSelect={true}
              required={true}
            
            />
</div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <SelectBox
                        label="Local Body"
                        id="siteLocalBody"
                        options={statusOptions}
                        isTouched={formik.touched.siteLocalBody}
                        error={formik.errors.siteLocalBody}
                        className="select"
                        isIdSelect={true}
                      />
                    </div>
                    <div className="col-md-4">
                      <SelectBox
                        label="Post Office"
                        id="sitePostOffice"
                        options={statusOptions}
                        isTouched={formik.touched.sitePostOffice}
                        error={formik.errors.sitePostOffice}
                        className="select"
                        isIdSelect={true}
                        required={true}
                      
                      />
                    </div>
                    <div className="col-md-4">
                      <TextBox
                        label="Pin Code"
                        id="sitePinCode"
                        name="sitePinCode"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.sitePinCode}
                        touched={formik.touched.sitePinCode}
                        error={formik.errors.sitePinCode}
                        required={true}
                      />
                    </div>
                  </div>
                  </form>
                </div>
                
              </div>
              <div className="row">
                <div className="modal-buttons">
                  <Buttons
                    type="button"
                    label={"Back"}
                    className="button-close"
                    onClick={() => setCurrentTab("maindetails")}
                  ></Buttons>
                  <Buttons
                    type="submit"
                    label={"Next"}
                    className="button-submit"
                    onClick={() => setCurrentTab("additionaldetails")}
                  ></Buttons>
                </div>
              </div>
            </Tab>

            <Tab
              eventKey="additionaldetails"
              title="Additional Details"
              disabled={currentTab !== "additionaldetails"}
            >
              <form onSubmit={formik.handleSubmit}>
                {/* <h4>Present Address Details</h4> */}
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="purpose"
                      id="purpose"
                      name="purpose"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.purpose}
                      touched={isTouched("purpose", formik)}
                      error={formik.errors.purpose}
                      required={true}
                      disabled
                    />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Maximum Required Ton"
                      id="maxRequiredTon"
                      name="maxRequiredTon"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.maxRequiredTon}
                      touched={isTouched("maxRequiredTon", formik)}
                      error={formik.errors.maxRequiredTon}
                      required={true}
                      disabled
                    />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Permit Number"
                      id="permitNo"
                      name="permitNo"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.permitNo}
                      touched={isTouched("permitNo", formik)}
                      error={formik.errors.permitNo}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Permit Date"
                      id="requiredField"
                      name="permitDate"
                      type="date"
                      onChange={formik.handleChange}
                      value={formik.values.permitDate}
                      touched={isTouched("permitDate", formik)}
                      error={formik.errors.permitDate}
                      required={true}
                    />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Permit Authority"
                      id="permitAuthority"
                      name="permitAuthority"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.permitAuthority}
                      touched={isTouched("permitAuthority", formik)}
                      error={formik.errors.permitAuthority}
                      required={true}
                    />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextArea
                      label="Route to Worksite"
                      id="workSiteRoute"
                      name="workSiteRoute"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.workSiteRoute}
                      touched={isTouched("workSiteRoute", formik)}
                      error={formik.errors.workSiteRoute}
                      required={true}
                      row={3}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Distance to Worksite"
                      id="workSiteDistance"
                      name="workSiteDistance"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.workSiteDistance}
                      touched={isTouched("workSiteDistance", formik)}
                      error={formik.errors.workSiteDistance}
                      required={true}
                    />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Unloading Place"
                      id="unloadingPlace"
                      name="unloadingPlace"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.unloadingPlace}
                      touched={isTouched("unloadingPlace", formik)}
                      error={formik.errors.unloadingPlace}
                      required={true}
                    />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <TextBox
                      label="Upload Aaadhar"
                      id="aadhaar"
                      name="aadhaar"
                      type="file"
                      touched={isTouched("aadhaar", formik)}
                     
                      error={formik.errors.aadhaar}
                    />
                  </div>
                </div>

                <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4">
                
                  <TextBox
                    label="Upload Building Permit"
                    id="buildingPermit"
                    name="buildingPermit"
                    type="file"
                    touched={isTouched("buildingPermit", formik)}
                    error={formik.errors.buildingPermit}
                  
                  />
                </div>
                
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <SelectBox
                    id="desiredPort"
                    options={statusOptions}
                    label="Select desired port"
                    name="desiredPort"
                    value={formik.values.desiredPort}
                    // onChange={formik.handleChange}

                    isRequired={true}
                    isTouched={isTouched("desiredPort", formik)}
                    error={formik.errors.desiredPort}
                    className="select"
                    isIdSelect={true}
                    disabled
                  />
                </div>
                </div>

                <div className="row">
                  <div className="modal-buttons">
                    <Buttons
                      type="button"
                      label={"Back"}
                      className="button-close"
                      onClick={() => setCurrentTab("address")}
                    ></Buttons>
                    <Buttons
                      type="button"
                      label={"Reject"}
                      className="btn-outline"
                      // onClick={() => setCurrentTab("maindetails")}
                      onClick={() => handleUpdateData({ status: "rejected" })}
                    ></Buttons>
                    <Buttons
                      type="submit"
                      label={"Approve"}
                      className="button-submit"
                      // onClick={() => setCurrentTab("imgdetails")}
                    ></Buttons>
                  </div>
                </div>
              </form>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApprovalForm;
