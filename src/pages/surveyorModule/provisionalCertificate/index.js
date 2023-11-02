import React, { useState, useEffect, useReducer, useCallback } from "react";
import Container from "react-bootstrap/Container";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import SuccessModal from "../../../components/successModal";
import InspectionView from "./components/inspectionView";
import ApprovalForm from "./components/surveyorCertificate";
import SecondModal from "./components/applicationform";
import ThirdModal from "./components/certificateOfSurvey";
import ProvisionalCertificate  from "./components/provisionalCertificateView"
import "./style.scss";
// import ApprovalForm from "./components/applicationform";

const Index = () => {
  const [show, setShow] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [viewModal1, setViewModal1] = useState(false);
  const [viewModal2, setViewModal2] = useState(false);
  
  const [message, setMessage] = useState("");
  const [showSuccess, setSuccessModal] = useState(false);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const handleClose = () => setShow(false);
  const handleCloseCertificate = () => setShowCertificate(false);

  const ActionType = {
    UPDATE_FORM1_DETAILS: "UPDATE_FORM1_DETAILS",
    UPDATE_FORM2_DETAILS: "UPDATE_FORM2_DETAILS",
  };
  function reducer(state, action) {
    switch (action.type) {
      case ActionType.UPDATE_FORM1_DETAILS: {
        return {
          ...state,
          form1Details: action.payload,
        };
      }
      case ActionType.UPDATE_FORM2_DETAILS: {
        return {
          ...state,
          form2Details: action.payload,
        };
      }
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  const initialState = {
    form1Details: {},
    form2Details: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to open the first modal
  const openModal1 = () => {
    setShowModal1(true);
  };

  // Function to close the first modal and open the second modal
  const openModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };
  const openModal3 = () => {
    setShowModal2(false);
    setShowModal3(true);
  };

  // Function to close the second modal
  const closeModals = () => {
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
  };
  const backToSecond =()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowModal2(true);
    setShowModal3(false);
  
  }
  const openViewModal1 = () => {
    setViewModal1(true);
  };
  const openViewModal2 = () => {
    setViewModal1(false);
    setViewModal2(true);
  };
  const closeViewModal1 = () => {
    setViewModal1(false);
    setViewModal2(false);
  
  };

  const handleUpdateForm = (data, type) => {
    dispatch({ type: type, payload: data });
  };

  const tableColumns = [
    { heading: "Sl.No.", value: "id", type: "row" },
    { heading: "Reference Number", value: "ref_num", type: "row" },
    { heading: "Vessel Name", value: "v_name", type: "row" },
    { heading: "Date of Submission", value: "sub_date", type: "date" },
    { heading: "Status", value: "status", type: "row", statusValueCheck: true },
    {
      heading: "Action",
      value: "status",
      type: "button",
      label: "View",
      className: "btn-view",
      onClick: openViewModal1,
      statusCheckVieworEdit: true,
        },
  ];

  useEffect(() => {
    newFunction();
  }, []);

  function newFunction() {
    let data = [
      {
        id: 1,
        ref_num: "123/45",
        ovn: "101/23",
        sub_date: "01-08-2023",
        v_name: "Name Displayed",
        status: "issued",
      },
      {
        id: 2,
        ref_num: "123/45",
        ovn: "101/23",
        sub_date: "01-08-2023",
        v_name: "Name Displayed",
        status: "Pending",
      },
      {
        id: 3,
        ref_num: "123/45",
        ovn: "101/23",
        sub_date: "01-08-2023",
        v_name: "Name Displayed",
        status: "draft",
      },
    ];
    setDataTable(data);
  }
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Container>
      {showSuccess && (
        <SuccessModal
          show={showSuccess}
          message={message}
          handleClose={() => setSuccessModal(false)}
        />
      )}
      {showModal1 && (
        <InspectionView
          show={showModal1}
          handleOnClick={() => {
            openModal2();
          }}
          handleClose={closeModals}
        />
      )}
      {showModal2 && (
        <SecondModal
          show={showModal2}
         openModal3={openModal3}
          handleClose={closeModals}
          ActionType={ActionType}
          state={state.form1Details}
          handleUpdateForm={handleUpdateForm}
        />
      )}
      {showModal3 && (
        <ThirdModal
          show={showModal3}
          handleClose={closeModals}
          ActionType={ActionType}
          state={state.form2Details}
          handleUpdateForm={handleUpdateForm}
          backToSecond={backToSecond}
        />
      )}

      {viewModal1 && (
        <ApprovalForm
          show={viewModal1}
          handleOnClick={openViewModal2}
          handleClose={closeViewModal1}
        />
      )}
       {viewModal2 && (
        <ProvisionalCertificate
          show={viewModal2}
          // handleOnClick={openViewModal2}
          handleClose={closeViewModal1}
        />
      )}
     
      <h2>Provisional Certificate of Survey</h2>

      <div className="card">
        <div className="container card-container">
          <div className="row">
            <div className="col-md-3">
              <SelectBox
                id="purpose"
                name="purpose"
                className="select"
                label={"Survey"}
                labelHide={"true"}
                options={options}
              />
            </div>
            <div className="col-md-3">
              <TableSearch style={{ marginTop: "8px" }} />
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="text-box">
                <Button
                  label={"Provisional Certificate"}
                  onClick={openModal1}
                  className="add-new-btn"
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Table data={dataTable} column={tableColumns} page="" />
        </div>
      </div>
    </Container>
  );
};

export default Index;
