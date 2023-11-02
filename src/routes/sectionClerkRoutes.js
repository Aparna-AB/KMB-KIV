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
  faAddressCard,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Dashboard = React.lazy(() =>
  import("../pages/sectionClerkModule/dashboard")
);
const Survey = React.lazy(() =>
  import("../pages/sectionClerkModule/Survey")
);
const Registration = React.lazy(() =>
  import("../pages/sectionClerkModule/registration")
);
const Examination = React.lazy(() =>
import("../pages/sectionClerkModule/Examination")
);
const WrittenExamSchedule = React.lazy(() =>
  import("../pages/sectionClerkModule/writtenExamSchedule")
);
const WrittenExamResults = React.lazy(() =>
  import("../pages/sectionClerkModule/writtenExamResults")
);
const VivaExamSchedule = React.lazy(() =>
  import("../pages/sectionClerkModule/vivaExamSchedule")
);
const VivaExamResults = React.lazy(() =>
  import("../pages/sectionClerkModule/vivaExamResults")
);

export const sectionClerkRoutes = [
  {
    name: "Dashboard",
    component: <Dashboard />,
    role: "sectionClerk",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },
  {
    name: "Survey",
    component: <Survey />,
    role: "sectionClerk",
    path: "/Survey",
    mainMenu: true,
    icon: faCertificate,
  },
  {
    name: "Registration",
    component: <Registration />,
    role: "sectionClerk",
    path: "/registration",
    mainMenu: true,
    icon: faAddressCard,
  },
  {
    name: "Examination",
    icon: faBook,
    subMenuHead: true,    
    childrens: [
      {
        name: "Certificate of Competency",
        component: <Examination />,
        role: "sectionClerk",
        path: "/Examination",
      },
      {
        name: "Written Exam Schedule",
        component: <WrittenExamSchedule />,
        role: "sectionClerk",
        path: "/writtenexamschedule",
      },
      {
        name: "Written Exam Results",
        component: <WrittenExamResults />,
        role: "sectionClerk",
        path: "/writtenexamresults",
      },
      {
        name: "Viva Exam Schedule",
        component: <VivaExamSchedule />,
        role: "sectionClerk",
        path: "/vivaexamschedule",
      },
      {
        name: "Viva Exam Results",
        component: <VivaExamResults />,
        role: "sectionClerk",
        path: "/vivaexamresults",
      },
    ],
  },
  {
    name: "Certificate of Competency",
    component: <Examination />,
    role: "sectionClerk",
    path: "/Examination",
  },
  {
    name: "Written Exam Schedule",
    component: <WrittenExamSchedule />,
    role: "sectionClerk",
    path: "/writtenexamschedule",
  },
  {
    name: "Written Exam Results",
    component: <WrittenExamResults />,
    role: "sectionClerk",
    path: "/writtenexamresults",
  },
  {
    name: "Viva Exam Schedule",
    component: <VivaExamSchedule />,
    role: "sectionClerk",
    path: "/vivaexamschedule",
  },
  {
    name: "Viva Exam Results",
    component: <VivaExamResults />,
    role: "sectionClerk",
    path: "/vivaexamresults",
  },
  
];
