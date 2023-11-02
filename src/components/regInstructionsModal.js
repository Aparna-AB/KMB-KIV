import React from "react";
import Modal from "react-bootstrap/Modal";

const regInstructionsModal = ({
  handleShow,
  show,
  handleClose,
  headerMessage,
  message,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} size={"sm"}>
        {/* <Modal.Header closeButton>
          <Modal.Title>{headerMessage}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>{message}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default regInstructionsModal;
