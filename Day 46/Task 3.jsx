const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);