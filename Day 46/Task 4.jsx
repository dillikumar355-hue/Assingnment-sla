// Add input field 

const [name, setName] = useState("");

useEffect(() => {
  console.log("Name changed:", name);
}, [name]);