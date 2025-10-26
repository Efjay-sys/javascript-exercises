const convertToCelsius = function(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};
const fahrenheitTemp = 68;
let celsiusTemp = convertToCelsius(fahrenheitTemp)

console.log(convertToCelsius(100).toFixed(1))


const convertToFahrenheit = function(celsiusValue) {
  const fahrenheit = (celsiusValue * 9 / 5) + 32;
  return fahrenheit;
};
const celsiusValue = 25;
const fahrenheitValue = convertToFahrenheit(celsiusValue);

convertToFahrenheit(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
