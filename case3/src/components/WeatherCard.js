const WeatherCard = ({ weather }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(weather.date * 1000);
  const dayName = days[date.getDay()];

  //detecting today so the card can have different style
  const isToday = () => {
    const today = new Date();
    const weatherDate = new Date(weather.date * 1000);
    return (
      today.getFullYear() === weatherDate.getFullYear() &&
      today.getMonth() === weatherDate.getMonth() &&
      today.getDate() === weatherDate.getDate()
    );
  };

  return (
    <div className={`weather-card ${isToday() ? "today" : ""}`}>
      <h2 className="day">{dayName}</h2>
      <img
        className="weather-img"
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.description}
      />
      <div className="temp-container">
        <span className="temp-high">{Math.round(weather.tempMax)}°</span>
        <span className="temp-low">{Math.round(weather.tempMin)}°</span>
      </div>
      <div>
        <span className="weather-type">{weather.weatherType}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
