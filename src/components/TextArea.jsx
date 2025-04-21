import React from "react";
import PropTypes from "prop-types";

function TextArea({label, name, value, onChange, required}) {
    return (
        <div>
            <label htmlFor="name">{label}</label>
            <textarea id={name}
                name={name}
                className="input-field"
                rows={4}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}

TextArea.PropTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired
}

export default TextArea;