import React from "react";
import propTypes from "prop-types";

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
};
Button.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string,
  version: propTypes.string,
  isDisabled: propTypes.bool,
};

export default Button;
