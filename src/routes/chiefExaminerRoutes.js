import React from "react";
import {
  faDashboard,
  faEnvelope,
  faUserTie,
  faCalendarDays,
  faCheckToSlot,
  faChartSimple,
  faFile,
  faAddressCard,
  faGear,
  faCalendarPlus,
  faCalendarTimes,
  faCalendarWeek,
  faCalendarCheck,
  faTicket,
  faLocationPinLock,
  faLocationDot,
  faLocationPin,
  faSearchLocation,
  faCalendarXmark,
  faPeopleLine,
  faPeoplePulling,
  faUserLarge,
  faUserCheck,
  faHistory,
  faSquarePollVertical
} from "@fortawesome/free-solid-svg-icons";

const WrittenExamSchedule = React.lazy(() =>
  import("../pages/chiefExaminer/examSchedule")
);
const WrittenExamResult = React.lazy(() =>
  import("../pages/chiefExaminer/examResult")
);
const VivaExamSchedule = React.lazy(() =>
  import("../pages/chiefExaminer/vivaExam")
);
const VivaExamResult = React.lazy(() =>
  import("../pages/chiefExaminer/examResult")
);

const SurveyApplication = React.lazy(() =>
  import("../pages/portConservator/surveyAppllication")
);

export const chiefExaminerRoutes = [
  {
    name: "Dashboard",
    component: <SurveyApplication />,
    role: "pc",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },
  {
    name: "Written Exam Schedule",
    component: <WrittenExamSchedule/>,
    role: "pc",
    path: "/examSchedule",
    mainMenu:true,
    icon: faSquarePollVertical
  },
  {
    name: "Written Exam Result",
    component: <WrittenExamResult/>,
    role: "pc",
    path: "/examResult",
    mainMenu:true,
    icon: faCheckToSlot
  },
  {
    name: "Viva Exam Schedule",
    component: <VivaExamSchedule/>,
    role: "pc",
    path: "/vivaExam",
    mainMenu:true,
    icon: faFile
  },
  {
    name: "Viva Exam Result",
    component: <VivaExamResult/>,
    role: "pc",
    path: "/vivaResult",
    mainMenu:true,
    icon: faEnvelope
  },
  
  
];
