import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Chandigarh",
    feelsLike: 28,
    humidity: 49,
    temp: 30,
    tempMax: 32,
    tempMin: 26,
    weather: "clear sky",
    icon: "01d",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <main className="weather-page">
      <div className="weather-shell">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </main>
  );
}