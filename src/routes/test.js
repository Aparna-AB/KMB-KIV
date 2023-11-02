import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));

//customer

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

const SuccessMessage = React.lazy(() =>
  import("../pages/customer/spotBookingInstructions/successMessage")
);

//port conservator

const CustomerRegApproval = React.lazy(() =>
  import("../pages/portConservator/customerRegApproval")
);

const SandBooking = React.lazy(() => import("../pages/customer/sandBooking"));

const NormalBookingApproval = React.lazy(() =>
  import("../pages/portConservator/normalBookingApproval")
);

const SpotBookingApproval = React.lazy(() =>
  import("../pages/portConservator/spotBookingApproval")
);

const Zone = React.lazy(() => import("../pages/portConservator/zone"));

const LSGD = React.lazy(() => import("../pages/portConservator/LSGD"));

const Quantity = React.lazy(() => import("../pages/portConservator/quantity"));

const Bank = React.lazy(() => import("../pages/portConservator/bank"));

const Canoe = React.lazy(() => import("../pages/portConservator/canoe"));

const Dashboard = React.lazy(() =>
  import("../pages/portConservator/dashboard")
);

//sand issue verification and details

const SandIssueVerification = React.lazy(() =>
  import("../pages/zoneOperator/sandIssueVerification")
);

const SandIssueVerificationForm = React.lazy(() =>
  import(
    "../pages/zoneOperator/sandIssueVerification/components/sandIssueVerificationForm"
  )
);

const SandIssueVerifyDetails = React.lazy(() =>
  import(
    "../pages/zoneOperator/sandIssueVerification/components/sandIssueVerifyDetails"
  )
);

const SpotSandIssueVerification = React.lazy(() =>
  import(
    "../pages/zoneOperator/spotBookingApproval/components/spotSandIssueVerification"
  )
);

const SpotSandIssueDetails = React.lazy(() =>
  import(
    "../pages/zoneOperator/spotBookingApproval/components/spotSandIssueDetails"
  )
);

const AssignZone = React.lazy(() =>
  import("../pages/portConservator/assignZone")
);

const AssignSection = React.lazy(() =>
  import("../pages/portConservator/assignSection")
);

const UpdateSaleQuantity = React.lazy(() =>
  import("../pages/portConservator/updateSaleQuantity")
);

const SpotBookingMaster = React.lazy(() =>
  import("../pages/portConservator/spotBookingMasterData")
);

const SpotBookingSearch = React.lazy(() =>
  import(
    "../pages/portConservator/spotBookingMasterData/components/bookingSearch"
  )
);

const SpotBookingList = React.lazy(() =>
  import(
    "../pages/portConservator/spotBookingMasterData/components/spotBookingList"
  )
);

const AssignSpotZone = React.lazy(() =>
  import(
    "../pages/portConservator/spotBookingMasterData/components/assignSpotZone"
  )
);

const TonLimit = React.lazy(() =>
  import("../pages/portConservator/spotBookingMasterData/components/TonLimit")
);

const Lorry = React.lazy(() => import("../pages/portConservator/lorry"));

const AssignLorry = React.lazy(() =>
  import("../pages/portConservator/lorry/components/assignLorryDashboard")
);

const LorryList = React.lazy(() =>
  import("../pages/portConservator/lorry/components/lorryList")
);

const LorryDetails = React.lazy(() =>
  import("../pages/portConservator/lorry/components/lorryDetails")
);

const SecondRegistrationView = React.lazy(() =>
  import("../pages/portConservator/secondRegistrationView")
);

const SecondRegistrationRejectionView = React.lazy(() =>
  import("../pages/portConservator/secondRegistrationRejectedList")
);

const ChangeAllottedDate = React.lazy(() =>
  import("../pages/portConservator/changeAllottedDate")
);

const ZoneWiseWorkerDetails = React.lazy(() =>
  import("../pages/portConservator/zoneWiseWorkerDetails")
);

const PCSearchBooking = React.lazy(() =>
  import("../pages/portConservator/searchBooking")
);

const Report = React.lazy(() => import("../pages/portConservator/report"));

const PCSaleReport = React.lazy(() =>
  import("../pages/portConservator/report/components/saleReport")
);

const MonthlyPermit = React.lazy(() =>
  import("../pages/portConservator/monthlyPermit")
);

const PCSandBooking = React.lazy(() =>
  import("../pages/portConservator/sandBooking")
);

