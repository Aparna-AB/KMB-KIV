import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import AccordionComponent from "../../../../components/accordionComponent";

const Instructions = ({ show, handleClose }) => {
  const [showToast, setToast] = useState(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="modal-a instruction-modal"
      >
        <Modal.Header closeButton></Modal.Header>

        <AccordionComponent />
      </Modal>
    </div>
  );
};

export default Instructions;
