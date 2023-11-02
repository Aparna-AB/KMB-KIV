import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "../../../../components/table";

const AnnexureForm = ({ show, handleClose }) => {

    const [dataTable, setDataTable] = useState([]);
    const [equipmentTable, setEquipmnetTable] = useState([]);
    const [navequipTable, setNavequipTable] = useState([]);
    const [passengerLocaTable, setPassengerLocaTable] =  useState([]);
    const [freeboardTable, setFreeboardTable] = useState([]);
    const [lifesavesTable, setLifesavesTable] = useState([]);
    const [machineryTable, setMachinerYTable] = useState ([]);
    const [accomodationTable, setAccomodationTable] = useState([]);


    const displayFields = [
        {
            label: "Name of Vessel",
            value: "Display Field"
        },
        {
            label: "Type of Vessel",
            value: "Display Field"
        },
        {
            label: "Category of Vessel",
            value: "Display Field"
        },
        {
            label: "No. of Passengers",
            value: "Display Field"
        },
        {
            label: "Official Number",
            value: "Display Field"
        },
        {
            label: "Hull Material",
            value: "Display Field"
        },
        {
            label: "Name of Builder",
            value: "Display Field"
        },
        {
            label: "Place of Build",
            value: "Display Field"
        },
        {
            label: "Date of Build",
            value: "Display Field"
        },
        {
            label: "Means of Propulsion",
            value: "Display Field"
        },
        {
            label: "Total British Horse Power of Main Engine",
            value: "Display Field"
        },
        {
            label: "Date of Engine Manufacture",
            value: "Display Field"
        },
        {
            label: "Length",
            value: "Display Field"
        },
        {
            label: "Breadth",
            value: "Display Field"
        },
        {
            label: "Depth",
            value: "Display Field"
        },
        {
            label: "Gross Registered Tonnage",
            value: "Display Field"
        },
        {
            label: "Net Registered Tonnage",
            value: "Display Field"
        }
    ];
    const tableColumns = [
        { heading: "Fire Fighting Item", value :"item", type: "row"},
        { heading: "FNumber/Type", value :"type", type: "row"},
        { heading: "Condition", value :"condition", type: "row"},
        { heading: "Location", value :"location", type: "row"}
    ];
    const equipmentTblColumns = [
        { heading: "Equipment", value :"equipment", type: "row"},
        { heading: "Number", value :"number", type: "row"},
        { heading: "Type/Condition", value :"condition", type: "row"},
        { heading: "Location", value :"location", type: "row"}
    ];
    const navEquipmentTblColumns = [
        { heading: "Navigation Equipment", value :"equipment", type: "row"},
        { heading: "Number", value :"number", type: "row"},
        { heading: "Condition", value :"condition", type: "row"},
        { heading: "Location", value :"location", type: "row"}
    ];
    const passengersTblColumn = [
        { heading: "Location of passengers on specific decks and spaces in maximum loaded condition", value :"equipment", type: "row", colspan:4},
        { value :"number", type: "row"},
        { value :"condition", type: "row"},
        { value :"location", type: "row"}
    ];
    const freeboardTblCol = [
        { heading:"",value :"equipment", type: "row"},
        { heading: "", value :"number", type: "row"},
        { heading:"Freeboard", value :"condition", type: "row"},
        { heading: "", value :"location", type: "row"}
    ];
    const lifesavesTblCols = [
        { heading:"Life-Saving Equipment",value :"equipment", type: "row"},
        { heading: "Number", value :"number", type: "row"},
        { heading:"Type/Condition", value :"condition", type: "row"},
        { heading: "Location", value :"location", type: "row"}
    ];
    const machineryTblCols = [
        { heading:"Machinery/Electrical",value :"machinery", type: "row"},
        { heading:"British Horse Power",value :"bhp", type: "row"},
        { heading:"Type/Condition",value :"condition", type: "row"},
        { heading:"Location",value :"location", type: "row"},
    ];
    const accomodationTblCol = [
        { heading:"Accommodation/Safety",value :"accomodation", type: "row"},
        { heading:"Condition",value :"condition", type: "row"},
        { heading:"Comments",value :"comments", type: "row"},
    ];


    useEffect(() => {
        newFunction();
    }, []);

    function newFunction() {
        let data = [
            {
                item: "Fire Fighting Plan",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Fighting Plan",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Pumps (Mech)",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Pumps (Hand)",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Portable Extinguishers",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fixed Extinguishing System",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Buckets",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Sand Boxes",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Hydrants",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Hoses, Fittings and Nozzles",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }
            
        ];
        let equipent_data = [
            {
                equipment: "Anchors",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Anchors cable/Chairs",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Bilge Pumps",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Winches",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Cranes",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Derricks",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Towing Equipment",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Ropes and Lines",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Collision Mat",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Gangway",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Fenders",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Boat Hook",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "First Aid Kit",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Binoculars",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Waste Containers",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Heaving Line",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Axe",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Torch",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }
        ];
        let nav_equip_data = [
            {
                equipment: "Navigation Lights",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Sound Signals",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Shapes",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Magnetic Compass",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Class B AIS",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Communication equipment",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Nautical Publications",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }
        ];
        let passenger_loc_data = [
            {
                equipment: "Deck/Spaces",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Maximum no. of Passengers",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }
        ];
        let freeboard_data = [
            {
                equipment: "Minimum Freeboard",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "No. of Passengers",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Cargo (Tonnes)",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }
        ];
        let lifesaves_data = [
            {
                equipment: "Life Jackets",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Liferafts",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Launching Arrangements",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Flotation Devices",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Lifebuoys ",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Flares - Parachute",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Flares - Hand - held",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "Smoke Signals",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                equipment: "FLife raft equipment Emergency Communications",
                number: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }            
        ];
        let machinery_data = [
            {
                machinery: "Life Jacketsmachinery_data",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Main Generator",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Emergency Generator ",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Main Steering Gear",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Switchboard",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Auxiliary Steering Gear",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Shore Connection",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Batteries",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                machinery: "Signal Light Switches",
                bhp: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
        ];
        let accomodation_data = [
            {
                accomodation: "Escape Routes",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Washrooms",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Toilets",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Galley",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Messroom",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Water Tanks",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Heating / Cooling / Ventilation",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Berth / Locker",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Access to Accommodation",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Lighting",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Machinery Guard",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Guard Rails",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Non-Slip Surfaces",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Ladders/Companionways ",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Noise Insulation/ Protection/Notices",
                condition: "Display Field",
                comments: "Display Field"
            },
            {
                accomodation: "Foam Floatation material: Density",
                condition: "Display Field",
                comments: "Display Field"
            },
            
        ];
    
        setDataTable(data);
        setEquipmnetTable(equipent_data);
        setNavequipTable(nav_equip_data);
        setPassengerLocaTable(passenger_loc_data);
        setFreeboardTable(freeboard_data);
        setLifesavesTable(lifesaves_data);
        setMachinerYTable(machinery_data);
        setAccomodationTable(accomodation_data);

    }

    return (
        <div>
            <Modal
                show = {show}
                onHide = {handleClose}
                backdrop = "static"
                keyboard = {false}
                size = "xl"
                className=""
            >
                <Modal.Header closeButton>
                    <Row className="col-md-12">
                        <Col md={6}>
                            <p className="aproval-form-name">Form Number 2</p>
                            <h2>Annexure to Form Number 2</h2>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <Button className="btn-outline btn-download">Download</Button>
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body>
                    <h2>Record of Equipment and Vessel Information</h2>
                    <div className="card  review-card">
                        <Row>
                            {displayFields.map((input) => (
                                <Col md={4}>
                                    <label>{input.label}</label>
                                    <p className="display_value">{input.value}</p>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <div className="fire_fitings">
                                <Table data={dataTable} column={tableColumns} />
                            </div>
                        </Row>
                    </div>
                    <h4>Equipments</h4>
                    <div className="card  review-card">
                        <Row>                            
                            <div className="fire_fitings">
                                <Table data={equipmentTable} column={equipmentTblColumns} />
                            </div>
                            <div className="fire_fitings">
                                <Table data={navequipTable} column={navEquipmentTblColumns} />
                            </div>
                        </Row>                        
                    </div>
                    <h4>Passengers and Equipments</h4>
                    <div className="card  review-card">
                        <Row>
                            <div className="fire_fitings">
                                <Table data={passengerLocaTable} column={passengersTblColumn} />                                
                            </div>
                            <div className="fire_fitings">
                                <Table data={freeboardTable} column={freeboardTblCol} />                                
                            </div>
                            <div className="fire_fitings">
                                <Table data={lifesavesTable} column={lifesavesTblCols} />                                
                            </div>                            
                        </Row>
                    </div>
                    <h4>Machinery and Accommodation</h4>
                    <div className="card  review-card">
                        <Row>                            
                            <div className="fire_fitings">
                                <Table data={machineryTable} column={machineryTblCols} />                                
                            </div>
                            <div className="fire_fitings">
                                <Table data={accomodationTable} column={accomodationTblCol} />                                
                            </div>
                        </Row>
                    </div>
                    <div className="d_signature">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p><strong>Issued At:</strong> 08:00 PM</p>
                            <p><strong>Issued On:</strong> 10-08-2023</p>
                        </div>
                        <div className="">
                            <p>Digital Signature and Seal</p>
                        </div>
                    </div>
                    </div>
                </Modal.Body>


            </Modal>

        </div>
    );

}

export default AnnexureForm;