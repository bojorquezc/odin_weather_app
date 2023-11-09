/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { currentLocation } from './weather_logic';

const currentWeather = {
  name: document.querySelector('.ct_location_name'),
  region: document.querySelector('.ct_region_name'),
  country: document.querySelector('.ct_country_name'),
  tempC: document.querySelector('.ct_temperature_c'),
  conditionText: document.querySelector('.ct_condition_text'),
  conditionIcon: document.querySelector('.ct_condition_icon'),
};

function updateCurrentLocationCard() {
  currentWeather.name.textContent = currentLocation.name;
  currentWeather.region.textContent = currentLocation.region;
  currentWeather.country.textContent = currentLocation.country;
  currentWeather.tempC.textContent = Math.round(currentLocation.tempC);
  currentWeather.conditionText.textContent = currentLocation.conditionText;
  currentWeather.conditionIcon.src = currentLocation.conditionIcon;
}

export {
  updateCurrentLocationCard,
};
