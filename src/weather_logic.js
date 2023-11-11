/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

import { updateCurrentLocationCard, updateForecastLocationCard } from './weather_view';

// https://www.weatherapi.com/ KEY USED FOR TESTING PURPOSES
const weatherKey = 'aa5d5e7c5a884934b6933933230911';

// APP STARTS WITH QUERY OF TIJUANA, MEXICO
let currentLocation = {
  name: 'Tijuana',
  region: '',
  country: '',
  tempC: 0.1,
  tempF: 0.1,
  conditionText: '',
  conditionIcon: '',
  windKPH: 0.1,
  humidity: 0,
};

let forecastLocation = {
  date: '',
  maxTempC: 0.1,
  maxTempF: 0.1,
  minTempC: 0.1,
  minTempF: 0.1,
};

let forecastArray = [];

// SEARCH FUNCTIONALITY
const search = {
  input: document.querySelector('#search_input'),
  button: document.querySelector('.search_button'),
};

function passSearchValue() {
  currentLocation.name = search.input.value;
  getCurrentWeather();
  getForecastWeather();
}

search.button.addEventListener('click', passSearchValue);
search.input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    passSearchValue();
  }
});

// PROCESS DATA FROM CURRENT WEATHER API
function processCurrentWeather(data) {
  currentLocation = {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
    conditionText: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    windKPH: data.current.wind_kph,
    humidity: data.current.humidity,
  };
  updateCurrentLocationCard();
  console.log(currentLocation);
}

// PROCESS DATA FROM FORECAST WEATHER API
function processForecastWeather(data) {
  forecastArray = [];
  for (let index = 0; index <= 2; index += 1) {
    forecastLocation = {
      date: new Date(data.forecast.forecastday[index].date.replace(/-/g, '/')),
      maxTempC: data.forecast.forecastday[index].day.maxtemp_c,
      maxTempF: data.forecast.forecastday[index].day.maxtemp_f,
      minTempC: data.forecast.forecastday[index].day.mintemp_c,
      minTempF: data.forecast.forecastday[index].day.mintemp_f,
    };
    forecastArray.push(forecastLocation);
    console.log(forecastLocation);
  }
  updateForecastLocationCard();
}

// ASYNC FUNCTION TO FETCH CURRENT WEATHER DATA
async function getCurrentWeather() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${currentLocation.name}`, { mode: 'cors' });
    const weatherData = await response.json();
    processCurrentWeather(weatherData);
  } catch (error) {
    console.log(error);
  }
}

// ASYNC FUNCTION TO FETCH FORECAST WEATHER DATA
async function getForecastWeather() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${currentLocation.name}&days=3`, { mode: 'cors' });
    const weatherData = await response.json();
    processForecastWeather(weatherData);
  } catch (error) {
    console.log(error);
  }
}

export {
  getCurrentWeather,
  getForecastWeather,
  currentLocation,
  forecastArray,
};
