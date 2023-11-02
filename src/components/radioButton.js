import Form from "react-bootstrap/Form";
import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function RadioButton({ id, label, onClick, checked }) {
  return (
    <div>
      <Form.Check
        type={"radio"}
        id={id}
        label={label}
        onClick={(el) => onClick(el.target.checked)}
        isValid={false}
        checked={checked}
      />
    </div>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadioButton;
