import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }

  function search() {
    let apiKey = "cac27e453346e9164edaf605b6536f2f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // search for the city
    search();
  }

  function handleCityChange(event) {
    // store input value
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="text"
              name="search"
              placeholder="Search a location.."
              onChange={handleCityChange}
            />
            <input className="search-btn" type="submit" value="Search" />
          </form>
          <button className="current-loc-btn">Current Location</button>
        </div>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
