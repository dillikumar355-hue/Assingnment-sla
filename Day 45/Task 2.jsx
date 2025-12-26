import React, { useState } from "react";

function UppercaseInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Uppercase only"
        value={text}
        onChange={(e) => setText(e.target.value.toUpperCase())}
      />
      <p>{text}</p>
    </div>
  );
}

export default UppercaseInput;