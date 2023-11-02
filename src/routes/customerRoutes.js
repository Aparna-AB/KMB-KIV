import React from "react";
import {
  faEnvelope,
  faUserTie,
  faCalendarDays,
  faCheckToSlot,
  faChartSimple,
  faFile,
  faAddressCard,
  faGear,
  faLaptopFile,
  faHistory,
  faListSquares,
  faLayerGroup,
  faSearchPlus,
  faCalendarPlus,
  faBusinessTime,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

const CustomerRegistration = React.lazy(() =>
  import("../pages/customer/registration/index")
);

const SpotRegistration = React.lazy(() =>
  import("../pages/customer/spotRegistration/")
);
const SpotOTP = React.lazy(() =>
  import("../pages/customer/spotRegistration/otp")
);
const Login = React.lazy(() => import("../pages/login"));
const CustomerDashboard = React.lazy(() =>
  import("../pages/customer/dashboard")
);
const ZoneBookingStatus = React.lazy(() =>
  import("../pages/customer/zoneBookingStatus")
);

const SandBookingHistory = React.lazy(() =>
  import("../pages/customer/sandBookingHistory")
);

const SpotBookingInstructions = React.lazy(() =>
  import("../pages/customer/spotBookingInstructions")
);
const PermitRequest = React.lazy(() =>
  import("../pages/customer/permitRequest")
);

const SuccessMessage = React.lazy(() =>
  import("../pages/customer/spotBookingInstructions/successMessage")
);
const SandBooking = React.lazy(() => import("../pages/customer/sandBooking"));

const SandIssueChange = React.lazy(() =>
  import("../pages/customer/dateChange")
);

export const authRoutes = [
  {
    name: "CustomerRegistration",
    component: <CustomerRegistration />,
    role: "customer",
    path: "/CustomerRegistration",
    mainMenu: true,
    icon: faAddressCard,
  },
  {
    name: "spotregistration",
    component: <SpotRegistration />,
    role: "customer",
    path: "/spotregistration",
    mainMenu: true,
    icon: faAddressCard,
  },
  {
    name: "spototp",
    mainMenu: true,
    icon: faAddressCard,
    component: <SpotOTP />,
    role: "customer",
    path: "/otp",
  },
];

export const customerRoutes = [
  {
    name: "Sand Booking History",
    component: <SandBookingHistory />,
    role: "customer",
    path: "/",
    mainMenu: true,
    icon: faHistory,
  },
  {
    name: "customerDashBoard",
    component: <CustomerDashboard />,
    role: "customer",
    path: "/customerDashBoard",
  },
  {
    name: "Zone Booking Status ",
    component: <ZoneBookingStatus />,
    role: "customer",
    path: "/zoneBookingStatus",
    mainMenu: true,
    icon: faSearchPlus,
  },

  {
    name: "Sand Booking",
    component: <SandBooking />,
    role: "pc",
    path: "/sandbooking",
    mainMenu: true,
    icon: faMoneyCheck,
  },
  {
    name: "Permit Request",
    component: <PermitRequest />,
    role: "pc",
    path: "/secondreg",
    mainMenu: true,
    icon: faLayerGroup,
  },

  {
    name: "Request to change date of Sand Issue",
    component: <SandIssueChange />,
    role: "pc",
    path: "/dateChange",
    mainMenu: true,
    icon: faLayerGroup,
  },

  {
    name: "successMessage",
    component: <SuccessMessage />,
    role: "customer",
    path: "/successMessage",
  },
];
