function Status() {
  const isLoggedIn = true;

  return (
    <h3>{isLoggedIn ? "Logged In" : "Guest"}</h3>
  );
}