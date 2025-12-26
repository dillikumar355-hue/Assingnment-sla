const [user, setUser] = React.useState(null);

React.useEffect(() => {
  fetch("https://api.github.com/users/octocat")
    .then(res => res.json())
    .then(data => setUser(data));
}, []);



{user && (
  <>
    <h3>{user.name}</h3>
    <img src={user.avatar_url} width="100" />
  </>
)}