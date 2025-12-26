import React, { useState } from "react";

function DropdownMenu() {
  const [option, setOption] = useState("");

  return (
    <div>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="">Select Option</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Vue">Vue</option>
      </select>

      <p>Selected: {option}</p>
    </div>
  );
}

export default DropdownMenu;