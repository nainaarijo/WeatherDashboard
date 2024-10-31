import React, { useState } from 'react';

function CitySearch({ onCityChange }) {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputCity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city (e.g., Karachi)"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default CitySearch;
