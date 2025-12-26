import React from "react";

function ProfileCard({ name, job, avatar }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={avatar} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
}

export default ProfileCard;


<ProfileCard
  name="Abilash"
  job="UI Developer"
  avatar="https://via.placeholder.com/100"
/>