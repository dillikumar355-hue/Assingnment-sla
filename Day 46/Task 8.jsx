const [query, setQuery] = React.useState("");
const [results, setResults] = React.useState([]);

React.useEffect(() => {
  if (query === "") return;

  fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(data => setResults(data.items || []));
}, [query]);


<input onChange={e => setQuery(e.target.value)} />