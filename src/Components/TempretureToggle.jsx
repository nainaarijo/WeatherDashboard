import React from 'react';

function TemperatureToggle({ onUnitChange }) {
  return (
    <div>
      <button onClick={() => onUnitChange('Celsius')}>Celsius</button>
      <button onClick={() => onUnitChange('Fahrenheit')}>Fahrenheit</button>
    </div>
  );
}

export default TemperatureToggle;
