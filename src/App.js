import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="weather-container">
      <Weather defaultCity="Westlock" />

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