const PCHoliday = React.lazy(() =>
  import("../pages/portConservator/holidaySettings")
);

const PCchangeAllottedDate = React.lazy(() =>
  import("../pages/portConservator/pcChangeAllottedDate")
);

const ZoneStatus = React.lazy(() =>
  import("../pages/portConservator/zoneStatus")
);

const SandPassReprint = React.lazy(() =>
  import("../pages/portConservator/sandPassReprint")
);

//zone operator

const ZoneOperatorNormalApproval = React.lazy(() =>
  import("../pages/zoneOperator/normalBookingApproval/")
);

const ZoneOperatorSpotApproval = React.lazy(() =>
  import("../pages/zoneOperator/spotBookingApproval/")
);

const ZoneDashboard = React.lazy(() =>
  import("../pages/zoneOperator/dashboard")
);

const SandIssueReprint = React.lazy(() =>
  import("../pages/zoneOperator/sandIssueReprint")
);

const ZoneLorryDetails = React.lazy(() =>
  import("../pages/zoneOperator/viewLorryDetails")
);

const VehiclePassDetails = React.lazy(() =>
  import("../pages/zoneOperator/viewPassDetails")
);

const ZoneViewSalereport = React.lazy(() =>
  import("../pages/zoneOperator/viewSaleReport")
);

const ZoneViewSalereportSpotbooking = React.lazy(() =>
  import("../pages/zoneOperator/viewSaleReport(sportbooking)")
);

/** Code by Akhil */

const ZonePass = React.lazy(() =>
  import("../pages/zoneOperator/sandPassDetails")
);

/**------end here------ */

const ZoneSandIssueVerification = React.lazy(() =>
  import("../pages/zoneOperator/sandIssueVerification")
);

//user management

const UserManagement = React.lazy(() =>
  import("../pages/portConservator/userManagement")
);

const CreatePortUser = React.lazy(() =>
  import(
    "../pages/portConservator/userManagement/components/userManagementHome"
  )
);

const ChangeCustomerNo = React.lazy(() =>
  import("../pages/portConservator/userManagement/components/changeCustomerNo")
);

const BlockedUsers = React.lazy(() =>
  import("../pages/portConservator/userManagement/components/blockedUsers")
);

//LSGD routes

const LsgdDashboard = React.lazy(() => import("../pages/LSGD/dashboard"));

const Monthlypermit = React.lazy(() => import("../pages/LSGD/monthlyPermit"));

const LorryRegistration = React.lazy(() =>
  import("../pages/LSGD/lorryRegistration")
);

const WorkersRegistration = React.lazy(() =>
  import("../pages/LSGD/workersRegistration")
);

const SaleReport = React.lazy(() => import("../pages/LSGD/viewSalereport"));

const SalereportSpotbooking = React.lazy(() =>
  import("../pages/LSGD/viewSalereport(sportbookin)")
);

