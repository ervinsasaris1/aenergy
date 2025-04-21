import React from "react";
import PropTypes from "prop-types";
import './InputField.css';

function TextInput({label, name, value, onChange, required}) {
    return (
        <div>
            <label htmlFor={name} className="input-label">{label}</label>
            <input type="text"
                id={name}
                className="input-field"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}

TextInput.PropTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired
}

export default TextInput;