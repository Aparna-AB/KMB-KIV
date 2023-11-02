import { useEffect, useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import Button from "../../../../components/button";
import Table from "../../../../components/table";

import * as Yup from "yup";

import "./style.scss";

 


function RegisterFormFour({changeTab
}){
       

    const [passengerLocaTable, setPassengerLocaTable] =  useState([]);
    const [freeboardTable, setFreeboardTable] = useState([]);
    const [lifesavesTable, setLifesavesTable] = useState([]);

    const handleChangeTab = (form5) => {
        changeTab(form5);
      };


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
 


    useEffect(() => {
        newFunction();
    }, []);

    function newFunction() {
        let passenger_loc_data = [
            {
                equipment: "Deck/Spaces",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Maximum no. of Passengers",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            }
        ];
        let freeboard_data = [
            {
                equipment: "Minimum Freeboard",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "No. of Passengers",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Cargo (Tonnes)",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            }
        ];
        let lifesaves_data = [
            {
                equipment: "Life Jackets",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Liferafts",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Launching Arrangements",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Flotation Devices",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Lifebuoys ",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Flares - Parachute",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Flares - Hand - held",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Smoke Signals",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            },
            {
                equipment: "Life raft equipment Emergency Communications",
                number: "Enter",
                condition: "Enter",
                location: "Enter"
            }            
        ];
        
        setPassengerLocaTable(passenger_loc_data);
        setFreeboardTable(freeboard_data);
        setLifesavesTable(lifesaves_data);
    }

   
  
    return (
        <div>
           <div className="row">
           <Col md={6}>
                            <p className="aproval-form-name">Form Number 2</p>
                            <h4>Form of declaration to be issued by the Surveyor</h4>
                        </Col>
           </div>
            <hr/>
                <Row className="justify-content-md">
                    <div className="">
                <h4>Passengers and Equipments</h4>

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
                    <Row> </Row>
                </Row><br/>
               
               
                
                    <Container className="container">
                        <Row className="button-container">
                            <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                label="Back"
                className="btn-sucess float-right btn-outline"
                onClick={() => handleChangeTab("form3")} 
              />
              <Button
               label="Next"
               type="submit"
               className="btn-sucess float-right btn-default"
               onClick={() => handleChangeTab("form5")} 
              />
                            </Col>
                        </Row>
                    </Container>

                    
                
                

           
        </div>
    );

};

export default RegisterFormFour;