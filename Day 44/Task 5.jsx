function DataList() {
  const data = [];

  return (
    <>
      {data.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}