import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";

import Buttons from "../../../../components/button";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import "./style.scss";

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;
const Index = ({
  handleShowForm2,
  handleUpdateForm,
  ActionType,
  state,
  imageInfo,
  setImageInfo,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const initialValues = {
    name: "",
    surname: "",
    profileimg: "",
    nationality: "",
    placeofbirth: "",
    presentaddress: "",
    dateofbirth: "",
    mobnumber: "",
    competancyofservice: "",
    grade: "",
    whereissued: "",
    dateofissue: "",
    certificatecancelled: "",
  };
  const partAinputFields = [
    {
      label: "Name in Full",
      id: "name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Surname",
      id: "surname",
      name: "surname",
      type: "text",
      required: true,
    },
    {
      label: "Nationality",
      id: "nationality",
      name: "nationality",
      type: "text",
      required: true,
    },
    {
      label: "Place of Birth",
      id: "placeofbirth",
      name: "placeofbirth",
      type: "text",
      required: true,
    },
  ];
  const partBinputfields = [
    {
      label: "Number",
      id: "mobnumber",
      name: "mobnumber",
      type: "text",
      required: true,
    },
    {
      label: "Competency of Service",
      id: "competancyofservice",
      name: "competancyofservice",
      type: "text",
      required: true,
    },
    {
      label: "Grade",
      id: "grade",
      name: "grade",
      type: "text",
      required: true,
    },
    {
      label: "Where issued",
      id: "whereissued",
      name: "whereissued",
      type: "text",
      required: true,
    },
    {
      label: "Date of Issue",
      id: "dateofissue",
      name: "dateofissue",
      type: "text",
      required: true,
    },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    surname: Yup.string().required("Surname is required!"),
    nationality: Yup.string().required("Nationality is required!"),
    placeofbirth: Yup.string().required("Place of Birth is required!"),
    presentaddress: Yup.string().required("Present Address is required!"),
    dateofbirth: Yup.string().required("Date of Birth is required!"),
    mobnumber: Yup.string()
      .matches(phoneRegExp, "Mobile Number is not valid")
      .required("Mobile Number is required!"),
    competancyofservice: Yup.string().required(
      "Competency of Service is required!"
    ),
    grade: Yup.string().required("Grade is required!"),
    whereissued: Yup.string().required("Where issued is required!"),
    dateofissue: Yup.string().required("Date of issue is required!"),
    // profileimg: Yup.string().required("Profile image is required!"),
  });

  const onSubmit = (values) => {
    values.profileimg = selectedFile;
    if (imageInfo.selectedFile != null) {
      formik.setFieldError("profileimg", "");
      handleShowForm2();
      handleUpdateForm(values, ActionType.UPDATE_FORM1_DETAILS);
    } else {
      formik.setFieldError("profileimg", "Profile image is required!");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const isTouched = (fieldsection_name, formik) => {
    const isCondition =
      formik.touched[fieldsection_name] && formik.errors[fieldsection_name];
    return isCondition ? true : false;
  };
  useEffect(() => {
    const {
      name,
      surname,
      mobnumber,
      profileimg,
      nationality,
      placeofbirth,
      presentaddress,
      dateofbirth,
      competancyofservice,
      grade,
      whereissued,
      dateofissue,
      certificatecancelled,
    } = state;
    const fieldValues = {
      name,
      surname,
      profileimg,
      mobnumber,
      nationality,
      placeofbirth,
      presentaddress,
      dateofbirth,
      competancyofservice,
      grade,
      whereissued,
      dateofissue,
      certificatecancelled,
    };
    Object.keys(fieldValues).forEach((field) => {
      formik.setFieldValue(field, fieldValues[field] ?? "");
    });
  }, []);
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageInfo({
          selectedImage: e.target.result,
          selectedFileName: file.name,
          selectedFile: file,
        });
        formik.setFieldError("profileimg", "");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="master-class-form">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <div className="note">
            <p>
              Note: The applicant shall submit this form duly filled in along
              with the necessary certificates to the examination centre for
              permission to appear in the examination.
            </p>
          </div>
        </div>
      </div>
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="row" style={{ position: "relative" }}>
          <div className="col-md-8 col-lg-8 col-sm-12">
            <h4 className="main-head">PART A</h4>
            <p className="sub-head">Personal Particulars</p>
            <div className="row">
              {partAinputFields.map((input) => (
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <TextBox
                    label={input.label}
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                    required={input.required}
                    key={input.id}
                  />
                </Col>
              ))}
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <TextArea
                  label="Permanent Address"
                  rows={4}
                  name="presentaddress"
                  onChange={formik.handleChange}
                  value={formik.values.presentaddress}
                  touched={formik.touched.presentaddress}
                  error={formik.errors.presentaddress}
                  required={true}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <TextBox
                  label="Birth Date"
                  name="dateofbirth"
                  type="date"
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.dateofbirth}
                  touched={isTouched("dateofbirth", formik)}
                  error={formik.errors.dateofbirth}
                  required={true}
                />
              </Col>
            </div>
          </div>
          <div className="col-md-4  col-lg-4 col-sm-12 profile-image-wrapper">
            <label htmlFor="custom-file" className="custom-label-file">
              {imageInfo.selectedImage ? (
                <img
                  src={imageInfo.selectedImage}
                  alt="Uploaded"
                  className="uploaded-image"
                />
              ) : (
                <div className="upload-icon"></div>
              )}
            </label>
            <TextBox
              type="file"
              id="custom-file"
              accept="image/*"
              name="profileimg"
              className="upload-imgage-text-box"
              onChange={handleImageChange}
              style={{ display: "none" }}
              // Remove the value prop here
              // value={selectedFile}
              touched={formik.touched.profileimg}
              error={formik.errors.profileimg}
              required={true}
            />
          </div>
        </div>
        <div className="row mt-5">
          <h4 className="main-head">PART B</h4>
          <p className="sub-head">
            Particulars of all previous certificates (If any)
          </p>

          <div className="row">
            {partBinputfields.map((input) => (
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <TextBox
                  label={input.label}
                  id={input.id}
                  name={input.name}
                  type={input.type}
                  onChange={formik.handleChange}
                  value={formik.values[input.name]}
                  touched={formik.touched[input.name]}
                  error={formik.errors[input.name]}
                  required={input.required}
                  key={input.id}
                />
              </Col>
            ))}
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
              <TextArea
                label="Is the certificate any time suspended or cancelled by court or authority (if yes, provide details)"
                rows={4}
                name="certificatecancelled"
                onChange={formik.handleChange}
                value={formik.values.certificatecancelled}
              />
            </Col>
          </div>
        </div>
        <div className="row btn-container">
          <div className="modal-buttons">
            <Buttons
              type="submit"
              label={"Next "}
              className="button-submit"
            ></Buttons>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Index;
