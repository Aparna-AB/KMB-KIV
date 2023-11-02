import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.scss";

const confirmationModal = ({
  show,
  handleClose,
  headerMessage,
  message,
  handleDelete,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="confirmation-modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer
          style={{
            justifyContent: "center",
          }}
        >
          <Button className="btn-outline" onClick={handleClose}>
            No
          </Button>
          <Button className="btn-default" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default confirmationModal;
