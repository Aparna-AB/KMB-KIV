import { useEffect, useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import Button from "../../../../components/button";
import Table from "../../../../components/table";
import { useFormik } from "formik";


import * as Yup from "yup";

import "./style.scss";
import TextBox from "../../../../components/textBox";

 


function RegisterFormFive({changeTab
}){
       

    const [machineryTable, setMachinerYTable] = useState ([]);
    const [accomodationTable, setAccomodationTable] = useState([]);

    const handleChangeTab = (form6) => {
        changeTab(form6);
      };

      const form_textbox1 = [
      
        {
            label: "Issued At",
            id: "issuedAt",
            name: "issuedAt",
            type: "text"
        },

    ];

    const form_textbox2 = [
      
        {
            label: "Issued On",
            id: "issuedOn",
            name: "issuedOn",
            type: "date"
        },

    ];

      const initialValues = {
       issuedAt: "",
       issuedOn: "",
      };
  
   
  
  const onSubmit = (values) => {
    
  };
  
  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit,
  });


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

        setMachinerYTable(machinery_data);
        setAccomodationTable(accomodation_data);
    }

   
  
    return (
        <div>
           <div className="row">
           <Col md={6}>
                            <p className="aproval-form-name">Form Number 2</p>
                            <h4>Form of declaration to be issued by the Surveyor</h4>
                        </Col>
           </div>
            
                {/* <Row className="justify-content-md"> */}
               <hr/>
                    <div className="">
                    <h4>Machinery and Accommodation</h4>
                        <Row>                            
                            <div className="fire_fitings">
                                <Table data={machineryTable} column={machineryTblCols} />                                
                            </div>
                            <div className="fire_fitings">
                                <Table data={accomodationTable} column={accomodationTblCol} />                                
                            </div>
                        </Row>
                    </div>
                    <Row> </Row>
                {/* </Row><br/> */}
                <div className="d_signature">
                    <div class="d-flex justify-content-between">
                        {/* <div>
                            <p><strong>Issued At:</strong> 08:00 PM</p>
                            <p><strong>Issued On:</strong> 10-08-2023</p>
                        </div>
                        <div className="">
                            <p>Digital Signature and Seal</p>
                        </div> */}
                          <div className="col-md-12 col-lg-12 col-sm-12">
                <form onSubmit={formik.handleSubmit}>
                <Row>
                   <Col>
                    <div className="row">
                    {form_textbox1.map((input) => (
                            <Col md={4}>
                                <TextBox
                                label={input.label}
                                id = {input.id}
                                name={input.name}
                                type={input.type} 
                                
                                style={{
                                    width: "394px",
                                    height:" 48px",
                                    top: "21px",
                                    borderRadius: "4px",
                                    border: "1px",
                                }}
                               />
                          </Col>                          
                        ) )}
                        <p style={{marginTop: "20px"}}>(Signature of authorised official issuing the cetificate)</p>
                    </div>
                    </Col>

                    <Col>   
                    <div className="row" >
{form_textbox2.map((input) => (
                            <Col md={4}>
                                <TextBox
                                label={input.label}
                                id = {input.id}
                                name={input.name}
                                type={input.type}   
                                style={{
                                    width: "394px",
                                    height:" 48px",
                                    top: "21px",
                                    borderRadius: "4px",
                                    border: "1px",
                               
                                }} />
                          </Col>                          
                        ) )}
                        <p style={{marginTop: "20px"}}>(Seal of the Issuing Authority)</p>

                        </div>
                        </Col>   
                    </Row>
                    </form>
                  </div>
                    </div>
                    </div>
               
                
                    <Container className="container">
                        <Row className="button-container">
                            <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                label="Back"
                className="btn-sucess float-right btn-outline"
                onClick={() => handleChangeTab("form4")} 
              />
              <Button
               label="Submit"
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

export default RegisterFormFive;