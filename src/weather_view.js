/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';
import { currentLocation, forecastArray } from './weather_logic';

// CURRENT WEATHER CARD ELEMENTS
const currentWeather = {
  name: document.querySelector('.ct_location_name'),
  region: document.querySelector('.ct_region_name'),
  country: document.querySelector('.ct_country_name'),
  tempC: document.querySelector('.ct_temperature_c'),
  conditionText: document.querySelector('.ct_condition_text'),
  conditionIcon: document.querySelector('.ct_condition_icon'),
  windKPH: document.querySelector('.ct_wind'),
  humidity: document.querySelector('.ct_humidity'),
};

function updateCurrentLocationCard() {
  currentWeather.name.textContent = currentLocation.name;
  currentWeather.region.textContent = `${currentLocation.region},`;
  currentWeather.country.textContent = currentLocation.country;
  currentWeather.tempC.textContent = `${Math.round(currentLocation.tempC)}°`;
  currentWeather.conditionText.textContent = currentLocation.conditionText;
  currentWeather.conditionIcon.src = currentLocation.conditionIcon;
  currentWeather.windKPH.textContent = `${currentLocation.windKPH} kph`;
  currentWeather.humidity.textContent = `${currentLocation.humidity} %`;
}

function updateForecastLocationCard() {
  const forecastContainer = document.querySelector('.forecast_container');
  forecastContainer.replaceChildren();

  for (const day of forecastArray) {
    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast_card');
    forecastContainer.appendChild(forecastCard);

    const forecastDate = document.createElement('div');
    forecastDate.classList.add('forecast_date');
    forecastDate.textContent = format(new Date(day.date), 'EEEE, MMMM dd');
    forecastCard.appendChild(forecastDate);

    const forecastMaxTemp = document.createElement('div');
    forecastMaxTemp.classList.add('forecast_temp');
    forecastMaxTemp.textContent = `Max: ${day.maxTempC}°`;
    forecastCard.appendChild(forecastMaxTemp);

    const forecastMinTemp = document.createElement('div');
    forecastMinTemp.classList.add('forecast_temp');
    forecastMinTemp.textContent = `Min: ${day.minTempC}°`;
    forecastCard.appendChild(forecastMinTemp);
  }
}

export {
  updateCurrentLocationCard,
  updateForecastLocationCard,
};
