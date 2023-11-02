import { useEffect, useState } from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";

function ApplicationReview (){

    const displayFields = [
        {
            label: "Date",
            value: "Display Field "
        },
        {
            label: "Survey Type",
            value: "Display Field "
        },
        {
            label: "Applying to Chief Surveyor at",
            value: "Display Field"
        },
        {
            label: "Name of Vessel",
            value: "Display Field"
        },
        {
            label: "Official Number of Vessel",
            value: "Display Field"
        },
        {
            label: "Place",
            value: "Display Field"
        },
        {
            label: "Port of Registry of Vessel",
            value: "Display Field"
        },
        {
            label: "Registered Tonnage",
            value: "Display Field"
        },
        {
            label: "Vessel Type",
            value: "Display Field"
        },
        {
            label: "Category of Vessel",
            value: "Display Field"
        },
        {
            label: "Name of Builder",
            value: "Display Field"
        },
        {
            label: "Address of Builder",
            value: "Display Field"
        },
        {
            label: "Year of Build",
            value: "Display Field"
        },
        {
            label: "Hull Dimension",
            value: "Display Field"
        },
        {
            label: "Place of Last Survey",
            value: "Display Field"
        },
        {
            label: "Date of Last Survey",
            value: "Display Field"
        },
        {
            label: "Owners Name",
            value: "Display Field"
        },
        {
            label: "Owners Mobile Number",
            value: "Display Field"
        },
        {
            label: "Address of Owner",
            value: "Display Field"
        },
        {
            label: "Name of Agent",
            value: "Display Field"
        },
        {
            label: "Agent Number",
            value: "Display Field"
        },
        {
            label: "Address of Agent",
            value: "Display Field"
        },
        {
            label: "Type And BHP of Main Propulsion Machinery",
            value: "Display Field"
        },
        {
            label: "Details of Other Machinery",
            value: "Display Field"
        },
        {
            label: "Date of Purposed Survey",
            value: "Display Field"
        },
        {
            label: "Time of Purposed Survey",
            value: "Display Field"
        },
        {
            label: "Place of Purposed Survey",
            value: "Display Field"
        },
        {
            label: "Signature of owner/Master/Authorized Person",
            value: "Display Field"
        },
        {
            label: "Proof of Payment of survey fee and other charges",
            value: "Display Field"
        },
        {
            label: "Copy of Certificate of Registration",
            value: "Display Field"
        },
        {
            label: "Copy of last certificate of survey",
            value: "Display Field"
        },
        {
            label: "Document establishing the Authority of Authorized Person (if making request)",
            value: "Display Field"
        }
    ];
    const display_fields2 = [
        {
            label: "Name of Vessel (if already named)/Yard Number",
            value: "Display Field"
        },
        {
            label: "Length of Vessel",
            value: "Display Field"
        },
        {
            label: "Breadth of Vessel",
            value: "Display Field"
        },
        {
            label: "Depth of Vessel",
            value: "Display Field"
        },
        {
            label: "Vessel Type",
            value: "Display Field"
        },
        {
            label: "Owner Name",
            value: "Display Field"
        },
        {
            label: "Owner Address",
            value: "Display Field"
        },
    ];
    const display_fields3 = [
        {
            label: "Material of Hull",
            value: "Display Field"
        },
        {
            label: "Year of Build",
            value: "Display Field"
        },
        {
            label: "Builders Name",
            value: "Display Field"
        },
        {
            label: "Builders Address",
            value: "Display Field"
        },
        {
            label: "Builders Address",
            value: "Display Field"
        },
        {
            label: "No. of Bulk Heads ,their Placement and Thickness",
            value: "Display Field"
        },
        {
            label: "Hull Plaiting Materials and Thickness",
            value: "Display Field"
        },
        {
            label: "Frames(Material and thickness)",
            value: "Display Field"
        },
        {
            label: "Floors(Material and thickness)",
            value: "Display Field"
        },
        {
            label: "Builders Certificates",
            value: "Display Field"
        },
    ];
    const display_fields4 = [
        {
            label: "No of sets fitted and Sr. Number",
            value: "Display Field"
        },
        {
            label: "Manufacture's Name and Brand",
            value: "Display Field"
        },
        {
            label: "Model Number ",
            value: "Display Field"
        },
        {
            label: "Type of Engine with Horse Power of each",
            value: "Display Field"
        },
        {
            label: "Stroke and Cylinder Diameter",
            value: "Display Field"
        },
        {
            label: "Diameter of propulsion shaft and material",
            value: "Display Field"
        },
        {
            label: "Year of Build",
            value: "Display Field"
        },
        {
            label: "Test Certificate",
            value: "Display File Name "
        },
        {
            label: "Type and No. of gears",
            value: "Display Field "
        },
    ];
    const display_fields5 = [
        {
            label: "Anchor-Spare (Weight and Material of each equipment)",
            value: "Display Field "
        },
        {
            label: "Anchor-Port, Starboard(Weight and Material of each)",
            value: "Display Field "
        },
        {
            label: "Chain: Size Type and length and test certificate (Port)",
            value: "Display Field "
        },
        {
            label: "Chain: Size Type and length and test certificate (Starboard)",
            value: "Display Field "
        },
        {
            label: "Ropes-Size, material and no of ropes",
            value: "Display Field "
        },
        {
            label: "Search Lights, number, size and power",
            value: "Display Field "
        },
        {
            label: "Lifebuoys, Buoyant apparatus with Self Ignited Lights, No. with buoyant lanyard",
            value: "Display Field "
        },
        {
            label: "Navigation Lights giving particulars and certificate, main mast, auxiliary mast, port, Starboard, Stem, Anchor not under command",
            value: "Display Field "
        },
        {
            label: "Shapes for anchor not under command",
            value: "Display Field "
        },
        {
            label: "Sound signals: Mechanical or Electrical",
            value: "Display Field "
        },
    ];
    const display_fields6 = [
        {
            label: "Number ,size and Capacity of fire pumps",
            value: "Display Field "
        },
        {
            label: "Fire mains, diameter, material and no. of Hydrants",
            value: "Display Field "
        },
        {
            label: "Any other equipment",
            value: "Display Field "
        },
        {
            label: "Nozzles",
            value: "Display Field "
        },
        {
            label: "Number of hoses",
            value: "Display Field "
        },
    ];
    const display_fields7 = [
        {
            label: "Soda Acid",
            value: "Display Field "
        },
        {
            label: "Foam",
            value: "Display Field "
        },
        {
            label: "Dry Powder",
            value: "Display Field "
        },
        {
            label: "Any other types",
            value: "Display Field "
        },
    ];
    const display_fields8 = [
        {
            label: "Sewage treatment and disposal",
            value: "Display Field "
        },
        {
            label: "Solid waste processing and disposal",
            value: "Display Field "
        },
        {
            label: "Sound Pollution Control",
            value: "Display Field "
        },
        {
            label: "Water Consumption/Day",
            value: "Display Field "
        },
        {
            label: "Source of Water",
            value: "Display Field "
        }        
    ];



    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return(
        <div>
            <h4>Form Number 1 </h4>
            <h2>Application For Conducting Survey of Inland Vessels</h2>
            <div className="card review-card">
                <Row>
                {displayFields.map((input) => (
                    <Col md={4}>
                        {/* <TextBox
                        label={input.label}
                        id={input.id}
                        className="disply_field"
                        value={input.value}
                        /> */}
                        <label>{input.label}</label>
                        <p className="display_value">{input.value}</p>
                        </Col>
                ) ) }
                </Row>
            </div>
            <h4>Form Number 7 </h4>
            <h2>Particular To Be Furnished For Survey Of New Vessel Or Vessels Which Are To Be Surveyed For The First Time</h2>
            <div className="card review-card">
                <Row>
                {display_fields2.map((input) => (
                    <Col md={4}>
                        <label>{input.label}</label>
                        <p className="display_value">{input.value}</p>
                        </Col>
                ) ) }
                <h4>Particulars of Hull</h4>
                {display_fields3.map((input) => (
                    <Col md={4}>
                        <label>{input.label}</label>
                        <p className="display_value">{input.value}</p>
                        </Col>
                ) ) }
                </Row>                
            </div>
            <h4>Form Number 7 </h4>
            <h2>Propulsion Of Equipment</h2>
            <div className="card review-card">
                <Row>
                    <h4>Particulars of Propulsion of Engines</h4>
                    {display_fields4.map((input) => (
                        <Col md={4}>
                            <label>{input.label}</label>
                            <p className="display_value">{input.value}</p>
                            </Col>
                    ) ) }
                    <h4>Particulars of Equipment</h4>
                    {display_fields5.map((input) => (
                        <Col md={4}>
                            <label>{input.label}</label>
                            <p className="display_value">{input.value}</p>
                            </Col>
                    ) ) }
                </Row>
            </div>
            <h4>Form Number 7 </h4>
            <h2>Fire And Other Particulars</h2>
            <div className="card review-card">
                <Row>
                    <h4>Particulars of Fire Appliances</h4>
                    {display_fields6.map((input) => (
                        <Col md={4}>
                            <label>{input.label}</label>
                            <p className="display_value">{input.value}</p>
                            </Col>
                    ) ) }
                    <h4>No. of Portable Fire Extinguisher with Particulars and name of Manufactures </h4>
                    {display_fields7.map((input) => (
                        <Col md={4}>
                            <label>{input.label}</label>
                            <p className="display_value">{input.value}</p>
                            </Col>
                    ) ) }
                    <h4>Particulars of Communication Equipment</h4>
                    <Col md={4}>
                        <label>Equipment Details</label>
                        <p className="display_value">Display Field</p>
                    </Col>
                    <h4>Particulars of Navigation Equipment</h4>
                    <Col md={4}>
                        <label>Equipment Details</label>
                        <p className="display_value">Display Field</p>
                    </Col>
                </Row>                
            </div>
            <h4>Form Number 7 </h4>
            <h2>Final Particulars</h2>
            <div className="card review-card">
                <h4>Particulars of Pollution Control Devices</h4>
                <Row>
                    {display_fields8.map((input) => (
                        <Col md={4}>
                            <label>{input.label}</label>
                            <p className="display_value">{input.value}</p>
                        </Col>
                    ) ) }
                    <h4>No. of Deck Crew and Management Crew </h4>
                    <Col md={4}>
                        <label>Number of Deck Crew</label>
                        <p className="display_value">Display Field</p>
                    </Col>
                    <Col md={4}>
                        <label>Number of Engine Crew</label>
                        <p className="display_value">Display Field</p>
                    </Col>
                </Row>
                <Row>
                    <h4>Number of Passengers</h4>
                    <Col md={4}>
                        <label>Number of Passengers</label>
                        <p className="display_value">Display Field</p>
                    </Col>
                </Row>
                <Row>
                    <h4>Plans and Drawings</h4>
                    <Col md={8}>
                        <label>Plans and Drawings</label>
                        <p className="display_value">Display Field</p>
                    </Col>
                </Row>
            </div>
                                       
        </div>
    );

}
export default ApplicationReview;