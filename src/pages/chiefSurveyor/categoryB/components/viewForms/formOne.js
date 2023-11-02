import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Buttons from "../../../../../components/button";
import FormTwo from "./formTwo";
const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;

const ApprovalForm = ({show,handleClose }) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleEditClick = () => {
    setShowModal(true)
  };
  
  return (
    <div>
        {showModal && <FormTwo show={show} handleClose={handleCloseModal} />}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="ca"
      >
        <Modal.Header closeButton>
          <div>
             <h6>Application for Certificate of Survey</h6>
          </div>
        </Modal.Header>
        <Modal.Body>
              <div className="row">
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Date</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Applying To</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Name Of Vessel</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                 </div>
        
                <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Referance Number</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Official Number Of Vessel</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <h6>Comments</h6>
                    <p>Display field</p>
                    <hr />
                  </div>
                    </div>
                    <div className="row signature">
                        <p>Signature of the Owner / Master / Authorised Person</p>
                    </div>
                    <div className="row btn-container">
              
                    <div className="modal-buttons">
                  <Buttons
                    label={"Cancel"}
                    className="button-close"
                   ></Buttons>
                  <Buttons
                    type="submit"
                    onClick={handleEditClick}
                    label={"Next"}
                    className="button-submit"
                  ></Buttons>
                </div>
              </div>
              </div>

             </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApprovalForm;

