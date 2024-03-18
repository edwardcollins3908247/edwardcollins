# Edwardcollins 

Edwardcollins is a Node.js module that provides a collection of utility functions for temperature manipulation.

## Installation

You can install this module via npm: `npm install edwardcollins`

## Usage
```javascript
const frostyUtils = require('frosty-utils');

// Convert Celsius to Fahrenheit
console.log(frostyUtils.celsiusToFahrenheit(0)); // Output: 32

// Convert Fahrenheit to Celsius
console.log(frostyUtils.fahrenheitToCelsius(32)); // Output: 0

// Check if temperature is below freezing
console.log(frostyUtils.isBelowFreezing(-5)); // Output: true

// Format date
console.log(frostyUtils.formatDate(new Date())); // Output: Current date in 'YYYY-MM-DD' format
```