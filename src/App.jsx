import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
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
      <div>
        <h5>Results of api call</h5>
      </div>

      <p>Current weather summary</p>
      <p>5 day weather forecast</p>
    </div>
  );
}

export default App;

// follow the functionality of
// https://openweathermap.org/

// Maybe use google location api to retrieve the coordinates ?
// https://developers.google.com/maps/documentation/geolocation/intro

// Api call to
// api.openweathermap.org/data/2.5/weather?q=London&appid=8ac777d5bcfa74b1213aa6bfff4edb9c
// returns
// {
//   "coord": {
//     "lon": -0.13,
//     "lat": 51.51
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 284.64,
//     "feels_like": 278.18,
//     "temp_min": 283.15,
//     "temp_max": 286.48,
//     "pressure": 1022,
//     "humidity": 50
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 6.7,
//     "deg": 80
//   },
//   "clouds": {
//     "all": 0
//   },
//   "dt": 1588705339,
//   "sys": {
//     "type": 1,
//     "id": 1414,
//     "country": "GB",
//     "sunrise": 1588652659,
//     "sunset": 1588706999
//   },
//   "timezone": 3600,
//   "id": 2643743,
//   "name": "London",
//   "cod": 200
// }
