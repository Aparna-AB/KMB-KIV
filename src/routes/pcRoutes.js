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
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";

const CustomerRegApproval = React.lazy(() =>
  import("../pages/portConservator/dashboard")
);
const SurveyApplication = React.lazy(() =>
  import("../pages/portConservator/surveyAppllication")
);
const PcWrittenExamSchedule = React.lazy(() =>
  import("../pages/portConservator/Examinations/examSchedule")
);
const PcWrittenExamResult = React.lazy(() =>
  import("../pages/portConservator/Examinations/examResult")
);
const PcVivaExamSchedule = React.lazy(() =>
  import("../pages/portConservator/Examinations/vivaExam")
);
const PcVivaExamResult = React.lazy(() =>
  import("../pages/portConservator/Examinations/vivaResult")
);
/* const DeclarationForm = React.lazy(() =>
  import("../pages/portConservator/declarationForm")
); */

export const pcRoutes = [
  {
    name: "PC Dashboard",
    component: <CustomerRegApproval />,
    role: "pc",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },
  {
    name: "Survey Application",
    component: <SurveyApplication />,
    role: "pc",
    path: "/surveyApplication",
    mainMenu: true,
    icon: faSquarePollVertical,
  },
];
