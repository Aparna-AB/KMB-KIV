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
  import("../pages/surveyorModule/dashboard")
);
const Survey = React.lazy(() =>
  import("../pages/surveyorModule/surveyor_survey")
);
const Declaration = React.lazy(() =>
  import("../pages/surveyorModule/Declaration")
);
const ProvisionalCertificate = React.lazy(() =>
  import("../pages/surveyorModule/provisionalCertificate")
);

const CarvingandMarkingNote = React.lazy(() =>
  import("../pages/surveyorModule/carving&markingNote")
);

const Vessel = React.lazy(() =>
  import("../pages/surveyorModule/vesselNameChange")
);

const Registration_Alteration = React.lazy(() =>
  import("../pages/surveyorModule/registrationAlteration")
);

export const surveyorRoutes = [
  {
    name: "Dashboard",
    component: <Dashboard />,
    role: "sureyor",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },
  {
    name: "Surveyor",
    icon: faBook,
    subMenuHead: true,    
    childrens: [
      {
        name: "Survey Application",
        component: <Survey />,
    role: "Surveyor",
    path: "/surveyor_survey",
      },
      {
        name: "Declaration Form",
        component: <Declaration />,
    role: "Surveyor",
    path: "/Sur_declarationForm",
      },
      {
        name: "Provisional Certificate",
            component: <ProvisionalCertificate />,
        role: "Surveyor",
        path: "/Sur_provisionalCertificate",
       
      },
      
    ]
   
  },
  {
    name: "Survey Application",
    component: <Survey />,
role: "Surveyor",
path: "/surveyor_survey",
  },
  {
    name: "Declaration Form",
    component: <Declaration />,
    role: "Surveyor",
    path: "/Sur_declarationForm",
  },
  {
    name: "Provisional Certificate",
    component: <ProvisionalCertificate />,
role: "Surveyor",
path: "/Sur_provisionalCertificate",
  },
  {
    name: "Registration",
    icon: faBook,
    subMenuHead: true,    
    childrens: [
      {
        name: "Carving & Marking Note",
        component: <CarvingandMarkingNote />,
    role: "Surveyor",
    path: "/Sur_CarvingandMarkingNote",
      },
      {
        name: "Registration of Alteration",
        component: <Registration_Alteration />,
    role: "Surveyor",
    path: "/registrationAlteration",
      },
    ]
    },
    {
      name: "Carving & Marking Note",
      component: <CarvingandMarkingNote />,
  role: "Surveyor",
  path: "/Sur_CarvingandMarkingNote",
    },
    {
      name: "Registration of Alteration",
      component: <Registration_Alteration />,
  role: "Surveyor",
  path: "/registrationAlteration",
    },



  {
    name: "Vessels",
    icon: faBook,
    subMenuHead: true,    
    childrens: [
      {
        name: "Vessels Name Change",
        component: <Vessel />,
    role: "Surveyor",
    path: "/Sur_vesselNameChange",
      },
    ]
  },
  {
    name: "Vessels Name Change",
    component: <Vessel />,
role: "Surveyor",
path: "/Sur_vesselNameChange",
  },
  
  
];
