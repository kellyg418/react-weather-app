import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Kelly Granados and is open-sourced on{" "}
          <a href="https://github.com/kellyg418/react-weather-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
