import React, { useEffect, useState } from "react";
import Sidemenu from "../components/sideBar/sidebar";
import Navbar from "../components/sideBar/navbar";
import { pcRoutes } from "./pcRoutes";
import { voRoutes } from "./voRoutes";
import { examinationRoutes } from "./examinationRoutes";
import { sectionClerkRoutes } from "./sectionClerkRoutes";
import { Outlet } from "react-router-dom";
//import { customerRoutes } from "./customerRoutes";
import { adminRoutes } from "./adminRoutes";
import { chiefExaminerRoutes } from "./chiefExaminerRoutes";
import { candidateRoutes } from "./candidateRoutes";

import { localData } from "../utils/constants";
import { getUserInfo } from "../utils/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chiefSurveyorRoutes } from "./chiefSurveyorRoutes";
import { surveyorRoutes } from "./surveyorRoutes";

function PrivateRoutes({ children, role }) {
  const [routes, setRoutes] = useState("");
  const userInfo = useSelector((state) => state.authSlice.userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    const role = userInfo?.customerDetail?.role;

    //     "port-conservator": pcRoutes,
    //     "zone-operator": zoneRoutes,
    //     admin: adminRoutes,
    //     customer: customerRoutes,
    //     lsgd: LSGDRoutes,
    //setRoutes(examinationRoutes);

    //setRoutes(pcRoutes);
    //setRoutes(examinationRoutes);
    //setRoutes(chiefSurveyorRoutes);
    //setRoutes(sectionClerkRoutes);
    // if (role) {
    //   const roleRoutes = {
    //     "port-conservator": pcRoutes,
    //     "zone-operator": zoneRoutes,
    //     admin: adminRoutes,
    //     customer: customerRoutes,
    //     lsgd: LSGDRoutes,
    //   };
    setRoutes(voRoutes);
    //   const selectedRoutes = roleRoutes[role];
    //   if (selectedRoutes) {
    //     setRoutes(pcRoutes);
    //   } else {
    //     // navigate("/");
    //     // Handle unknown role value
    //   }
    // }
  }, [getUserInfo()]);

  const getValidate = ({ children }) => {
    return children;
    // const userRole = userInfo?.customerDetail?.role;
    // if (role === userRole) {
    //   return children;
    // } else {
    //   // navigate("/login");
    // }
  };

  return (
    <div id="root">
      <div>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <Sidemenu routes={routes} />
            <div className="layout-page">
              <Navbar />
              <Outlet />
              {getValidate({ children })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateRoutes;
