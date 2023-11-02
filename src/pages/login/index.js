import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { validateCaptcha } from "react-simple-captcha";

import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import Button from "../../components/button";
import SimpleCaptcha from "../../components/simpleCaptcha";
import TextBox from "../../components/textBox";
import SelectBox from "../../components/Selectbox";

// import { useLazyFetchOneQuery } from "../../services/modules/users";
import "../../styles.scss";
import "./style.scss";
import { Config } from "../../config";
import { localData } from "../../utils/constants";
import { useLoginMutation } from "../../services/modules/auth";
import {
  loginAction,
  logoutAction,
} from "../../services/modules/auth/authSlice";
import SuccessModal from "../../components/commonSuccessModal";
import Loader from "../../components/loader";

const Index = (props) => {
  const [login, { data: response, isLoading }] = useLoginMutation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isFocused, setFocused] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    userName: "vyshagmk@gmail.com",
    password: "g33dh78f",
  };

  const requiredField = (name) => Yup.string().required(`${name} is Required!`);

  const validationSchema = Yup.object({
    userName: requiredField("User Name"),
    password: requiredField("Password"),
  });

  const onSubmit = (values) => {
    // if (validateCaptcha(captchaValue) === true) {
    const { userName, password } = values;

    let postData = {
      username: userName,
      password: password,
    };
    login(postData);
    // dispatch(logoutAction());
    // } else {
    setCaptchaError("Captcha error");
    setFocused(true);
    // }
  };

  //Theertha

  // useEffect(() => {
  //   if (response?.success) {
  //     dispatch(loginAction(response));
  //   localData.add({ role: values.userRole });
  //   setPhoneNumber("9767456778");
  //   if (values.userRole === "customer") {
  //     navigate("/otp", {
  //       state: {
  //         phoneNumber,
  //       },
  //     });
  //   } else {
  //     const roleToRoute = {
  //       pc: "customerRegApproval",
  //       zone: "sandIssueVerification",
  //       // customer: "sandBookingHistory",
  //       admin: "district",
  //       LSGD: "monthlyPermit",
  //     };

  //     const route = roleToRoute[values.userRole];
  //     if (route) {
  //       navigate(route);
  //     }
  //   }
  // }}, [response]);

  useEffect(() => {
    if (response?.success) {
      dispatch(loginAction(response));
      // const role = response?.data?.customerDetail?.role;
      const role = "port-conservator";
      localData.add({ role: response.userRole });

      const roleToRoute = {
        "port-conservator": "/",
        "zone-operator": "/",
        customer: "/",
        admin: "/",
        lsgd: "addMonthlyPermit",
      };

      const route = roleToRoute[role];
      if (route) {
        navigate("/");
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  const statusOption = [
    {
      label: "zone",
      value: "zone",
    },
    {
      label: "pc",
      value: "pc",
    },
    {
      label: "LSGD",
      value: "LSGD",
    },
    {
      label: "customer",
      value: "customer",
    },

    {
      label: "admin",
      value: "admin",
    },
  ];

  if (isLoading) return <Loader isRouterLoader={true} />;

  return (
    <div className="container-fluid h-100 p-0">
      <SuccessModal />
      <div className="login">
        <div className="row d-flex  justify-content-end h-100 m-0">
          <div className="col-md-6 col-lg-6 col-xl-6 login-log-bg-img">
            <div className="log-welcome-msg">
              <h1 className="pt-3">Welcome Back</h1>
              <p>
                Smooth seas never made a skilled sailor.
                <br /> Welcome to Kerala Maritime Port Portal
              </p>
            </div>
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 login-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="logo-wraper mb-4">
                <img src="../../../assets/images/default-logo.jpg" alt="logo" />
              </div>
              <div>
                {" "}
                <h2>Login</h2>
              </div>
              <TextBox
                placeholder="User Name"
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
                touched={isTouched("userName", formik)}
                error={formik.errors.userName}
                required={true}
                className="user-name"
              />
              <TextBox
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                touched={isTouched("password", formik)}
                error={formik.errors.password}
                required={true}
                className="password"
              />

              {/* <SelectBox
                id="userRole"
                options={statusOption}
                label="Status"
                name="userRole"
                value={formik.values.userRole}
                onChange={formik.handleChange}
                isRequired={true}
                isTouched={isTouched("userRole", formik)}
                error={formik.errors.userRole}
                className="select"
                //
              /> */}
              {/* <div className="row">
                <div className="recaptcha">
                  <SimpleCaptcha
                    handlehange={(el) => {
                      setCaptchaValue(el.target.value);
                      setFocused(false);
                    }}
                    error={captchaError}
                    isFocused={isFocused}
                  />
                </div>
              </div> */}
              <div
                style={{
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                <Button
                  label="Login"
                  type="submit"
                  className="btn-default full-width"
                  // onClick={() => navigate("/customerRegApproval")}
                />
              </div>
              <div className="divider my-4">
                <p
                  className="text-center fw-bold mx-3 mb-0 text-muted register-link"
                  onClick={() => navigate("/CustomerRegistration")}
                >
                  <span>Don't have an account?&nbsp;&nbsp;&nbsp;</span>
                  <a>Register</a>
                </p>

                <p>
                  <a
                    className="btn-outline mt-5"
                    onClick={() => navigate("/spotregistration")}
                  >
                    Spot booking{" "}
                  </a>
                </p>
              </div>

              {/* <div className="row">
                <div className="recaptcha">
                  <ReCAPTCHA sitekey={Config.CAPTCHA_KEY} onChange={onChange} />
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
