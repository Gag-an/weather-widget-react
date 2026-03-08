import "./InfoBox.css";

export default function InfoBox({ info }) {
  const iconCode = info.icon || "01d";
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <section className="weather-card" aria-live="polite">
      <div className="weather-card-top">
        <div>
          <p className="weather-label">Current Weather</p>
          <h2>{info.city}</h2>
          <p className="weather-description">{info.weather}</p>
        </div>
        <div className="weather-icon-wrap">
          <img src={iconUrl} alt={info.weather} className="weather-icon" />
        </div>
      </div>

      <div className="weather-stats">
        <article>
          <p>Temperature</p>
          <h3>{Math.round(info.temp)}{"\u00B0"}C</h3>
        </article>
        <article>
          <p>Feels Like</p>
          <h3>{Math.round(info.feelsLike)}{"\u00B0"}C</h3>
        </article>
        <article>
          <p>Humidity</p>
          <h3>{info.humidity}%</h3>
        </article>
        <article>
          <p>Min / Max</p>
          <h3>
            {Math.round(info.tempMin)}{"\u00B0"} / {Math.round(info.tempMax)}{"\u00B0"}
          </h3>
        </article>
      </div>
    </section>
  );
}