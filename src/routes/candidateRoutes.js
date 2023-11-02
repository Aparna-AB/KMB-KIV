import React from "react";
import {
  faDashboard,
  faFile,
  faRectangleList,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";

const WrittenExamSchedule = React.lazy(() =>
  import("../pages/candidate/Examinations/examSchedule")
);
const WrittenExamResult = React.lazy(() =>
  import("../pages/candidate/Examinations/examResult")
);
const VivaExamSchedule = React.lazy(() =>
  import("../pages/candidate/Examinations/vivaExam")
);
const VivaExamResult = React.lazy(() =>
  import("../pages/candidate/Examinations/vivaResult")
);

const SurveyApplication = React.lazy(() =>
  import("../pages/portConservator/surveyAppllication")
);
const MasterClass1 = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass1")
);
const MasterClass2 = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass2")
);
const MasterClass3 = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass3")
);
const MasterClass3Lascars = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass3Lascars")
);
const MasterClass3RatingRoute = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass3RatingRoute")
);
const MasterClass3CadetRoute = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass3CadetRoute")
);
const Engineer = React.lazy(() =>
  import("../pages/candidate/Applications/engineer")
);
const EngineDriverClass1 = React.lazy(() =>
  import("../pages/candidate/Applications/engineDriverClass1")
);
const EngineDriverClass2 = React.lazy(() =>
  import("../pages/candidate/Applications/engineDriverClass2")
);
const GeneralRatingRoute = React.lazy(() =>
  import("../pages/candidate/Applications/generalRatingRoute")
);
const MainClassOne = React.lazy(() =>
  import("../pages/candidate/Applications/masterClass1")
);

export const candidateRoutes = [
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
    name: "Examinations",
    // component: <WrittenExamSchedule />,
    role: "pc",
    // path: "/candidateExamSchedule",

    icon: faSquarePen,
    subMenuHead: true,
    childrens: [
      {
        name: "Written Exam Schedule",
        component: <WrittenExamSchedule />,
        role: "pc",
        path: "/candidateExamSchedule",
      },
      {
        name: "Written Exam Result",
        component: <WrittenExamResult />,
        role: "pc",
        path: "/candidateExamResult",
      },
      {
        name: "Viva Exam Schedule",
        component: <VivaExamSchedule />,
        role: "pc",
        path: "/candidateVivaExam",
      },
      {
        name: "Viva Exam Result",
        component: <VivaExamResult />,
        role: "pc",
        path: "/candidateVivaResult",
      },
    ],
  },
  {
    name: "Written Exam Result",
    component: <WrittenExamResult />,
    role: "pc",
    path: "/candidateExamResult",
  },
  {
    name: "Viva Exam Schedule",
    component: <VivaExamSchedule />,
    role: "pc",
    path: "/candidateVivaExam",
  },
  {
    name: "Viva Exam Result",
    component: <VivaExamResult />,
    role: "pc",
    path: "/candidateVivaResult",
  },

  {
    name: "Applications",
    component: <WrittenExamSchedule />,
    role: "pc",
    path: "/candidateExamSchedule",
    icon: faRectangleList,
    subMenuHead: true,
    childrens: [
      {
        name: "Main Class One ",
        component: <MainClassOne />,
        role: "pc",
        path: "/mainclassOne",
      },
      {
        name: "Master Class 1",
        component: <MasterClass1 />,
        role: "pc",
        path: "/candidateMasterclass1",
      },
      {
        name: "Master Class 2",
        component: <MasterClass2 />,
        role: "pc",
        path: "/candidateMasterclass2",
      },
      {
        name: "Master Class 3",
        component: <MasterClass3 />,
        role: "pc",
        path: "/candidateMasterclass3",
      },
      {
        name: "Master Class 3 - Lascars",
        component: <MasterClass3Lascars />,
        role: "pc",
        path: "/candidateMasterclass3Lascars",
      },
      {
        name: "Master Class 3 - Rating Route",
        component: <MasterClass3RatingRoute />,
        role: "pc",
        path: "/candidateMasterclass3RatingRoute",
      },
      {
        name: "Master Class 3 - Cadet Route",
        component: <MasterClass3CadetRoute />,
        role: "pc",
        path: "/candidateMasterclass3CadetRoute",
      },
      {
        name: "Engineer",
        component: <Engineer />,
        role: "pc",
        path: "/engineer",
      },
      {
        name: "Engineer Diver Class 1",
        component: <EngineDriverClass1 />,
        role: "pc",
        path: "/enginedriverclass1",
      },
      {
        name: "Engineer Diver Class 2",
        component: <EngineDriverClass2 />,
        role: "pc",
        path: "/enginedriverclass2",
      },
      {
        name: "General Rating Route",
        component: <GeneralRatingRoute />,
        role: "pc",
        path: "/generalratingroute",
      },
    ],
  },
  {
    name: "Master Class 1",
    component: <MasterClass1 />,
    role: "pc",
    path: "/candidateMasterclass1",
  },
  {
    name: "Master Class 2",
    component: <MasterClass2 />,
    role: "pc",
    path: "/candidateMasterclass2",
  },
  {
    name: "Master Class 3",
    component: <MasterClass3 />,
    role: "pc",
    path: "/candidateMasterclass3",
  },
  {
    name: "Master Class 3 - Lascars",
    component: <MasterClass3Lascars />,
    role: "pc",
    path: "/candidateMasterclass3Lascars",
  },
  {
    name: "Master Class 3 - Rating Route",
    component: <MasterClass3RatingRoute />,
    role: "pc",
    path: "/candidateMasterclass3RatingRoute",
  },
  {
    name: "Master Class 3 - Cadet Route",
    component: <MasterClass3CadetRoute />,
    role: "pc",
    path: "/candidateMasterclass3CadetRoute",
  },
  {
    name: "Engineer",
    component: <Engineer />,
    role: "pc",
    path: "/engineer",
  },
  {
    name: "Engine Diver Class 1",
    component: <EngineDriverClass1 />,
    role: "pc",
    path: "/enginedriverclass1",
  },
  {
    name: "Engine Diver Class 2",
    component: <EngineDriverClass2 />,
    role: "pc",
    path: "/enginedriverclass2",
  },
  {
    name: "General Rating Route",
    component: <GeneralRatingRoute />,
    role: "pc",
    path: "/generalratingroute",
  },
  {
    name: "Main Class One ",
    component: <MainClassOne />,
    role: "pc",
    path: "/mainclassOne",
  },
];
