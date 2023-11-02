import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import SuccessModal from "../../../components/successModal";
import DeclarationForm from "./components/declarationForm";
import ApprovalForm from "./components/surveyorDeclaration";
import AnnexureFormTwo from "./components/AnnexureFormtwo";

import "./styles.scss";

const Index = () => { 

    const [show, setShow] = useState(false);
  const [showDeclaration, setShowDeclaration] = useState(false);

  const [viewModal1, setViewModal1] = useState(false);
  const [viewModal2, setViewModal2] = useState(false);


    const [dataTable, setDataTable] = useState([]);

    const handleClose = () => setShow(false);
    const handleCloseDeclaration = () => setShowDeclaration(false);
   
   
    const handleShow = () => setShow(true);
    const handleShowDeclaration = () => setShowDeclaration(true);
   

const handleViewClick = () => {
    //   handleShowDeclaration(true);
    setShowDeclaration(true);
    };
    const handleOnClick = (item) => {
        handleShow(true);
        setShow(true);
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
    const [message, setMessage] = useState("");
    const [showSuccess, setSuccessModal] = useState(false);
    const [page, setPage] = useState(1);
    const [tableData, setTableData] = useState([]);
    const tableColumns = [
        { heading: "Sl.No.", value: "id", type: "row" },
        { heading: "Reference Number", value: "ref_num", type: "row" },
        { heading: "Official Vessel Number", value: "ovn", type: "row" },
        { heading: "Vessel Name", value: "v_name", type: "row" },
        { heading: "Vessel Owner Name", value: "v__owner_name", type: "row" },
        { heading: "Address", value: "address", type: "row" },
        { heading: "Date of Submission", value: "sub_date", type: "date" },
        { heading: "Status", value: "status", type: "row", statusValueCheck: true },
        { 
            heading: "Action",
      value: "status",
      type: "button",
      label: "View",
      className: "btn-view",
      onClick: openViewModal1,
      statusCheckVieworEdit: true,  }
    ];

    useEffect(() => {
        newFunction();
    }, []);

    function newFunction() {
        let data = [
            {
                id : 1,
                ref_num : "123/45",
                ovn : "101/23",
                sub_date : "01-08-2023",
                v_name : "Name Displayed",
                v__owner_name: "Name Displayed",
                address: "Lorem ipsum dolor sit amet consectetur. Sit vehicula felis vulputate vel. ",
                status : "Approved"
            },
            {
                id : 2,
                ref_num : "123/45",
                ovn : "101/23", 
                sub_date : "01-08-2023",
                v_name : "Name Displayed",
                v__owner_name: "Name Displayed",
                address: "Lorem ipsum dolor sit amet consectetur. Sit vehicula felis vulputate vel. ",
                status : "Rejected"
            },
            {
                id : 3,
                ref_num : "123/45",
                ovn : "101/23",
                sub_date : "01-08-2023",
                v_name : "Name Displayed",
                v__owner_name: "Name Displayed",
                address: "Lorem ipsum dolor sit amet consectetur. Sit vehicula felis vulputate vel. ",
                status : "Pending"
            }
        ];
        setDataTable(data);
    }
    
    
    return (
        <Container>

{showSuccess && (
        <SuccessModal
            show={showSuccess}
            message={message}
            handleClose={() => setSuccessModal(false)}
        />
    )}

{showDeclaration && <ApprovalForm show={showDeclaration} handleClose={handleCloseDeclaration} />}

      {show && (
        <DeclarationForm
          show={show}
          handleClose={handleClose}
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
        <AnnexureFormTwo
          show={viewModal2}
          // handleOnClick={openViewModal2}
          handleClose={closeViewModal1}
        />
      )}


            <h2>Declaration Form</h2>
            
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
                            />
                        </div>
                        <div className="col-md-3">
                            <TableSearch style={{ marginTop: "8px" }} />
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="text-box">
                                <Button
                                    label={"Declaration Form"}
                                    onClick={handleOnClick}
                                    className="add-new-btn"
                                    >
                                </Button>
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

