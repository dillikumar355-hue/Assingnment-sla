import React, { useState } from "react";

function CheckboxStatus() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default CheckboxStatus;