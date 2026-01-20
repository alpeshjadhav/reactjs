import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <label className="block mb-2">Enter Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
      <p>Current typing: {name}</p>
    </form>
  );
}

export default SimpleForm
