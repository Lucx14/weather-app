import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div>
      <p>Weather App!</p>
      <p>Weather forecast</p>
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
      <div>
        <h5>Results of api call</h5>
      </div>
      <p>Current weather summary</p>
      <p>5 day weather forecast</p>
      <Forecast city="Madrid" />
    </div>
  );
}

export default App;
