import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import SelectBox from "../../../components/Selectbox";
import TextArea from "../../../components/textArea";
import { Link } from "react-router-dom";
import { useLazyFetchAllPortQuery } from "../../../services/modules/portConservator/port";
import ReCAPTCHA from "react-google-recaptcha";
import { Config } from "../../../config";

import { validateCaptcha } from "react-simple-captcha";
import SimpleCaptcha from "../../../components/simpleCaptcha";

const requiredField = Yup.string().required("Required!");
const positiveNumber = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;

function RegisterForm({
  changeTab,
  handleSubmit,
  handleUpdateForm,
  ActionType,
  uploadFile,
  state,
}) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isFocused, setFocused] = useState(true);

  const [fetchAllPort, { data: portData }] = useLazyFetchAllPortQuery();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const initialValues = {
    purpose: "",
    maxRequiredTon: "",
    permitNo: "",
    permitDate: "",
    permitAuthority: "",
    workSiteRoute: "",
    workSiteDistance: "",
    unloadingPlace: "",
    aadhaar: "",
    buildingPermit: "",
    desiredPort: "",
    portName: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    purpose: requiredField("Purpose"),
    maxRequiredTon: requiredField("Maximum Required Ton").matches(
      positiveNumber,
      "Invalid Ton "
    ),
    permitNo: requiredField("Permit Number"),
    permitDate: requiredField("Permit Date"),
    permitAuthority: requiredField("Permit Authority"),
    workSiteRoute: requiredField("Route to Worksite"),
    workSiteDistance: requiredField("Distance to Worksite"),
    unloadingPlace: requiredField("Unloading Place"),
    desiredPort: requiredField("Desired Port"),
    aadhaar: Yup.mixed().required("Aadhaar is required"),

    buildingPermit: Yup.mixed().required("Building Permit is required"),
  });

  const onSubmit = (values) => {
    handleUpdateForm(values, ActionType.UPDATE_ADDITIONAL_DETAILS);

    if (validateCaptcha(captchaValue) === true) {
      handleSubmit(values);
    } else {
      setCaptchaError("Captcha error");
      setFocused(true);
    }
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

  useEffect(() => {
    const {
      purpose,
      maxRequiredTon,
      permitNo,
      permitDate,
      permitAuthority,
      workSiteRoute,
      workSiteDistance,
      unloadingPlace,
      aadhaar,
      buildingPermit,
      desiredPort,
      portName,
    } = state;
    const fieldValues = {
      purpose,
      maxRequiredTon,
      permitNo,
      permitDate,
      permitAuthority,
      workSiteRoute,
      workSiteDistance,
      unloadingPlace,
      aadhaar,
      buildingPermit,
      desiredPort,
      portName,
    };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);

  useEffect(() => {
    fetchAllPort();
  }, []);

  const handlePortName = (id) => {
    const value = portData?.data.find((el) => el._id === id)?.port_name;
    return value;
  };

  return (
    <div className="additional-container maindetails">
      <form className="" onSubmit={formik.handleSubmit}>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
            />
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
            />
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
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
            <TextBox
              label="Upload Aaadhar"
              id="aadhaar"
              name="aadhaar"
              type="file"
              onChange={(file) => {
                formik.setFieldValue("aadhaar", file);
                uploadFile(file, "aadhaar");
              }}
              touched={isTouched("aadhaar", formik)}
              error={formik.errors.aadhaar}
            />

            <TextBox
              label="Upload Building Permit"
              id="buildingPermit"
              name="buildingPermit"
              type="file"
              onChange={(file) => {
                formik.setFieldValue("buildingPermit", file);
                uploadFile(file, "buildingPermit");
              }}
              touched={isTouched("buildingPermit", formik)}
              error={formik.errors.buildingPermit}
            />
            <SelectBox
              id="desiredPort"
              options={portData ? portData.data : []}
              label="Select desired port"
              name="desiredPort"
              value={formik.values.desiredPort}
              // onChange={formik.handleChange}

              onChange={(el) => {
                formik.setFieldValue("desiredPort", el.target.value);
                formik.setFieldValue(
                  "portName",
                  handlePortName(el.target.value)
                );
              }}
              isRequired={true}
              isTouched={isTouched("desiredPort", formik)}
              error={formik.errors.desiredPort}
              className="select"
              isIdSelect={true}
            />
          </Col>
        </Row>
        {console.log("formikkkkkkkkkkkkk", formik)}
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            {/* <SimpleCaptcha /> */}

            <SimpleCaptcha
              handlehange={(el) => {
                setCaptchaValue(el.target.value);
                setFocused(false);
              }}
              error={captchaError}
              isFocused={isFocused}
            />
          </Col>
        </Row>

        <Row className="button-container">
          <Col className="btn-col address-button">
            <Button
              label="Previous"
              onClick={() => {
                changeTab("address");

                handleUpdateForm(
                  formik.values,
                  ActionType.UPDATE_ADDITIONAL_DETAILS
                );
              }}
              className="btn-sucess float-right btn-outline"
            />
          </Col>

          <Col className="address-button btn-col2">
            {/* <Link to="/successMessage"> */}{" "}
            <Button
              label="Submit"
              type="submit"
              className="btn-sucess float-right btn-default"
            />
            {/* </Link> */}
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default RegisterForm;
