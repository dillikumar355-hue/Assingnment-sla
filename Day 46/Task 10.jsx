const [theme, setTheme] = React.useState(
  localStorage.getItem("theme") || "light"
);

React.useEffect(() => {
  localStorage.setItem("theme", theme);
  document.body.className = theme;
}, [theme]);


<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
  Toggle Theme
</button>