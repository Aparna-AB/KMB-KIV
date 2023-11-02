import React from "react";
import {
  faAddressCard,
  faLocationDot,
  faMoneyCheckDollar,
  faShip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";



const CreateUser = React.lazy(() =>
  import("../pages/adminModule/createUser")
);

export const adminRoutes = [
  {
    name: "DashBoard",
    // component: <AdminDashboard />,
    role: "admin",
    path: "/adminDashboard",
    // mainMenu: true,
    icon: faAddressCard,
  },
  {
    name: "Manage User ",
    component: <CreateUser />,
    role: "admin",
    path: "/createuser",
    mainMenu: true,
    icon: faUsers,
  },
 ];
