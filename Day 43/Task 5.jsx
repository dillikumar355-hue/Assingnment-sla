import React, { useState } from "react";

function BgColorChange() {
  const [color, setColor] = useState("lightblue");

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <button onClick={() => setColor("lightgreen")}>
        Change Color
      </button>
    </div>
  );
}

export default BgColorChange;