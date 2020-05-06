import axios from './axios';
import getData from './helpers';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default async function getWeather(city) {
  return axios
    .get(`weather`, {
      params: {
        q: `${city}`,
        units: 'metric',
        appid: API_KEY,
      },
    })
    .then(getData);
}
