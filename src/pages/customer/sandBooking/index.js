import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

import TextBox from "../../../components/textBox";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import {
  useLazyFetchAllPortQuery,
  useLazyFetchAllZoneQuery,
} from "../../../services/modules/portConservator/port";
import { useNormalBookMutation } from "../../../services/modules/customer/normalBooking";

import Loader from "../../../components/loader";
import SuccessModal from "../../../components/successModal";
import { Messages } from "../../../utils/constants";
import "./style.scss";
import { useLazyFetchbyZoneIdQuery } from "../../../services/modules/portConservator/quantity";
import { getUserInfo } from "../../../utils/selectors";

const positiveNumber = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;

const Index = () => {
  const [show, setShow] = useState(false);
  const [showToast, setToast] = useState(false);
  const [fetchAllPort, { data: portData }] = useLazyFetchAllPortQuery();
  const [fetchAllZone, { data: zoneData }] = useLazyFetchAllZoneQuery();
  const [normalBook, { data, error, isLoading }] = useNormalBookMutation();
  const [fetchAllQuantity, { data: quantity }] = useLazyFetchbyZoneIdQuery();
  const [message, setMessage] = useState("");
  const [quantityArray, setQuantity] = useState([]);
  useEffect(() => {
    fetchAllPort();
  }, []);

  const initialValues = {
    port: "",
    zone: "",
    distance: "",
    unloadingPlace: "",
    tonRequired: "",
    portName: "",
    zoneName: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    zone: requiredField("Zone"),
    port: requiredField("Port"),
    tonRequired: requiredField("Ton Required").matches(
      positiveNumber,
      "Invalid Ton "
    ),
    distance: requiredField("Distance"),
    unloadingPlace: requiredField("Unloading Place"),
    // tonRequired: requiredField("Ton Required"),
  });

  const onSubmit = (values) => {
    const {
      port,
      zone,
      distance,
      unloadingPlace,
      tonRequired,
      portName,
      zoneName,
    } = values;
    const userId = getUserInfo()?.customerDetail?._id;
    const full_name = getUserInfo()?.customerDetail?.full_name;
    let postData = {
      port: { _id: port, name: portName },
      zone: { _id: zone, name: zoneName },
      address: unloadingPlace,
      quantity: tonRequired,
      distance: distance,
      user: {
        _id: userId,
        name: full_name,
      },
    };
    setToast(false);
    normalBook(postData);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (error?.data?.success === false) {
      setToast(true);
      setMessage(error?.data?.message);
    }
    if (data?.success) {
      handleOnclick(true);
    }
  }, [error, data]);

  useEffect(() => {}, []);

  const handleOnclick = (item) => {
    setShow(true);
  };

  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const handlePortName = (id) => {
    const value = portData?.data.find((el) => el._id === id)?.port_name;
    return value;
  };

  const handleZoneName = (id) => {
    const value = zoneData?.data.find((el) => el._id === id)?.zone_name;
    return value;
  };

  const handleClose = () => {
    setShow(false);
    formik.resetForm();
  };

  const handleChange = (field, el) => {
    formik.setFieldValue(field, el);
    formik.setFieldError(field, "");

    if (field === "port") {
      formik.setFieldValue("portName", handlePortName(el));
      fetchAllZone(el);
      formik.setFieldValue("zoneName", "");
      formik.setFieldValue("zone", "");
    }
    if (field === "zone") {
      formik.setFieldValue("zoneName", handleZoneName(el));
      fetchAllQuantity({ zoneId: el });
    }
  };

  useEffect(() => {
    let arrayValue = [];

    if (quantity?.data?.quantity?.length > 0) {
      quantity?.data?.quantity?.map((el) => {
        arrayValue.push({ value: el, label: el });
      });
    }
    console.log(arrayValue);
    setQuantity(arrayValue);
  }, [quantity]);

  if (isLoading) return <Loader />;
  return (
    <Container>
      {show && (
        <SuccessModal
          show={setShow}
          handleClose={handleClose}
          message={Messages.sandBookingsuccessmsg}
        />
      )}

      <Row
        style={{ display: "flex", justifyContent: "center" }}
        className="sandbooking-form"
      >
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div>
            <h2 style={{ marginBottom: "20px" }}>{"Sand Booking Form"}</h2>
          </div>
          <form className="form-control" onSubmit={formik.handleSubmit}>
            <Row style={{ display: "flex", justifyContent: "start" }}>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <SelectBox
                  id="port"
                  options={portData ? portData.data : []}
                  label="Port"
                  name="port"
                  value={formik.values.port}
                  onChange={(el) => handleChange("port", el.target.value)}
                  isRequired={true}
                  isTouched={isTouched("port", formik)}
                  error={formik.errors.port}
                  className="select"
                  required={true}
                  isIdSelect={true}
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <SelectBox
                  id="zone"
                  options={zoneData ? zoneData.data : []}
                  label="Preferred Zone"
                  name="zone"
                  value={formik.values.zone}
                  onChange={(el) => handleChange("zone", el.target.value)}
                  isRequired={true}
                  isTouched={isTouched("zone", formik)}
                  error={formik.errors.zone}
                  className="select"
                  isIdSelect={true}
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox
                  label="Distance(KM)"
                  id="distance"
                  name="distance"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.distance}
                  touched={isTouched("distance", formik)}
                  error={formik.errors.distance}
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox
                  label="Unloading Place"
                  id="unloadingPlace"
                  name="unloadingPlace"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.unloadingPlace}
                  touched={isTouched("unloadingPlace", formik)}
                  error={formik.errors.unloadingPlace}
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <SelectBox
                  id="tonRequired"
                  options={quantityArray ? quantityArray : []}
                  label="Ton Required"
                  name="tonRequired"
                  value={formik.values.tonRequired}
                  onChange={formik.handleChange}
                  isRequired={true}
                  isTouched={isTouched("tonRequired", formik)}
                  error={formik.errors.tonRequired}
                  className="select"
                  required={true}
                  isIdSelect={true}
                />
              </Col>
            </Row>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                label="Submit"
                type="submit"
                className="btn-sucess float-right btn-default"
              />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
