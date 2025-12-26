// Keys help React identify which items changed, added, or removed.


    // Index as key
{/* <li key={index}>{city}</li> */}

// Unique id

<li key={city.id}>{city.name}</li>

function CityListWithKeys() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bangalore" },
    { id: 3, name: "Mumbai" }
  ];

  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}