import React, { useState, useEffect } from "react";
import SelectBox from "../../../components/Selectbox";
import TableSearch from "../../../components/tableSearch";
import Table from "../../../components/table";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.scss";
import CarvingNote from "./components/carvingMaking";

const Index = () => {
    const [show, setShow] = useState(false);
    const [dataTable, setDataTable] = useState([]);
    const handleClose = () => setShow(false);
    const handleViewClick = () => {
        setShow(!show);
    };
    const tableColumns = [
        { heading: "Sl.No", value: "id", type: "row" },
        { heading: "Reference Number", value: "ref_no", type: "row" },
        { heading: "Vessel Name", value: "vessel_name", type: "row" },
        { heading: "Date of Declaration", value: "decl_date", type: "row" },
        { heading: "Status", value: "status", type: "row", statusValueCheck: true },
        { 
            heading: "Action", 
            value: "action", 
            type: "button", 
            className: "btn-view",
            onClick: handleViewClick,
            label: "View",
        },
        {
            value: "action",
            type: "button",
            label: "Download",
        }
    ];
    useEffect(() => {
        newFunction();
      }, []);
    function newFunction() {
        let data = [
          {
            id         : 1,
            ref_no     : "123/45",
            vessel_name: "Name Displayed",
            decl_date  : "01-08-2023",
            status     : "Pending"            
          },
          {
            id         : 2,
            ref_no     : "123/45",
            vessel_name: "Name Displayed",
            decl_date  : "01-08-2023",
            status     : "Issued"            
          },
          {
            id         : 3,
            ref_no     : "123/45",
            vessel_name: "Name Displayed",
            decl_date  : "01-08-2023",
            status     : "Pending"            
          },
          {
            id         : 4,
            ref_no     : "123/45",
            vessel_name: "Name Displayed",
            decl_date  : "01-08-2023",
            status     : "Issued"            
          },
          
        ];
        setDataTable(data);
    }

    return (
        <Container>
            {show && <CarvingNote show={show} handleClose={handleClose} />}
            <Row>
                <Col md={6}>
                    <h2>Carving & Making Note</h2>
                </Col>
            </Row>
            <div className="card">
                <div className="container card-container">
                    <div className="row">
                        <div className="col-md-3">
                            <SelectBox
                                id="purpose"
                                //options={"aaa","bbb","ccc"}
                                name="purpose"
                                className="select"                            
                                label={"Survey"}
                                labelHide={"true"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TableSearch />
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