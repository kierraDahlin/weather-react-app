import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }

  let apiKey = "cac27e453346e9164edaf605b6536f2f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from weather</h2>;
}
