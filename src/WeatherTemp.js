import React from "react";

export default function WeatherTemp(props) {
  return (
    <h2>
      <span>{Math.round(props.celsius)}</span>
      <span>°C</span>
    </h2>
  );
}
