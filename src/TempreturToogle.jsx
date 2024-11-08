// TemperatureToggle.jsx
import React from 'react';

const TemperatureToggle = ({ onToggle }) => {
  return (
    <div className="temperature-toggle">
      <label>
        <input type="radio" name="tempUnit" value="C" onChange={() => onToggle('C')} /> Celsius
      </label>
      <label>
        <input type="radio" name="tempUnit" value="F" onChange={() => onToggle('F')} /> Fahrenheit
      </label>
    </div>
  );
};

export default TemperatureToggle;
