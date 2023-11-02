import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import SuccessModal from "../../../components/successModal";
import Approvalform from "./components/editForms/provideCertificate";
import ViewForm from "./components/viewForms/formOne"
// import "./styles.scss";

const Index = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [message, setMessage] = useState("");
  const [showSuccess, setSuccessModal] = useState(false);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);
 
  const handleClose = () => setShow(false);
  const handleViewClick = () => {
    setShow(true)
  };
  const handleOnClick = (item) => {
    setShowEdit(true)
  };
  const tableColumns = [
    { heading: "Sl.No.", value: "id", type: "row" },
    { heading: "Reference Number", value: "ref_num", type: "row" },
    { heading: "Official Vessel Number", value: "ovn", type: "row" },
    { heading: "Vessel Name", value: "v_name", type: "row" },
    { heading: "Vessel Owner Name", value: "v_owner_name", type: "row" },
    { heading: "Address", value: "v_address", type: "row" },
    { heading: "Date of Submission", value: "sub_date", type: "date" },
    { heading: "Status", value: "status", type: "row", statusValueCheck: true },
    {
      heading: "Action",
      value: "action",
      type: "button",
      label: "View",
      className: "btn-view",
      onClick: handleViewClick,
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
        v_name: "Name Displayed",
        v_owner_name: "Name Displayed",
        v_address:
          "Lorem ipsum dolor sit amet consectetur. Sit vehicula felis vulputate vel. ",
        sub_date: "01-08-2023",
        status: "Approved",
      },
      {
        id: 2,
        ref_num: "123/45",
        ovn: "101/23",
        v_name: "Name Displayed",
        v_owner_name: "Name Displayed",
        v_address:
          "Lorem ipsum dolor sit amet consectetur. Sit vehicula felis vulputate vel. ",
        sub_date: "01-08-2023",
        status: "Rejected",
      },
      {
        id: 2,
        ref_num: "123/45",
        ovn: "101/23",
        v_name: "Name Displayed",
        v_owner_name: "Name Displayed",
        v_address:
          "Lorem ipsum dolor sit amet consectetur. Sit vehicula felis vulputate vel. ",
        sub_date: "01-08-2023",
        status: "Pending",
      },
    ];
    setDataTable(data);
  }

  return (
    <Container>
      {showSuccess && (
        <SuccessModal
          show={showSuccess}
          message={message}
          />
      )}
      {/* {show && <Approvalform show={show} handleClose={handleClose} />} */}
      {show && <ViewForm show={show} handleClose={handleClose} />}

      

      <h2>Category A Vessel - Form No. 5</h2>

      <div className="card">
        <div className="container card-container">
          <div className="row">
            <div className="col-md-3">
              <SelectBox
                id="purpose"
                name="purpose"
                className="select"
                label={""}
                labelHide={"true"}
              />
            </div>
            <div className="col-md-3">
              <TableSearch style={{ marginTop: "8px" }} />
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
