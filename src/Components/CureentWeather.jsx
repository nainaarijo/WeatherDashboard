import React from 'react';

function CurrentWeather({ data, unit }) {
  const { temp, humidity, wind } = data;
  const temperature = unit === 'Celsius' ? temp : (temp * 9/5) + 32;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {temperature} °{unit}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {wind} km/h</p>
    </div>
  );
}

export default CurrentWeather;
