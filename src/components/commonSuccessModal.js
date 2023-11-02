import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideError } from "../services/loadingSlice";

const SuccessModal = ({ show, handleClose, message }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loadingSlice);

  useEffect(() => {}, [state.error]);

  return (
    <>
      <Modal
        show={state.error}
        onHide={() => dispatch(hideError())}
        className="success-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src="../../../assets/icons/warning.png"
            className="success-icon"
          />
          <p>{state.message}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccessModal;
