import React, { useState } from "react";

function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <p>
        {confirmPassword &&
          (password === confirmPassword
            ? "Passwords match ✅"
            : "Passwords do not match ❌")}
      </p>
    </div>
  );
}

export default PasswordMatch;