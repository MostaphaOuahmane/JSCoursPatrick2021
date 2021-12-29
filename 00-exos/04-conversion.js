
var tempC = prompt("Rentrez une température en Celsius :");

console.log("1 Celsius = " + ((1 * 1.8) + 32) + " Fahrenheit.");
document.getElementById('li1').innerHTML = ('1 degré Celsius = ' + ((1 * 1.8) + 32) + ' Fahrenheit.');

console.log(tempC + " Celsius = " + (tempC * 1.8 + 32) + " Fahrenheit.");
document.getElementById('li2').innerHTML = (tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) + ' Fahrenheit.');


var tempF = (tempC * 1.8) + 32;
console.log("1 Fahrenheit = " + ((1 - 32) / 1.8) + " Celsius.");
document.getElementById('li3').innerHTML = ("1 degré Fahrenheit = " + ((1 - 32) / 1.8) + " Celsius.");

console.log(tempF + " Fahrenheit = " + ((tempF - 32) / 1.8) + " Celsius.");
document.getElementById('li4').innerHTML = (tempF + " degrés Fahrenheit = " + ((tempF - 32) / 1.8) + " Celsius.");
