import "./current-weather.css";

const Currentweather = ({ data }) => {
  return (
    <div className="weather">
      <div className="first-container">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
      </div>
      <div className="second-container">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
        <div className="weather-icon-container">
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
      </div>
      <div className="last-container">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label header">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feel like</span>
            <div className="animation-div" />
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <div className="animation-div" />
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <div className="animation-div" />
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Presure</span>
            <div className="animation-div" />
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
