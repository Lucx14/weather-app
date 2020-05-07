import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div>
      <p>Weather App!</p>
      <p>search field</p>
      <form onSubmit={() => {}}>
        <label htmlFor="city">
          City:{' '}
          <input
            id="city"
            type="text"
            onChange={() => {}}
            name="submitted-city"
            placeholder="Your city name"
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      <p>Current Location</p>
      <p>5 day weather forecast</p>
      <Weather city="London" />
      <Forecast city="London" />
    </div>
  );
}

export default App;
