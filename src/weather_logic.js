/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

import { updateCurrentLocationCard } from './weather_view';

// https://www.weatherapi.com/ key used for testing purposes
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

// SEARCH FUNCTIONALITY
const search = {
  input: document.querySelector('#search_input'),
  button: document.querySelector('.search_button'),
};

function passSearchValue() {
  currentLocation.name = search.input.value;
  getCurrentWeather();
}

search.button.addEventListener('click', passSearchValue);

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

// ASYNC FUNCTION TO FETCH API DATA
async function getCurrentWeather() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${currentLocation.name}`, { mode: 'cors' });
    const weatherData = await response.json();
    processCurrentWeather(weatherData);
  } catch (error) {
    console.log(error);
  }
}

export {
  getCurrentWeather,
  currentLocation,
};
