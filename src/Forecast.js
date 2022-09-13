import React from "react";
import "./forecast.css";

import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="forecast-item">
        <WeatherIcon code="01d" size={40} />
        <h3>
          <span className="high">24°</span> | <span className="low">10°</span>
        </h3>
        <h4>Tues</h4>
      </div>
    </div>
  );
}
