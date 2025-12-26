import React from "react";

function Button({ text, color, size }) {
  return (
    <button
      style={{
        backgroundColor: color,
        padding: size === "large" ? "12px" : "6px",
        color: "white",
        border: "none"
      }}
    >
      {text}
    </button>
  );
}

export default Button;

<Button text="Save" color="green" size="large" />