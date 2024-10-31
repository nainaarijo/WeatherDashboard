import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import TemperatureToggle from './TemperatureToggle';
import WeatherDashboard from './Components/ParentComponent';
import './WeatherDashboard.css';

const dummyData = {
  Karachi: { current: { temp: 30, humidity: 70, wind: 10 }, forecast: [32, 33, 34, 35, 31] },
  Lahore: { current: { temp: 25, humidity: 60, wind: 12 }, forecast: [28, 29, 30, 31, 27] },
  Islamabad: { current: { temp: 20, humidity: 65, wind: 8 }, forecast: [21, 22, 23, 24, 20] },
  Sukkur: { current: { temp: 35, humidity: 55, wind: 15 }, forecast: [36, 37, 38, 39, 34] }
};

function WeatherDashboard() {
  const [city, setCity] = useState('Karachi');
  const [unit, setUnit] = useState('Celsius');

  const handleCityChange = (newCity) => setCity(newCity);
  const handleUnitChange = (newUnit) => setUnit(newUnit);

  return (
    <div className="weather-dashboard">
      <CitySearch onCityChange={handleCityChange} />
      <TemperatureToggle onUnitChange={handleUnitChange} />
      <CurrentWeather data={dummyData[city].current} unit={unit} />
      <WeatherForecast forecast={dummyData[city].forecast} unit={unit} />
    </div>
  );
}

export default WeatherDashboard;
