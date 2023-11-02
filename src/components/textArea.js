import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Form from "react-bootstrap/Form";
function TextArea({
  name,
  onChange,
  value,
  error,
  label,
  required = false,
  touched = false,
  placeholder,
  row,
  ...props
}) {
  const showError = error && touched;

  return (
    <div className="text-box">
      {/* <label htmlFor={name}>
        {label}
        {required && <span className="required-indicator">*</span>}
      </label> */}
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required-indicator">*</span>}
        </label>
      )}

      <Form.Control
        as="textarea"
        rows={row}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className={showError ? "text-input invalid" : "text-input"}
        {...props}
      />
      {showError && <span className="error-message">{error}</span>}
    </div>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  row: PropTypes.number,
};

export default TextArea;
