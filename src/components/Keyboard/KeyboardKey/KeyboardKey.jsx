import React from "react";
import "./KeyboardKey.css";
import PropTypes from "prop-types";

function KeyboardKey({ value }) {
  return (
    <div
      className="keyboard-key"
      style={{
        backgroundColor:
          value === "=>" ? "#87B8F7" : value === "<-" ? "#D08989" : ""
      }}
    >
      {value}
    </div>
  );
}

KeyboardKey.propTypes = {
  value: PropTypes.string.isRequired
};

export default KeyboardKey;
