import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import "./current.css";
import FormatedDate from "./FormatedDate";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              name="search"
              placeholder="Search a location.."
            />
            <input className="search-btn" type="submit" value="Search" />
          </form>
          <button className="current-loc-btn">Current Location</button>
        </div>

        <div className="Current">
          <div className="current-weather-info">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.description}</h2>
            <h3>
              Last updated:{" "}
              <span>
                <FormatedDate date={weatherData.date} />
              </span>
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
                Low: <span>{Math.round(weatherData.low)}</span>°C
              </li>
              <li>
                High: <span>{Math.round(weatherData.high)}</span>°C
              </li>
            </ul>
          </div>

          <div className="current-weather-display">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <h2>
              <span>{Math.round(weatherData.temp)}</span>°<span>C</span>
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "cac27e453346e9164edaf605b6536f2f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