export default function Routers() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="dashboard" element={<Home />} />

          <Route
            path="customerregistration"
            element={<CustomerRegistration />}
          />

          <Route path="spotregistration" element={<SpotRegistration />} />

          <Route path="spototp" element={<SpotOTP />} />

          <Route
            path="/customerRegApproval"
            element={<CustomerRegApproval />}
          />

          <Route path="/sandbooking" element={<SandBooking />} />

          <Route
            path="/spotBookingInstructions"
            element={<SpotBookingInstructions />}
          />

          <Route path="/successMessage" element={<SuccessMessage />} />

          <Route
            path="sandIssueVerification"
            element={<SandIssueVerification />}
          />

          <Route
            path="sandIssueVerificationform"
            element={<SandIssueVerificationForm />}
          />

          <Route
            path="sandIssueVerifyDetails"
            element={<SandIssueVerifyDetails />}
          />

          <Route
            path="spotSandIssueVerification"
            element={<SpotSandIssueVerification />}
          />

          <Route
            path="/spotSandIssueDetails"
            element={<SpotSandIssueDetails />}
          />

          <Route
            path="/customerBookingApproval"
            element={<NormalBookingApproval />}
          />

          <Route
            path="/spotBookingApproval"
            element={<SpotBookingApproval />}
          />

          {/* zone */}

          <Route
            path="/zoneOperatorNormalApproval"
            element={<ZoneOperatorNormalApproval />}
          />

          <Route
            path="/zoneOperatorSpotApproval"
            element={<ZoneOperatorSpotApproval />}
          />

          <Route path="/ZoneDashboard" element={<ZoneDashboard />} />

          <Route path="/zoneSandReprint" element={<SandIssueReprint />} />

          <Route path="/zoneLorryDetails" element={<ZoneLorryDetails />} />

          <Route path="/vehiclePassDetails" element={<VehiclePassDetails />} />

          <Route path="/zoneSaleReport" element={<ZoneViewSalereport />} />

          <Route
            path="/zoneSaleReportSpot"
            element={<ZoneViewSalereportSpotbooking />}
          />

          <Route path="/zone" element={<Zone />} />

          <Route path="/LSGD" element={<LSGD />} />

          <Route path="/quantity" element={<Quantity />} />

          <Route path="/bank" element={<Bank />} />

          <Route path="/canoe" element={<Canoe />} />

          <Route path="/lorry" element={<Lorry />} />

          <Route path="/assignLorry" element={<AssignLorry />} />

          <Route path="/lorryList" element={<LorryList />} />

          <Route path="/lorryDetails" element={<LorryDetails />} />

          <Route path="/userManagement" element={<UserManagement />} />

          <Route path="/createPortUser" element={<CreatePortUser />} />

          <Route path="/changeCustomerNo" element={<ChangeCustomerNo />} />

          <Route path="/blockedUsers" element={<BlockedUsers />} />

          <Route path="/PCDashboard" element={<Dashboard />} />

          <Route path="/ZoneDashboard" element={<ZoneDashboard />} />

          <Route
            path="/zoneSandIssueVerification"
            element={<ZoneSandIssueVerification />}
          />

          <Route path="/assignZone" element={<AssignZone />} />

          <Route path="/assignSection" element={<AssignSection />} />

          <Route path="/updateSaleQuantity" element={<UpdateSaleQuantity />} />

          <Route path="/spotBookingMaster" element={<SpotBookingMaster />} />

          <Route path="/spotBookingSearch" element={<SpotBookingSearch />} />

          <Route path="/spotBookingList" element={<SpotBookingList />} />

          <Route path="/assignSpotZone" element={<AssignSpotZone />} />

          <Route path="/tonLimit" element={<TonLimit />} />

          <Route path="/lorry" element={<Lorry />} />

          <Route path="/assignLorry" element={<AssignLorry />} />

          <Route path="/lorryList" element={<LorryList />} />

          <Route path="/lorryDetails" element={<LorryDetails />} />

          <Route path="/sand-pass" element={<ZonePass />} />

          <Route
            path="/secondRegistrationView"
            element={<SecondRegistrationView />}
          />

          <Route
            path="/secondRegistrationRejectView"
            element={<SecondRegistrationRejectionView />}
          />

          <Route
            path="/zoneWiseWorkerDetails"
            element={<ZoneWiseWorkerDetails />}
          />

          <Route path="/PCSearchBooking" element={<PCSearchBooking />} />

          <Route path="/PCReport" element={<Report />} />

          <Route path="/PCSaleReport" element={<PCSaleReport />} />

          <Route path="/monthlyPermit" element={<MonthlyPermit />} />

          <Route path="/sandPassReprint" element={<SandPassReprint />} />

          <Route path="/pcSandbooking" element={<PCSandBooking />} />

          <Route path="/pcholiday" element={<PCHoliday />} />

          <Route path="/zoneStatus" element={<ZoneStatus />} />

          <Route path="/changeAllottedDate" element={<ChangeAllottedDate />} />

          <Route
            path="/pcchangeAllottedDate"
            element={<PCchangeAllottedDate />}
          />

          {/* lsgd Routes */}

          <Route path="/lsgdDashboard" element={<LsgdDashboard />} />

          <Route path="/lsgdMonthlyPermit" element={<Monthlypermit />} />

          <Route
            path="/lsgdLorryRegistration"
            element={<LorryRegistration />}
          />

          <Route
            path="/lsgdWorkerRegistration"
            element={<WorkersRegistration />}
          />

          <Route path="/lsgdSaleReport" element={<SaleReport />} />

          <Route
            path="/lsgdSaleReportSpotRegister"
            element={<SalereportSpotbooking />}
          />

          {/* Customer Dashboard */}

          <Route path="/customerDashBoard" element={<CustomerDashboard />} />

          <Route path="/zoneBookingStatus" element={<ZoneBookingStatus />} />

          <Route path="/sandBookingHistory" element={<SandBookingHistory />} />
        </Routes>
      </Suspense>
    </div>
  );
}
