import React from "react";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="weather-container">
      <Search city="New York" />
      <Current />
      <Forecast />
      <a
        href="https://github.com/kierraDahlin/weather-react-app"
        className="author-note"
      >
        Open-source code by Kierra Dahlin
      </a>
    </div>
  );
}

export default App;
