import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const successModal = ({
  show,
  handleClose,
  message,
  handleClick,
  isDownload,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="success-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src="../../../assets/icons/successfully_icon.svg"
            className="success-icon"
          />
          <p>{message}</p>

          {isDownload && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                placeContent: "center",
              }}
              className="download-modal-button"
            >
              <Button
                label={"ok"}
                className={"btn-outline btn-download-modal"}
                onClick={handleClick}
              >
                Download File
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default successModal;
