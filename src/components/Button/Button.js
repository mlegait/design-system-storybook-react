import PropTypes from "prop-types";
import React from "react";

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
