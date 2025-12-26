import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Arun", age: 25 },
    { id: 2, name: "Priya", age: 23 },
    { id: 3, name: "Rahul", age: 28 }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years
        </li>
      ))}
    </ul>
  );
}

export default UserList;