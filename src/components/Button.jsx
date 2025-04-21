import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({label, type}) {
    return (
        <button type={type} className="submit-button">{label}</button>
    )
}

Button.PropTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Button;