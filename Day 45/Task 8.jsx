import React, { useState } from "react";

function ProfileForm() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    city: "",
  });

  return (
    <div>
      <h3>Profile Update</h3>

      <input
        placeholder="Name"
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />

      <br /><br />

      <input
        placeholder="City"
        onChange={(e) => setProfile({ ...profile, city: e.target.value })}
      />

      <h4>Live Preview</h4>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>City: {profile.city}</p>
    </div>
  );
}

export default ProfileForm;