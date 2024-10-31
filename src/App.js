import logo from './logo.svg';
import './App.css';
import CitySearch from './Components/CitySearch';
import ParentComponent from './Components/ParentComponent'
import CurrentWeather from './Components/CureentWeather';
import TemperatureToggle from './Components/TempretureToggle';
import WeatherForecast from './Components/WeatherForecast';
import WeatherDashboard from './Components/ParentComponent';


function App() {
  return (
    <>
   < ParentComponent />
   < CitySearch />
   < CurrentWeather/>
   <TemperatureToggle />
   < WeatherForecast />
   < WeatherDashboard />
   </>
  );
}

export default App;
