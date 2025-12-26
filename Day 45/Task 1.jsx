import React, { useState } from "react";

function HelloName() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello, {name}</h3>
    </div>
  );
}

export default HelloName;