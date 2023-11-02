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

const CategoryA = React.lazy(() => import("../pages/chiefSurveyor/catagoryA/"));
const CategoryB = React.lazy(() => import("../pages/chiefSurveyor/categoryB"));
const CarvingNote=React.lazy(() => import("../pages/chiefSurveyor/carving&markingNote"));
export const chiefSurveyorRoutes = [
  {
    name: "Dashboard",
    // component: <categoryA />,
    role: "pc",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },

  {
    name: "Certificate of Survey ",
    // component: <CategoryA />,
    role: "pc",
    // path: "/catagoryA",
    subMenuHead: true,
    icon: faSquarePollVertical,
    childrens: [
      {
        name: "Category A Vessel ",
        component: <CategoryA />,
        role: "pc",
        path: "/catagoryA",
      },
      {
        name: "Category B / Category C Vessel  ",
        component: <CategoryB />,
        role: "pc",
        path: "/catagoryB",
      },
     
    ],

  }, {
    name: "Carving & Marking Note" ,
    component: <CarvingNote />,
    role: "pc",
    path: "/carvingNote",
    role: "pc",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  
  },


  {
    name: "Category A Vessel ",
    component: <CategoryA />,
    role: "pc",
    path: "/catagoryA",
  },
  {
    name: "Category B / Category C Vessel  ",
    component: <CategoryB />,
    role: "pc",
    path: "/catagoryB",
  },

];
