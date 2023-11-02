import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import SuccessModal from "../../../components/successModal";
import ApplicationForm from "./components/applicationform";
import TransferofRegistry from "./components/applicationformView";
import "./style.scss";

const Index = () => {
  const [show, setShow] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const handleClose = () => setShow(false);
  const handleCloseCertificate = () => setShowCertificate(false);

  const handleViewClick = () => {
    setShowCertificate(true);
  };
  const handleOnClick = (item) => {
    setShow(true);
  };
  const [message, setMessage] = useState("");
  const [showSuccess, setSuccessModal] = useState(false);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const tableColumns = [
    { heading: "Sl.No.", value: "id", type: "row" },
    { heading: "Reference Number", value: "ref_num", type: "row" },
    { heading: "Official Vessel Number", value: "ovn", type: "row" },
    { heading: "Vessel Name", value: "v_name", type: "row" },
    {
      heading: "Date of Submission",
      value: "sub_date",
      type: "date",
      dateOnly: true,
    },
    { heading: "Status", value: "status", type: "row", statusValueCheck: true },
    {
      heading: "Action",
      value: "status",
      type: "button",
      label: "View",
      className: "btn-view",
      onClick: handleViewClick,
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
        status: "Approved",
      },
      {
        id: 2,
        ref_num: "123/45",
        ovn: "101/23",
        sub_date: "01-08-2023",
        v_name: "Name Displayed",
        status: "underprocessing",
      },
      {
        id: 3,
        ref_num: "123/45",
        ovn: "101/23",
        sub_date: "01-08-2023",
        v_name: "Name Displayed",
        status: "draft",
      },
      {
        id: 4,
        ref_num: "123/45",
        ovn: "101/23",
        sub_date: "01-08-2023",
        v_name: "Name Displayed",
        status: "Rejected",
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
      {show && <ApplicationForm show={show} handleClose={handleClose} />}
      {showCertificate && (
        <TransferofRegistry
          show={showCertificate}
          handleClose={handleCloseCertificate}
        />
      )}
      <h2>Vessel Name Change</h2>

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
                  label={"Application"}
                  onClick={handleOnClick}
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
