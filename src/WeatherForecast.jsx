// WeatherForecast.jsx
import React from 'react';

const WeatherForecast = ({ forecastData, tempUnit }) => {
  const convertTemperature = (temp) => {
    return tempUnit === 'F' ? (temp * 9/5) + 32 : temp;
  };

  return (
    <div className="weather-forecast">
      <h2>5-Day Forecast</h2>
      <ul>
        {forecastData.map((day, index) => (
          <li key={index}>
            <p>{day.day}: {day.icon}</p>
            <p>Temperature: {convertTemperature(day.temp)}°{tempUnit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
