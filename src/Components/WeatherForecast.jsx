import React from 'react';

function WeatherForecast({ forecast, unit }) {
  const forecastTemps = unit === 'Celsius' ? forecast : forecast.map(f => (f * 9/5) + 32);

  return (
    <div>
      <h2>5-Day Forecast</h2>
      {forecastTemps.map((temp, index) => (
        <p key={index}>Day {index + 1}: {temp} °{unit}</p>
      ))}
    </div>
  );
}

export default WeatherForecast;
