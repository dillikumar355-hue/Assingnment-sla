import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  return (
    <div>
      <h3>Register</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <br /><br />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <br /><br />

      <button onClick={() => console.log(form)}>Submit</button>
    </div>
  );
}

export default RegisterForm;