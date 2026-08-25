import React from 'react'
import { useState } from 'react';
import './Box.css'

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  async function Weather() {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    const data=await response.json();
    setWeather(data);
  }
  function a(event){
    setCity(event.target.value);
  }
  return (
    <div className="A">
      <header className="A1">
        <h2>⛅Weather App</h2>
      </header>
      <input
      className="A2"
        type="text"
        placeholder="🔍︎Enter city name..."
        value={city}
        onChange={a}
      />
      <button className="A3" onClick={Weather}>Search</button>
      {weather && weather.results&&(
        <div>
          <h3>{weather.results[0].name}</h3>
          <p>Country: {weather.results[0].country}</p>
          <p>Temperature: {weather.results[0].temperature}°C</p>
          <p>Humidity: {weather.results[0].humidity}%</p>
        </div>
      )}
    </div>
    
  )
}

export default App

