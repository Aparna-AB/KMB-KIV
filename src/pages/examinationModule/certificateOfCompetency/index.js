import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import ConfirmationModal from "../../../components/confirmationModal";
import { Messages } from "../../../utils/constants";
import SuccessModal from "../../../components/successModal";
import Approvalform from "./components/approvalform";
import "./style.scss";
import { dateonly } from "../../../utils/moment";

const Index = () => {
  const [show, setShow] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleViewClick = () => {
    setShow(!show);
  };

  const [message, setMessage] = useState("");
  const [showSuccess, setSuccessModal] = useState(false);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const tableColumns = [
    { heading: "Sl.No.", value: "id", type: "row" },
    { heading: "Candidate Name", value: "name", type: "row" },
    { heading: "Category", value: "category", type: "row" },
    {
      heading: "Date of Submission",
      value: "dateOfSubmission",
      type: "date",
      dateOnly: true,
    },
    { heading: "Status", value: "status", type: "row", statusValueCheck: true },
    {
      heading: "Action",
      value: "phone",
      type: "button",
      onClick: handleViewClick,
      label: "View",
    },
  ];

  useEffect(() => {
    newFunction();
  }, []);
  function newFunction() {
    let data = [
      {
        id: 1,
        name: "Leanne Graham",
        category: "Displayed Category",
        dateOfSubmission: "01-08-2023",
        status: "submitted",
      },
      {
        id: 2,
        name: "test",
        category: "Displayed Category",
        dateOfSubmission: "01-08-2023",
        status: "Under Processing",
      },
      {
        id: 3,
        name: "test3",
        category: "Displayed Category",
        dateOfSubmission: "01-08-2023",
        status: "Approved",
      },
      {
        id: 4,
        name: "test4",
        category: "Displayed Category",
        dateOfSubmission: "01-08-2023",
        status: "Rejected",
      },
    ];
    setDataTable(data);
  }
  return (
    <Container>
      {show && <Approvalform show={show} handleClose={handleClose} />}

      <div className="row">
        <div className="page-title">
          <h4>Certificate Of Competency</h4>
        </div>
      </div>

      <div className="card">
        <div className="container card-container">
          <div className="row">
            <div className="col-md-3">
              <SelectBox
                id="purpose"
                //options={"aaa","bbb","ccc"}
                name="purpose"
                className="select"
                label={"Category"}
                labelHide={"true"}
              />
            </div>
            <div className="col-md-3">
              <TableSearch />
            </div>
          </div>
        </div>
        <div className="row">
          <Table data={dataTable} column={tableColumns} />
        </div>
      </div>
    </Container>
  );
};

export default Index;
