const [text, setText] = React.useState("");

React.useEffect(() => {
  console.log("Character count:", text.length);
}, [text]);

<textarea onChange={e => setText(e.target.value)} />