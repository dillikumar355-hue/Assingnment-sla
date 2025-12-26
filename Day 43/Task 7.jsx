import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px"
      }}
    >
      <p>Current Theme: {theme}</p>

      <button onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;