// CurrentWeather.jsx
import React from 'react';

const CurrentWeather = ({ weatherData, tempUnit }) => {
  const { temperature, humidity, windSpeed, icon } = weatherData;

  const convertTemperature = (temp) => {
    return tempUnit === 'F' ? (temp * 9/5) + 32 : temp;
  };

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>{icon}</p>
      <p>Temperature: {convertTemperature(temperature)}°{tempUnit}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
    </div>
  );
};

export default CurrentWeather;
