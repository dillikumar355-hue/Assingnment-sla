import React, { useState } from "react";

function CountrySelect() {
  const [country, setCountry] = useState("");

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <p>Selected Country: {country}</p>
    </div>
  );
}

export default CountrySelect;