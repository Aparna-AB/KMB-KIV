import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function Buttons({
  className,
  onClick,
  label,
  variant = "primary",
  disabled = false,
}) {
  return (
    <Button
      className={className}
      onClick={onClick}
      type="submit"
      variant={variant}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

Buttons.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.any,
  className: PropTypes.any,
};

export default Buttons;

// backgroundColor: "rgba(193,40,114,1)",
