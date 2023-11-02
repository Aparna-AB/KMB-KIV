import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Form from "react-bootstrap/Form";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function SelectBox({
  options,
  value,
  onChange,
  label,
  name,
  isRequired = false,
  isTouched = false,
  error,
  className,
  isIdSelect = false,
  labelHide = false,
}) {
  const selectValue = (option) => {
    let value = option.value;
    if (isIdSelect) {
      value = option._id;
    } else if (option.port_name) {
      value = option.port_name;
    } else if (option.zone_name) {
      value = option.zone_name;
    }

    return value;
  };

  const selectLabel = (option) => {
    let value = option.value;

    if (option.port_name) {
      value = option.port_name;
    } else if (option.zone_name) {
      value = option.zone_name;
    } else if (option.lsgd_name) {
      value = option.lsgd_name;
    } else if (option.district_name) {
      value = option.district_name;
    }

    return value;
  };

  const toLower = (label) => {
    const value = label ? label.toLowerCase() : label;
    return value;
  };
  return (
    <div className="text-box">
      {label && !labelHide && (
        <label htmlFor={name}>
          {label}
          {isRequired && <span className="required-indicator">*</span>}
        </label>
      )}
      <Form.Select
        value={value}
        onChange={onChange}
        className={"text-input"}
        name={name}
      >
        <option key={"id"} id={"id"} value={""}>
          {`Please select ${toLower(label)} `}
        </option>

        {options &&
          options.map((option) => (
            <option
              key={option._id ? option._id : option.value}
              id={option._id ? option._id : option.value}
              value={selectValue(option)}
            >
              {selectLabel(option)}
            </option>
          ))}
      </Form.Select>
      {isTouched && <p className="error-message">{error}</p>}
    </div>
  );
}

SelectBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.bool,
  error: PropTypes.any,
  className: PropTypes.any,
};

export default SelectBox;
