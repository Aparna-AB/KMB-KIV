import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import SelectBox from "../../../components/Selectbox";
import "./spotStyles.scss";
import { useSpotBookMutation } from "../../../services/modules/customer/spotBooking";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../../../services/modules/customer/otp";
import {
  useLazyFetchAllPortQuery,
  useLazyFetchAllZoneQuery,
} from "../../../services/modules/portConservator/port";
import { vehicleType } from "../../../utils/constants";
import Toaster from "../../../components/toaster";
import Loader from "../../../components/loader";
import SuccessModal from "../../../components/successModal";
import { Messages } from "../../../utils/constants";
import { useLazyFetchbyZoneIdQuery } from "../../../services/modules/portConservator/quantity";
import WarningSuccessModal from "../../../components/commonSuccessModal";

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;
const aadharRegExp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
const positiveNumber = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;

const SpotRegistration = () => {
  const [show, setShow] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState(" ");
  const [quantityArray, setQuantity] = useState([]);
  const [sendOtp, { data: otpData }] = useSendOtpMutation();

  const [spotBook, { data, error, isLoading }] = useSpotBookMutation();

  const [fetchAllPort, { data: portData }] = useLazyFetchAllPortQuery();
  const [
    fetchAllZone,
    { data: zoneData, isLoading: zoneLoading, error: zoneError },
  ] = useLazyFetchAllZoneQuery();

  const [fetchAllQuantity, { data: quantity }] = useLazyFetchbyZoneIdQuery();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const inputFields = [
    {
      id: "port",
      label: "Port",
      value: portData ? portData.data : [],
      isIdSelect: true,
    },
    {
      id: "preferredZone",
      label: "Preferred Zone",
      value: zoneData ? zoneData.data : [],
      isIdSelect: true,
    },
    {
      id: "vehicleType",
      label: "Vehicle Type",
      value: vehicleType,

      isIdSelect: false,
    },
  ];
  const initialValues = {
    mobile: "",
    port: "",
    preferredZone: "",
    tonNeeded: "",
    vehicleType: "",
    aadharNo: "",
    portName: "",
    zoneName: "",
    name: "",
    tonRequired: "",
    unloadingPlace: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    mobile: requiredField("Mobile Number").matches(
      phoneRegExp,
      "Mobile Number is not valid"
    ),
    port: requiredField("Port"),
    preferredZone: requiredField("Preferred Zone"),
    tonNeeded: requiredField("Ton Needed").matches(
      positiveNumber,
      "Invalid Ton "
    ),
    vehicleType: requiredField("Vehicle Type"),
    aadharNo: Yup.string()
      .matches(aadharRegExp, "Aadhaar Number is not valid")
      .required("Aadhaar Number is required!"),
    unloadingPlace: requiredField("Unloading Place"),

    name: requiredField("User Name "),
  });
  const onSubmit = (values) => {
    const {
      mobile,
      port,
      preferredZone,
      tonNeeded,
      vehicleType,
      aadharNo,
      portName,
      zoneName,
      name,
      unloadingPlace,
    } = values;

    let postData = {
      phone: mobile,
      name: name,
      port: { _id: port, name: portName },
      zone: { _id: preferredZone, name: zoneName },
      ton: tonNeeded,
      vehicle_type: vehicleType,
      aadhaar_number: aadharNo,
      unloading_place: unloadingPlace,
    };

    setPhoneNumber(mobile);
    setMail("sanupriya.kk@ultsglobal.com");
    spotBook(postData);
  };

  useEffect(() => {
    fetchAllPort();
  }, []);

  useEffect(() => {
    if (data?.success) {
      handleOnclick(true);
      let otpDatas = {
        mobile: phoneNumber,
        email: "sanupriya.kk@ultsglobal.com",
      };
      sendOtp(otpDatas);
    }
  }, [data]);

  const handleOnclick = (item) => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    navigate("/otp", {
      state: {
        phoneNumber,
        mail,
      },
    });
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

  const handleChange = (field, el) => {
    formik.setFieldValue(field, el);
    formik.setFieldError(field, "");

    if (field === "port") {
      formik.setFieldValue("portName", handlePortName(el));

      fetchAllZone(el);

      formik.setFieldValue("preferredZone", "");
      formik.setErrors("portName", "");
    }
    if (field === "preferredZone") {
      fetchAllQuantity({ zoneId: el });

      formik.setFieldValue("zoneName", handleZoneName(el));
      formik.setErrors("zoneName", "");
    }
  };

  useEffect(() => {
    let arrayValue = [];

    if (quantity?.data?.quantity?.length > 0) {
      quantity?.data?.quantity?.map((el) => {
        arrayValue.push({ value: el, label: el });
      });
    }

    setQuantity(arrayValue);
  }, [quantity]);

  const handlePortName = (id) => {
    const value = portData?.data.find((el) => el._id === id)?.port_name;
    return value;
  };

  const handleZoneName = (id) => {
    const value = zoneData?.data.find((el) => el._id === id)?.zone_name;
    return value;
  };
  if (isLoading) return <Loader isRouterLoader={true} />;

  return (
    <form className="form-control" onSubmit={formik.handleSubmit}>
      {show && (
        <SuccessModal
          show={setShow}
          handleClose={handleClose}
          message={Messages.spotbookingsuccessmsg}
        />
      )}
      <WarningSuccessModal />

      <Row>
        <Col md={12}>
          <TextBox
            label="User Name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            touched={isTouched("name", formik)}
            error={formik.errors.name}
            required={true}
          />

          <TextBox
            label="Mobile Number"
            placeholder=""
            id="mobile"
            name="mobile"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            touched={isTouched("mobile", formik)}
            error={formik.errors.mobile}
            required={true}
          />
          <TextBox
            label="Aadhaar Number"
            id="aadharNo"
            name="aadharNo"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.aadharNo}
            touched={isTouched("aadharNo", formik)}
            error={formik.errors.aadharNo}
            required={true}
          />
          {inputFields.map((field) => (
            <SelectBox
              key={field.id}
              id={field.id}
              options={field.value}
              label={field.label}
              name={field.id}
              value={formik.values[field.id]}
              onChange={(el) => handleChange(field.id, el.target.value)}
              isRequired={true}
              isTouched={isTouched(field.id, formik)}
              error={formik.errors[field.id]}
              className="select dropdown"
              isIdSelect={field.isIdSelect}
            />
          ))}

          <SelectBox
            id="tonNeeded"
            options={quantityArray ? quantityArray : []}
            label="Ton Required"
            name="tonNeeded"
            value={formik.values.tonNeeded}
            onChange={formik.handleChange}
            isRequired={true}
            isTouched={isTouched("tonNeeded", formik)}
            error={formik.errors.tonNeeded}
            className="select"
            required={true}
            isIdSelect={true}
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

          <div class="d-flex justify-content-center mt-4">
            <div class="row">
              <div class="col">
                <a className="btn-outline" onClick={() => navigate("/login")}>
                  {" "}
                  Back{" "}
                </a>
              </div>
              <div class="col">
                <Button label="Get OTP" type="submit" className="btn-default" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default SpotRegistration;
