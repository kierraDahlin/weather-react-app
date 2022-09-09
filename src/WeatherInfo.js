import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./weatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="Current">
      <div className="current-weather-info">
        <h1>{props.data.city}</h1>
        <h2>{props.data.description}</h2>
        <h3>
          Last updated:{" "}
          <span>
            <FormatedDate date={props.data.date} />
          </span>
        </h3>
        <ul>
          <li>
            Wind: <span>{props.data.wind}</span>km/h
          </li>
          <li>
            Humidity: <span>{props.data.humidity}</span>%
          </li>
          <li>
            Low: <span>{Math.round(props.data.low)}</span>°C
          </li>
          <li>
            High: <span>{Math.round(props.data.high)}</span>°C
          </li>
        </ul>
      </div>

      <div className="current-weather-display">
        <WeatherIcon code={props.data.icon} />
        <WeatherTemp celsius={props.data.temp} />
      </div>
    </div>
  );
}
