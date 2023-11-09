# The Odin Project - Weather App
Full project description

## Project Description
Weather app that pulls information from [Weather API](https://www.weatherapi.com/)
The project is created with the intention of learning asyncrhonous code and APIs.

## Project Requirements
1. User should to search for a specific location in the world and retrieve weather data
2. User should be able to toggle between Fahrenheit or Celsius
3. The interface needs to updated based on the data fetched, changing, icons, backgrounds or other parts of the interface to help visualize the data

## Tech
The following tech should be used in this project:
1. [Webpack](https://webpack.js.org/)
2. [ESLint](https://eslint.org/)
3. [Weather API](https://www.weatherapi.com/)

### Template used as a starting point
https://github.com/bojorquezc/odin_template

## App UI/UX
**Search Bar**
A search field will be added to allow the user to search for their desired location, in case the location is not found, an error will be displayed

**Main Info Card**
Realtime API variables to display
*temp_c* - Temperature in celsius
*temp_f* - Temperature in fahrenheit
*condition:text* - Weather condition text
*condition:icon* - Weather icon url
*wind_kph* - Wind speed in kilometer per hour

**3 Day Forecast Section**
Forecast API variables to display
*forecastday -> day*
- Max, min and average temperature
- Max wind speed
- Total precipitation
- Day weather condition

**Background**
Background to update based on *localtime* and on *condition*
https://www.weatherapi.com/docs/weather_conditions.json