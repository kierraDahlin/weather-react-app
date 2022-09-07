import React from "react";
import axios from "axios";
import "./search.css";

export default function Search(props) {
  function handleResponse(response) {
    // console.log(response);
  }

  let apiKey = "cac27e453346e9164edaf605b6536f2f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
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
  );
}
