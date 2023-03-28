import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState();
  const apiKey = "be4ba1e6129c18bb65ffb48a297c09c6";

  //fetcing the weather data each time city changed
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!city) {
          return;
        }
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.long}&units=metric&lang=en&lang=tr&appid=${apiKey}&cnt=40
          `
        );

        const filteredData = data.list.filter((weatherData) =>
          weatherData.dt_txt.includes("12:00:00")
        );
        const weather = filteredData.map((weatherData) => {
          return {
            date: new Date(weatherData.dt),
            tempMax: Math.round(weatherData.main.temp_max),
            tempMin: Math.round(weatherData.main.temp_min),
            weatherType: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
          };
        });

        setWeatherData(weather.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);

  const updateCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateCity, city }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
