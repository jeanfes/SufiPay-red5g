import PropTypes from "prop-types";
import { useState } from "react";
import "./dynamicInput.scss"

export const DynamicInput = ({ name = "name", type, getFieldProps, errors, touched }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <label style={{ border: errors[name] && touched[name] ? "1px solid var(--red_1_-dd3542)" : "1px solid var(--azul-plomo-50-)" }} htmlFor={name} className="dynamicInput">
            <p className={isFocused ? "focused" : ""}>{name.charAt(0)?.toUpperCase() + name.slice(1)?.toLowerCase()}</p>
            <input
                autoComplete="on"
                {...getFieldProps({ name })}
                onFocus={handleFocus}
                type={type}
                id={name}
            />
        </label>
    )
}

DynamicInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    getFieldProps: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired
};