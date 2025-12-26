import React, { useState } from "react";

function ValidationForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") {
      setError("Field cannot be empty");
    } else {
      setError("");
      console.log("Submitted:", text);
    }
  };

  return (
    <div>
      <h3>Validation Form</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ValidationForm;