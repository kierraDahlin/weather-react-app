import React from "react";
import "./forecast.css";

import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="forecast-item">
        <WeatherIcon code="01d" size={40} />
        <h3>
          <span class="high">24°</span> | <span class="low">10°</span>
        </h3>
        <h4>Tues</h4>
      </div>
    </div>
  );
}
