import React from "react";
import {
  faAddressBook,
  faBandage,
  faBook,
  faBookBible,
  faBookDead,
  faBookJournalWhills,
  faBookReader,
  faCertificate,
  faClock,
  faClockFour,
  faDashboard,
  faDoorClosed,
  faSquarePollVertical,
  faTimes,
  faTimesSquare,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Dashboard = React.lazy(() =>
  import("../pages/examinationModule/dashboard")
);
const CertificateOfCompetency = React.lazy(() =>
  import("../pages/examinationModule/certificateOfCompetency")
);
const WrittenExamSchedule = React.lazy(() =>
  import("../pages/examinationModule/writtenExamSchedule")
);
const WrittenExamResults = React.lazy(() =>
  import("../pages/examinationModule/writtenExamResults")
);
const VivaExamSchedule = React.lazy(() =>
  import("../pages/examinationModule/vivaExamSchedule")
);
const VivaExamResults = React.lazy(() =>
  import("../pages/examinationModule/vivaExamResults")
);

export const examinationRoutes = [
  {
    name: "Dashboard",
    component: <Dashboard />,
    role: "pc",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },
  {
    name: "Certificate Of Competency",
    component: <CertificateOfCompetency />,
    role: "pc",
    path: "/certificateOfCompetency",
    mainMenu: true,
    icon: faCertificate,
  },
  {
    name: "Written Exam Schedule",
    component: <WrittenExamSchedule />,
    role: "pc",
    path: "/writtenexamschedule",
    mainMenu: true,
    icon: faUserClock,
  },
  {
    name: "Written Exam Results",
    component: <WrittenExamResults />,
    role: "pc",
    path: "/writtenexamresults",
    mainMenu: true,
    icon: faBook,
  },
  {
    name: "Viva Exam Schedule",
    component: <VivaExamSchedule />,
    role: "pc",
    path: "/vivaexamschedule",
    mainMenu: true,
    icon: faClock,
  },
  {
    name: "Viva Exam Results",
    component: <VivaExamResults />,
    role: "pc",
    path: "/vivaexamresults",
    mainMenu: true,
    icon: faBookReader,
  },
];
