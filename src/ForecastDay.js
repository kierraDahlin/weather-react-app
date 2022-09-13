import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast-item">
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <h3>
        <span className="high">{maxTemp()}</span> |{" "}
        <span className="low">{minTemp()}</span>
      </h3>
      <h4>{day()}</h4>
    </div>
  );
}
