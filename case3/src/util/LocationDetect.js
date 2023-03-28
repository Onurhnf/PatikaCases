import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext.js";
import { cities } from "./Cities.js";

export const useLocationDetector = () => {
  const [locationDetected, setLocationDetected] = useState(false);
  const { updateCity } = useContext(WeatherContext);

  // detect the users location
  useEffect(() => {
    if (!locationDetected) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Find the nearest city
          const nearestCity = cities.reduce((prev, curr) => {
            const prevDistance = Math.hypot(
              prev.lat - latitude,
              prev.long - longitude
            );
            const currDistance = Math.hypot(
              curr.lat - latitude,
              curr.long - longitude
            );
            return prevDistance < currDistance ? prev : curr;
          });
          // Update the city using the updateCity function
          updateCity(nearestCity);

          setLocationDetected(true);
        },
        //setting eskisehir for location if an error occurred
        () => {
          updateCity(cities.find((city) => city.name === "Eskisehir"));
          setLocationDetected(true);
        }
      );
    }
  }, [locationDetected, updateCity]);
};
