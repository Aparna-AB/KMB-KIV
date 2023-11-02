import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import SelectBox from "../../../components/Selectbox";
import CheckBox from "../../../components/checkbox";
import "./style.scss";
import "../../../styles.scss";
import { useLazyFetchAllDistrictQuery } from "../../../services/modules/portConservator/district";
import { useLazyFetchAllLSGDQuery } from "../../../services/modules/portConservator/LSGD";

// const pinRegularExp = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";

function RegisterForm({ changeTab, handleUpdateForm, ActionType, state }) {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [fetchAllDistrict, { data: districtData }] =
    useLazyFetchAllDistrictQuery();
  const [fetchAllLSGD, { data: lsgdData }] = useLazyFetchAllLSGDQuery();
  const initialValues = {
    houseNo: "",
    houseName: "",
    place: "",
    district: "",

    localBody: "",
    postOffice: "",
    pinCode: "",
    siteHouseName: "",
    sitePlace: "",
    siteDistrict: "",
    siteLocalBody: "",
    sitePostOffice: "",
    sitePinCode: "",
    districtName: "",
    siteDistrictName: "",
    localBodyName: "",
    siteLocalBodyName: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    houseNo: requiredField("House Number"),
    houseName: requiredField("House Name"),
    place: requiredField("Place"),
    district: requiredField("District"),
    localBody: requiredField("Local Body"),
    postOffice: requiredField("Post Office"),
    pinCode: requiredField("Pin Code"),

    siteHouseName: requiredField("Site Address/House Name"),
    sitePlace: requiredField("Place"),
    siteDistrict: requiredField("District"),
    siteLocalBody: requiredField("Local Body"),
    sitePostOffice: requiredField("Post Office"),
    sitePinCode: requiredField("Pin Code"),
  });

  const onSubmit = (values) => {
    changeTab("additional");
    handleUpdateForm(values, ActionType.UPDATE_ADDRESS_DETAILS);
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

  const handleSiteAddress = (isSelected) => {
    const {
      houseName,
      place,
      district,
      localBody,
      postOffice,
      pinCode,
      districtName,
      localBodyName,
    } = formik.values;
    const siteFields = {
      siteHouseName: houseName,
      sitePlace: place,
      siteDistrict: district,
      siteLocalBody: localBody,
      sitePostOffice: postOffice,
      sitePinCode: pinCode,
      siteDistrictName: districtName,
      siteLocalBodyName: localBodyName,
    };

    formik.setFieldValue("isPresentAddress", isSelected);
    if (isSelected) {
      formik.setValues((values) => ({ ...values, ...siteFields }));
    }
  };

  useEffect(() => {
    const {
      houseNo,
      houseName,
      place,
      district,
      localBody,
      postOffice,
      pinCode,
      siteHouseName,
      sitePlace,
      siteDistrict,
      siteLocalBody,
      sitePostOffice,
      sitePinCode,
      districtName,
      siteDistrictName,
      localBodyName,
      siteLocalBodyName,
    } = state;
    const fieldValues = {
      houseNo,
      houseName,
      place,
      district,
      localBody,
      postOffice,
      pinCode,
      siteHouseName,
      sitePlace,
      siteDistrict,
      siteLocalBody,
      sitePostOffice,
      sitePinCode,
      districtName,
      siteDistrictName,
      localBodyName,
      siteLocalBodyName,
    };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);

  useEffect(() => {
    fetchAllDistrict();
    fetchAllLSGD();
  }, []);

  const handleDistrictName = (id) => {
    const value = districtData?.data.find((el) => el._id === id)?.district_name;
    return value;
  };
  const handleLSGDName = (id) => {
    const value = lsgdData?.data.find((el) => el._id === id)?.lsgd_name;
    return value;
  };

  return (
    <div className="address-container maindetails">
      <form className="" onSubmit={formik.handleSubmit}>
        <Row className="justify-content-md-center addresrow">
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className="">
            <div>
              <p className="address-name">Present Address Details</p>
            </div>
            <TextBox
              label="House Number"
              id="houseNo"
              name="houseNo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.houseNo}
              touched={isTouched("houseNo", formik)}
              error={formik.errors.houseNo}
              required={true}
            />
            <TextBox
              label="House Name"
              id="houseName"
              name="houseName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.houseName}
              touched={isTouched("houseName", formik)}
              error={formik.errors.houseName}
              required={true}
            />
            <TextBox
              label="Place"
              id="place"
              name="place"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.place}
              touched={isTouched("place", formik)}
              error={formik.errors.place}
              required={true}
            />
            <SelectBox
              id="district"
              options={districtData?.data ?? []}
              label="District"
              name="district"
              value={formik.values.district}
              onChange={(el) => {
                formik.setFieldValue("district", el.target.value);
                formik.setFieldValue(
                  "districtName",
                  handleDistrictName(el.target.value)
                );
              }}
              isRequired={true}
              isTouched={isTouched("district", formik)}
              error={formik.errors.district}
              className="select"
              isIdSelect={true}
            />
            {/* <SelectBox
              id="localBody"
              lsgdData
              options={lsgdData?.data ?? []}
              label="Local Body"
              name="localBody"
              value={formik.values.localBody}
              onChange={(el) => {
                formik.setFieldValue("localBody", el.target.value);
                formik.setFieldValue(
                  "localBodyName",
                  handleLSGDName(el.target.value)
                );
              }}
              isRequired={true}
              isTouched={isTouched("localBody", formik)}
              error={formik.errors.localBody}
              className="select"
              isIdSelect={true}
            /> */}

            <TextBox
              label="Local Body"
              id="localBody"
              name="localBody"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.localBody}
              touched={isTouched("localBody", formik)}
              error={formik.errors.localBody}
              required={true}
            />

            <TextBox
              label="Post Office"
              id="postOffice"
              name="postOffice"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.postOffice}
              touched={isTouched("postOffice", formik)}
              error={formik.errors.postOffice}
              required={true}
            />

            {/* <SelectBox
              id="postOffice"
              options={options}
              label="Post Office"
              name="postOffice"
              value={formik.values.postOffice}
              onChange={formik.handleChange}
              isRequired={true}
              isTouched={isTouched("postOffice", formik)}
              error={formik.errors.postOffice}
              className="select"
            /> */}
            <TextBox
              label="Pin Code"
              id="pinCode"
              name="pinCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.pinCode}
              touched={isTouched("pinCode", formik)}
              error={formik.errors.pinCode}
              required={true}
            />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <p className="address-name">Worksite Address Details</p>
              <div className="address-details">
                <CheckBox
                  id={"isPresentAddress"}
                  label={"Same as present Address Details"}
                  name="isPresentAddress"
                  onClick={handleSiteAddress}
                />
              </div>
            </div>

            <div className="site-house">
              <TextBox
                label="Site Address/House Name"
                id="siteHouseName"
                name="siteHouseName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.siteHouseName}
                touched={isTouched("siteHouseName", formik)}
                error={formik.errors.siteHouseName}
                required={true}
              />
            </div>
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

            <SelectBox
              id="siteDistrict"
              options={districtData?.data ?? []}
              label="District"
              name="siteDistrict"
              value={formik.values.siteDistrict}
              // onChange={formik.handleChange}

              onChange={(el) => {
                formik.setFieldValue("siteDistrict", el.target.value);
                formik.setFieldValue(
                  "siteDistrictName",
                  handleDistrictName(el.target.value)
                );
              }}
              isRequired={true}
              isTouched={isTouched("siteDistrict", formik)}
              error={formik.errors.siteDistrict}
              className="select"
              isIdSelect={true}
            />

            {/* <SelectBox
              id="siteLocalBody"
              options={lsgdData?.data ?? []}
              label="Local Body"
              name="siteLocalBody"
              value={formik.values.siteLocalBody}
              // onChange={formik.handleChange}

              onChange={(el) => {
                formik.setFieldValue("siteLocalBody", el.target.value);
                formik.setFieldValue(
                  "siteLocalBodyName",
                  handleLSGDName(el.target.value)
                );
              }}
              isRequired={true}
              isTouched={isTouched("siteLocalBody", formik)}
              error={formik.errors.siteLocalBody}
              className="select"
              isIdSelect={true}
            /> */}
            {/* 
            <SelectBox
              id="sitePostOffice"
              options={options}
              label="Post Office"
              name="sitePostOffice"
              value={formik.values.sitePostOffice}
              onChange={formik.handleChange}
              isRequired={true}
              isTouched={isTouched("sitePostOffice", formik)}
              error={formik.errors.sitePostOffice}
              className="select"
            /> */}

            <TextBox
              label="Local Body"
              id="siteLocalBody"
              name="siteLocalBody"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.siteLocalBody}
              touched={isTouched("siteLocalBody", formik)}
              error={formik.errors.siteLocalBody}
              required={true}
            />

            <TextBox
              label="Post Office"
              id="sitePostOffice"
              name="sitePostOffice"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.sitePostOffice}
              touched={isTouched("sitePostOffice", formik)}
              error={formik.errors.sitePostOffice}
              required={true}
            />

            <TextBox
              label="Pin Code"
              id="sitePinCode"
              name="sitePinCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.sitePinCode}
              touched={isTouched("sitePinCode", formik)}
              error={formik.errors.sitePinCode}
              required={true}
            />
          </Col>
        </Row>
        <Row className="button-container">
          <Col className="btn-col address-button">
            <a className="btn-outline " onClick={() => changeTab("main")}>
              Previous
            </a>
          </Col>

          <Col className="address-button btn-col2">
            <Button
              label="Next"
              type="submit"
              className="btn-sucess float-right  btn-default"
            />
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default RegisterForm;
