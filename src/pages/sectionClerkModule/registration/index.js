import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectBox from "../../../components/Selectbox";
import Button from "../../../components/button";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import SuccessModal from "../../../components/successModal";
import RegistrationView from "./components/applicationForRegistrationView";

import "./styles.scss";

const Index = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataTable, setDataTable] = useState([]);
    const handleClose = () => setShow(false);
    const handleViewClose = () => setShowModal(false);
    const handleShow = () => setShow(true);
    const handleViewClick = () => {
        setShowModal(true);
    };
    const handleOnClick = (item) => {
        handleShow(true);
    }
    const [message, setMessage] = useState("");
    const [showSuccess, setSuccessModal] = useState(false);

    const tableColumns = [
        { heading: "Sl.No.", value: "id", type: "row" },
        { heading: "Reference Number", value: "ref_num", type: "row" },
        { heading: "Official Vessel Number", value: "ofc_vessel_no", type: "row"},
        { heading: "Vessel Name", value: "v_name", type: "row" },
        { heading: "Vessel Owner Name", value: "v_own_name", type: "row" },
        { heading: "Address", value: "address", type: "row" },
        { heading: "Date of Submission", value: "sub_date", type: "date" },
        { heading: "Status", value: "status", type: "row", statusValueCheck: true },
        { 
            heading: "Action", 
            value: "action", 
            type: "button", 
            label:"View", 
            className: "btn-view", 
            onClick: handleViewClick }    
    ];

    useEffect(() => {
        newFunction();
    }, []);

    function newFunction() {
        let data = [
            {
                id : 1,
                ref_num : "123/45",
                ofc_vessel_no: "Value Displayed",
                v_name : "Name Displayed",
                v_own_name: "Value Displayed",
                address: "Value Displayed",
                reg_date : "01-08-2023",                
                status : "Pending"
            },
            {
                id : 2,
                ref_num : "123/45",
                ofc_vessel_no: "Value Displayed",
                v_name : "Name Displayed",
                v_own_name: "Value Displayed",
                address: "Value Displayed",
                reg_date : "01-08-2023",                
                status : "Approved"
            },
            {
                id : 3,
                ref_num : "123/45",
                ofc_vessel_no: "Value Displayed",
                v_name : "Name Displayed",
                v_own_name: "Value Displayed",
                address: "Value Displayed",
                reg_date : "01-08-2023",                
                status : "Rejected"
            },
            {
                id : 4,
                ref_num : "123/45",
                ofc_vessel_no: "Value Displayed",
                v_name : "Name Displayed",
                v_own_name: "Value Displayed",
                address: "Value Displayed",
                reg_date : "01-08-2023",                
                status : "Approved"
            },
            
        ];
        setDataTable(data);
    }

    return (

        <Container>

            {showSuccess && (
                <SuccessModal
                    show = {showSuccess}
                    message={message}
                    handleClose={() => setSuccessModal(false)}                
                />
            )}
            {showModal && (
                <RegistrationView
                show={showModal}
                handleClose={handleViewClose} />
            )}

            <h2>Registartion Application</h2>
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
                    </div>
                    <div className="row">
                        <Table data={dataTable} column={tableColumns} page="" />
                    </div>
                    
                </div>

            </div>

        </Container>

    );
};

export default Index;