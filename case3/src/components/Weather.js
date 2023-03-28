import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { cities } from "../util/Cities.js";
import { useLocationDetector } from "../util/LocationDetect.js";

import WeatherCard from "./WeatherCard";

const Weather = () => {
  const { weatherData, updateCity, city } = useContext(WeatherContext);

  // handling select change
  function handleChange(event) {
    const lat = parseFloat(event.target.selectedOptions[0].dataset.lat);
    const long = parseFloat(event.target.selectedOptions[0].dataset.long);
    const city = cities.find((city) => city.lat === lat && city.long === long);
    updateCity(city);
  }
  useLocationDetector();

  return (
    <div>
      <div className="select-container">
        <select value={city?.name} onChange={handleChange}>
          {cities.map((city) => (
            <option
              key={city.name}
              value={city.name}
              data-lat={city.lat}
              data-long={city.long}
            >
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="weather-container">
        {weatherData &&
          weatherData.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
      </div>
    </div>
  );
};

export default Weather;
