import React from "react";
import "./current.css";

export default function Current() {
  let weatherData = {
    city: "New York",
    desc: "Cloudy",
    date: "Tuesday 10:00",
    temp: "21",
    wind: "8",
    humidity: "58",
    low: "16",
    high: "22",
  };
  return (
    <div className="Current">
      <div className="current-weather-info">
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.desc}</h2>
        <h3>
          Last updated: <span>{weatherData.date}</span>
        </h3>
        <ul>
          <li>
            Wind:
            <span>{weatherData.wind}</span>km/h
          </li>
          <li>
            Humidity:
            <span>{weatherData.humidity}</span>%
          </li>
          <li>
            Low:
            <span>{weatherData.low}</span>°C
          </li>
          <li>
            High:
            <span>{weatherData.high}</span>°C
          </li>
        </ul>
      </div>

      <div className="current-weather-display">
        <i className="fa-solid fa-sun"></i>
        <h2>
          <span>{weatherData.temp}</span>°<span>C</span>
        </h2>
      </div>
    </div>
  );
}
