import React, { useState, useEffect } from "react";
import "../../style.scss"
import Modal from "react-bootstrap/Modal";


const FormTwo = ({
  show,
  handleClose,
}) => {
    
 
  
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="category-a"
      >
        <Modal.Header closeButton>
          <div>
          <p className="form-name">Form Number 3 </p>
             <h4>Certificate of Survey</h4>
        
             </div>
         
         </Modal.Header>
        <Modal.Body>
        <div className="row head-row">
          <p className="form-name">Form Number 3 </p>
          <h2>Certificate of Survey</h2>
          <h4>Category A Vessel </h4>
          </div>
          <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Certificate of Survey No.</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Zone of Operation</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Date of Issue</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
                 <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Date of Expiry</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
               </div>
               <b>
               <p className="pad" >Safety equipment carried on the vessel:</p>
               </b>
               <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Name of the Vessel</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Official Number</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Port of Registry</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Certificate of Registry No.</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Gross Tonnage</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Registered Tonnage</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Freeboard Assigned (mm)</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Loading marks placed on the vessel's side</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Name of the Master</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Master's COC Grade</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Number</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Place of Issue</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Name of the Engineer or Engine Driver</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Master's COC Grade</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Number</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Place of Issue</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Date of Survey Carried out</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Place of Survey Carried out</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Name & Address of Owner or Agent</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 
                 </div>
                
         <h5>Plying Limits (As applicable)</h5>
         <p>Within inland water limits of Display Field</p>
         <h4>Cargo / Passenger Capacity</h4>
         <p>Maximum permissible cargo carriage capacity Display Field tonnes and / or Display Field Passengers with Display Field Crew</p>
        
         <p className="pad" >Safety equipment carried on the vessel:</p>
          
          <div className="row  ">
            <table className="table table-striped table-hover test">
              <thead>
                <tr className="text-center">
                  <th>No. of boats size and cubic capacity</th>
                  <th >No. of buoyant apparatus or Life rafts</th>
                  <th colspan="2">No. of lifebuoys and lifejackets</th>
                  <th colspan="3" className="text-center">Fire extinguishers</th>
                  <th >No. of anchors with their weight</th>
                  <th colspan="2">Fire extinguishers</th>
                 
                 
                
                </tr>
                <tr className="text-center"> 
       
       <th></th> 
       <th></th> 
       <th>Lifebuoy</th> 
       <th>Lifejacket</th> 
       <th>Foam Type</th> 
       <th>Soda acid</th> 
       <th>Dry Cargo Powder</th> 
       <th></th> 
       <th>Anchor cable</th> 
       <th>Hose</th> 
      
      </tr> 
     
              </thead>
              <tbody>
                <tr>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                 
                  </tr>
                <tr>
                <td>Enter</td>
                <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  
                 
                 </tr>
                 <tr>
                <td>Enter</td>
                <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  
                 
                 </tr>
                 <tr>
                <td>Enter</td>
                <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  
                 
                 </tr>
                 <tr>
                <td>Enter</td>
                <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  <td>Enter</td>
                  
                 
                 </tr>
              
              </tbody>
            </table>
          </div>
         <p className="pad">This is to certify that the provisions of the rules with respect to the survey of the above mentioned Inland Vessel and the Transmission of declaration in respect thereof, have been complied with.<br/>
This Certificate, unless previously cancelled or revoked, to be in force only until the Display Field Day of Display Field</p>
<div className="row pad">
<div className="col-md-6 col-lg-6 col-sm-12">
                    <p>Examined and Registered</p>
                   </div>
                  
<div className="col-md-6 col-lg-6 col-sm-12">
                    
<div className="col-md-6 col-lg-6 col-sm-12">
                    <p  style={{textAlign:"right"}}>Signed by Chief Surveyor</p>
                   </div>
                  
                   </div>
                  
</div>
          </Modal.Body>

      </Modal>
    </div>
      );
};

export default FormTwo;
