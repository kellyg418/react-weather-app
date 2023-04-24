import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by Kelly Granados and is open-sourced on{" "}
          <a href="https://github.com/kellyg418/react-weather-app">GitHub </a>
          and hosted on{" "}
          <a href="https://app.netlify.com/sites/react-weather-app-by-kg/overview">
            Netflify.
          </a>
        </footer>
      </div>
    </div>
  );
}
