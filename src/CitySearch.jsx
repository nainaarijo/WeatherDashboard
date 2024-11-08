// CitySearch.jsx
import React, { useState } from 'react';

const CitySearch = ({ onSearch }) => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(cityName);
    setCityName('');
  };

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CitySearch;
