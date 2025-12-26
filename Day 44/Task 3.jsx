function CityList() {
  const cities = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];

  return (
    <ul>
      {cities.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
}