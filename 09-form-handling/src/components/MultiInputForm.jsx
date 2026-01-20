import React, { useState } from 'react';

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col items-start gap-4 p-10 bg-slate-100">
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="p-2 border"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border"
      />
      <button className="bg-green-600 rounded-xl text-white p-2 active:scale-95">Register</button>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
}

export default MultiInputForm
