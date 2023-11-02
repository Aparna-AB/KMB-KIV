import { useEffect, useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import Button from "../../../../components/button";
import Table from "../../../../components/table";

import * as Yup from "yup";

import "./style.scss";

 


function RegisterFormThree({changeTab
}){
       

        const [equipmentTable, setEquipmnetTable] = useState([]);
        const [navequipTable, setNavequipTable] = useState([]);
    

   
        const handleChangeTab = (form4) => {
            changeTab(form4);
          };
  
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

    useEffect(() => {
        newFunction();
    }, []);

    function newFunction() {
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
        setEquipmnetTable(equipent_data);
        setNavequipTable(nav_equip_data);
    }

   
  
    return (
        <div>
           <div className="row">
           <Col md={6}>
                            <p className="aproval-form-name">Form Number 2</p>
                            <h4>Annexure to Form Number 2</h4>
                        </Col>
           </div>
            
                <Row className="justify-content-md">
                <h4>Equipments</h4>
                    <div className="">
                        <Row>                            
                            <div className="fire_fitings">
                                <Table data={equipmentTable} column={equipmentTblColumns} />
                            </div>
                            <div className="fire_fitings">
                                <Table data={navequipTable} column={navEquipmentTblColumns} />
                            </div>
                        </Row>                        
                    </div>
                    <Row> </Row>
                </Row><br/>
               
               
                
                    <Container className="container">
                        <Row className="button-container">
                            <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                label="Back"
                className="btn-sucess float-right btn-outline"
                onClick={() => handleChangeTab("form2")} 
              />
              <Button
               label="Next"
               type="submit"
               className="btn-sucess float-right btn-default"
               onClick={() => handleChangeTab("form4")} 
                
              />
                            </Col>
                        </Row>
                    </Container>

                    
                
                

           
        </div>
    );

};

export default RegisterFormThree;