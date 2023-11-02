import { useFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import "../../../styles.scss";
import "./style.scss";

const aadharRegExp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;

function RegisterForm({
  changeTab,
  handleSubmit,
  handleUpdateForm,
  ActionType,
}) {
  const initialValues = {
    uploadAadhar: "",
    aadharNo: "",
  };

  const validationSchema = Yup.object({
    aadharNo: Yup.string()
      .matches(aadharRegExp, "Aadhar Number is not valid")
      .required("Aadhar Number is required!"),
    uploadAadhar: Yup.string().required("Upload Aadhar"),
  });

  const onSubmit = (values) => {
    handleUpdateForm(
      values,
      ActionType.UPDATE_AADHAR_AUTHENTICATION_DETAILS
    );
    handleSubmit();
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
    <div className="additional-container maindetails">
      <form className="" onSubmit={formik.handleSubmit}>
        <Row className="justify-content-md-center">
          <Col>
            <TextBox
              label="Upload Aadhar"
              id="uploadAadhar"
              name="uploadAadhar"
              type="file"
              onChange={formik.handleChange}
              value={formik.values.uploadAadhar}
              touched={isTouched("uploadAadhar", formik)}
              error={formik.errors.uploadAadhar}
            />
          </Col>

          <Col>
            <TextBox
              label="Aadhar Number"
              id="aadharNo"
              name="aadharNo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.aadharNo}
              touched={isTouched("aadharNo", formik)}
              error={formik.errors.aadharNo}
            />
          </Col>
        </Row>

        <Row className="button-container">
                      <Col className="btn-col address-button">
                        <a className="btn-outline " onClick={() => changeTab("additional")}>
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
