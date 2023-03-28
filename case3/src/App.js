import React from "react";
import WeatherContextProvider from "./contexts/WeatherContext";
import Weather from "./components/Weather";
import "./style.css";
function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <Weather />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
