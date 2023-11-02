import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
function CheckBox({ id, label, onClick, checked }) {
  console.log("value+++++++++++++++   +++++++++++", checked);

  return (
    <div>
      <Form.Check
        type={"checkbox"}
        id={id}
        label={label}
        onClick={(el) => onClick(el.target.checked)}
        // onChange={(el) => onClick(el.target.checked)}
        checked={checked}
      />
    </div>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CheckBox;
