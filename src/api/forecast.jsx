import axios from './axios';
import getData from './helpers';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default async function getForecast(city) {
  return axios
    .get(`forecast`, {
      params: {
        q: `${city}`,
        units: 'metric',
        cnt: 5,
        APPID: API_KEY,
      },
    })
    .then(getData);
}
