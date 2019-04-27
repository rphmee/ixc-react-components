import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

/** Text Input with integrated label to enforce consistency in layout, error display, label placement */
function TextInput({
  htmlId,
  name,
  label,
  type = "text",
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...props
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && { border: "solid 1px red" }}
        {...props}
      />
      {children}
      {error && (
        <div className="error" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
}

TextInput.propTypes = {
  /** Unique HTML ID. USed for tying label to HTML input. Handy Hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input Name. Recommend setting this to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** Input Label */
  label: PropTypes.string.isRequired,

  /** Input Type */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /** Mark label with asterisk if required */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occues */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;
