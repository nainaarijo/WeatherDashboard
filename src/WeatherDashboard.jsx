// WeatherDashboard.jsx
import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import TemperatureToggle from './TempreturToogle';


const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [tempUnit, setTempUnit] = useState('C'); // C for Celsius, F for Fahrenheit

  const dummyWeatherData = {
    current: {
      temperature: 25,
      humidity: 65,
      windSpeed: 10,
      icon: '🌤️',
    },
    forecast: [
      { day: 'Monday', temp: 24, icon: '🌤️' },
      { day: 'Tuesday', temp: 22, icon: '☀️' },
      { day: 'Wednesday', temp: 26, icon: '🌦️' },
      { day: 'Thursday', temp: 23, icon: '🌧️' },
      { day: 'Friday', temp: 27, icon: '🌤️' },
    ],
  };

  const handleCitySearch = (cityName) => {
    setCity(cityName);
    setWeatherData(dummyWeatherData); // Here we simulate setting the weather data based on city.
  };

  const handleTempUnitChange = (unit) => {
    setTempUnit(unit);
  };

  return (
    <div className="weather-dashboard">
      <CitySearch onSearch={handleCitySearch} />
      {weatherData && (
        <>
          <CurrentWeather
            weatherData={weatherData.current}
            tempUnit={tempUnit}
          />
          <WeatherForecast
            forecastData={weatherData.forecast}
            tempUnit={tempUnit}
          />
        </>
      )}
      <TemperatureToggle onToggle={handleTempUnitChange} />
    </div>
  );
};

export default WeatherDashboard;
