import "./SeachBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b4d82fb9e3b342388dfc3b3aadfa06bd";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const jsonResponse = await response.json();

    return {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
      icon: jsonResponse.weather[0].icon,
    };
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    if (error) {
      setError(false);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <section className="search-box">
      <h1>Weather App</h1>
      <p className="search-subtitle">Check live weather in any city around the world.</p>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          id="city"
          type="text"
          placeholder="Enter city name"
          required
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error-msg">No weather data found for that city.</p>}
    </section>
  );
}