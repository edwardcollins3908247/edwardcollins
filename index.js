// FrostyUtils.js

const _ = require('lodash');
const moment = require('moment');

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Function to check if a temperature is below freezing
function isBelowFreezing(temperature) {
  return temperature < 0;
}

// Function to format a date in a specific format
function formatDate(date, format = 'YYYY-MM-DD') {
  return moment(date).format(format);
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  isBelowFreezing,
  formatDate
};
