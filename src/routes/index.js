import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidemenu from "../components/sideBar/sidebar";
import Navbar from "../components/sideBar/navbar";
import "./styles/core.scss";
import "./styles/theme.scss";
import "./styles/dashboard.scss";
import { customerRoutes, authRoutes } from "./customerRoutes";
import { pcRoutes } from "./pcRoutes";
import { voRoutes } from "./voRoutes";
import { examinationRoutes } from "./examinationRoutes";
import PrivateRoutes from "./privateRoutes";
import Loader from "../components/loader";
import { adminRoutes } from "./adminRoutes";
import { localData } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { chiefExaminerRoutes } from "./chiefExaminerRoutes";
import { candidateRoutes } from "./candidateRoutes";
import { chiefSurveyorRoutes } from "./chiefSurveyorRoutes";
import { sectionClerkRoutes } from "./sectionClerkRoutes";
import { surveyorRoutes } from "./surveyorRoutes";
const Login = React.lazy(() => import("../pages/login"));
const NotFound = React.lazy(() => import("../components/notFound"));


//LOGIN + REGISTRATION//

// const Login= React.lazy(() => import("../pages/login"))
// const Customer = React.lazy(() =>
//   import("../pages/customer/components/index")
// );

// const CustomerRegistration = React.lazy(() =>
//   import("../pages/customer_kiv/registration/index")
// );





export default function Routers() {
  const userToken = useSelector((state) => state.authSlice.userToken);
  const userInfo = useSelector((state) => state.authSlice.userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userToken) {
      // navigate("/login");
    }
  }, []);

  function getRouteForRole(role) {
    // const userRole = userInfo?.customerDetail?.role;
    // const roleToRoute = {
    //   "port-conservator": "port-conservator",
    //   "zone-operator": "sandIssueVerification",
    //   customer: "sandBookingHistory",
    //   admin: "district",
    //   lsgd: "addMonthlyPermit",
    // };
    // return roleToRoute[role];

    const userRole = userInfo?.customerDetail?.role;

    return userRole === role ? true : false;
  }
  return (
    <div>
      <Suspense fallback={<Loader isRouterLoader={true} />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/successModal" element={<successModal />} />
          <Route path="/commonSuccessModal" element={<commonSuccessModal />} />

          {authRoutes.map((el, i) => (
            <Route key={el.name} path={el.path} element={el.component} />
          ))}
          {/* <Route element={<PrivateRoutes />}> */}

          {pcRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}
          {voRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}
                  {""}
                </PrivateRoutes>
              }
            />
          ))}
          {chiefExaminerRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}
          {candidateRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}

          {customerRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"customer"}>{el.component} </PrivateRoutes>
              }
            />
          ))}
          {chiefSurveyorRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}

          {adminRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"admin"}>{el.component} </PrivateRoutes>
              }
            />
          ))}
          {pcRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}
          {customerRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"customer"}>{el.component} </PrivateRoutes>
              }
            />
          ))}

          {adminRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"admin"}>{el.component} </PrivateRoutes>
              }
            />
          ))}

          {examinationRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"port-conservator"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}

          {sectionClerkRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"section-clerk"}>
                  {el.component}{" "}
                </PrivateRoutes>
              }
            />
          ))}
          {surveyorRoutes.map((el) => (
            <Route
              key={el.name}
              path={el.path}
              element={
                <PrivateRoutes role={"surveyor"}>{el.component} </PrivateRoutes>
              }
            />
          ))}



//LOGIN + REGISTRATION//
{/* <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="login" element={<Login />} />
       
        {/* <Route path="customer" element={<Customer />} /> */}
       
       

{/* <Route path="customerRegistration"
            element={<CustomerRegistration />}
          />
          
        </Routes>
      </Suspense>
    </div> */} 




          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
