import React, { useState, useEffect } from "react";
import "./forecast.css";

import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  // only change the code, if props.coordinates changes

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
