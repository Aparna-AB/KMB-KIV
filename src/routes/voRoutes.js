import React from "react";
import {
  faDashboard,
  faCalendarDays,
  faClipboardList,
  faFileAlt,
  faUserPen,
  faShip,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = React.lazy(() => import("../pages/vesselOwner/dashboard"));
const SurveyApplication = React.lazy(() =>
  import("../pages/vesselOwner/surveyAppllication")
);
const DeclarationForm = React.lazy(() =>
  import("../pages/vesselOwner/declarationForm")
);
const ProvitionalCertificate = React.lazy(() =>
  import("../pages/vesselOwner/provisionalCertificate")
);
const Registration = React.lazy(() =>
  import("../pages/vesselOwner/registration")
);
const CertificateOfApplication = React.lazy(() =>
  import("../pages/vesselOwner/certificateOfApplication")
);
const RegProvitionalCertificate = React.lazy(() =>
  import("../pages/vesselOwner/regProvisionalCertificate")
);
const Inspection = React.lazy(() => import("../pages/vesselOwner/inspection"));
const CarvingMaking = React.lazy(() =>
  import("../pages/vesselOwner/carvingAndMaking")
);
const RegistrationAlteration = React.lazy(() =>
  import("../pages/vesselOwner/registrationAlteration")
);
const TransferofRegistry = React.lazy(() =>
  import("../pages/vesselOwner/transferofRegistry")
);
const VesselNameChange = React.lazy(() =>
  import("../pages/vesselOwner/vesselNameChange")
);

export const voRoutes = [
  {
    name: "VO Dashboard",
    component: <Dashboard />,
    role: "pc",
    path: "/",
    mainMenu: true,
    className: "active",
    icon: faDashboard,
  },
  {
    name: "Survey",
    icon: faClipboardList,
    subMenuHead: true,
    childrens: [
      {
        name: "Survey Application",
        component: <SurveyApplication />,
        role: "pc",
        path: "/voSurveyApplication",
      },
      {
        name: "Declaration Form",
        component: <DeclarationForm />,
        role: "pc",
        path: "/voDeclarationForm",
      },
      {
        name: "Provitional Certificate",
        component: <ProvitionalCertificate />,
        role: "pc",
        path: "/VoProvitionalCertificate",
      },
      {
        name: "Certificate Of Survey",
        component: <CertificateOfApplication />,
        role: "pc",
        path: "/certificateOfSurvey",
      },
    ],
  },
  {
    name: "Survey Application",
    component: <SurveyApplication />,
    role: "pc",
    path: "/voSurveyApplication",
  },
  {
    name: "Declaration Form",
    component: <DeclarationForm />,
    role: "pc",
    path: "/voDeclarationForm",
  },
  {
    name: "Provitional Certificate",
    component: <ProvitionalCertificate />,
    role: "pc",
    path: "/VoProvitionalCertificate",
  },
  {
    name: "Certificate Of Survey",
    component: <CertificateOfApplication />,
    role: "pc",
    path: "/certificateOfSurvey",
  },

  {
    name: "Registration",
    icon: faAddressCard,
    subMenuHead: true,
    childrens: [
      {
        name: "Registartion Application",
        component: <Registration />,
        role: "pc",
        path: "/voRegistration",
      },
      {
        name: "Provisional Certificate",
        component: <RegProvitionalCertificate />,
        role: "pc",
        path: "/regProvisionalCertificate",
      },
      {
        name: "Registration of Alteration",
        component: <RegistrationAlteration />,
        role: "pc",
        path: "/registartionalteration",
      },
      {
        name: "Transfer of Registry",
        component: <TransferofRegistry />,
        role: "pc",
        path: "/transferofRegistry",
      },
      {
        name: "Inspection",
        component: <Inspection />,
        role: "pc",
        path: "/voInspection",
      },
      {
        name: "Carving & Making Note",
        component: <CarvingMaking />,
        role: "pc",
        path: "/voCarvingAndMaking",
      },
    ],
  },
  {
    name: "Provisional Certificate",
    component: <RegProvitionalCertificate />,
    role: "pc",
    path: "/regProvisionalCertificate",
  },
  {
    name: "Registartion Application",
    component: <Registration />,
    role: "pc",
    path: "/voRegistration",
  },
  {
    name: "Inspection",
    component: <Inspection />,
    role: "pc",
    path: "/voInspection",
  },
  {
    name: "Carving & Making Note",
    component: <CarvingMaking />,
    role: "pc",
    path: "/voCarvingAndMaking",
  },
  {
    name: "Registration of Alteration",
    component: <RegistrationAlteration />,
    role: "pc",
    path: "/registartionalteration",
  },
  {
    name: "Transfer of Registry",
    component: <TransferofRegistry />,
    role: "pc",
    path: "/transferofRegistry",
  },
  {
    name: "Vessels",
    icon: faShip,
    subMenuHead: true,
    childrens: [
      {
        name: "Vessel Name Change",
        component: <VesselNameChange />,
        role: "pc",
        path: "/vesselnamechange",
      },
    ],
  },
  {
    name: "Vessel Name Change",
    component: <VesselNameChange />,
    role: "pc",
    path: "/vesselnamechange",
  },
];
